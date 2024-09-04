import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import api from '../api/api';
import { useDispatch } from 'react-redux';
import { setLoggedIn, setUserDetails } from '../redux/userActions';

const AuthCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const urlPath = new URL(window.location.href);
    const pathParts = urlPath.pathname.split("/");
    const provider = pathParts[pathParts.length - 1];

    if (code) {
      getUserDetail(provider, code);
    }
  }, []);

  const getAccessToken = (provider, code) => {
    let tokenUrl, tokenData, headers;

    switch (provider) {
      case 'google':
        tokenUrl = 'https://accounts.google.com/o/oauth2/token';
        tokenData = new URLSearchParams({
          code: code,
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
          redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
          grant_type: 'authorization_code',
        });
        headers = {
          'Content-Type': 'application/x-www-form-urlencoded'
        };
        break;
      case 'facebook':
        let appId = process.env.REACT_APP_FACEBOOK_CLIENT_ID;
        let appSecret = process.env.REACT_APP_FACEBOOK_CLIENT_SECRET;
        let redirect = process.env.REACT_APP_FACEBOOK_REDIRECT_URI;
        headers = {};
        tokenUrl = `https://graph.facebook.com/v20.0/oauth/access_token?client_id=${appId}&redirect_uri=${encodeURIComponent(redirect)}&client_secret=${appSecret}&code=${code}`;
        break;
      case 'instagram':
        tokenUrl = 'https://api.instagram.com/oauth/access_token';
        tokenData = new URLSearchParams({
          code: code,
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
          redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
          grant_type: 'authorization_code',
        });
        headers = {};
        break;
      case 'twitter':
        tokenUrl = 'https://api.twitter.com/oauth2/token';
        tokenData = new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: process.env.REACT_APP_TWITTER_REDIRECT_URI,
          code_verifier: localStorage.get('codeChallenge')
        });

        let clientId = process.env.REACT_APP_TWITTER_CLIENT_ID;
        let clientSecret = process.env.REACT_APP_TWITTER_CLIENT_SECRET;
        let credentials = `${clientId}:${clientSecret}`;
        let encCredentials = btoa(credentials);
        headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${encCredentials}`
        };
        break;
      default:
        Swal.fire({
          icon: 'error',
          title: 'Ditemukan error saat mendapatkan access token',
          text: 'Provider tidak dikenal',
        });
        return;
    }

    if (provider === 'facebook') {
      return api.get(tokenUrl, headers)
        .then(data => {
          const token = data.access_token;
          console.log(token);
          return token;
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Ditemukan Error',
            text: `Gagal mendapatkan access token: ${error}`,
          });
          throw error;
        });
    } else {
      return api.post(tokenUrl, tokenData, headers)
        .then(data => {
          const token = data.access_token;
          console.log(token);
          return token;
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Ditemukan Error',
            text: `Gagal mendapatkan access token: ${error}`,
          });
          throw error;
        });
    }
  };

  const getUserDetail = (provider, code) => {
    getAccessToken(provider, code).then(accessToken => {
      let userInfoUrl;
      let headers;

      switch (provider) {
        case 'google':
          userInfoUrl = 'https://www.googleapis.com/oauth2/v3/userinfo';
          headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          };
          break;
        case 'facebook':
          userInfoUrl = `https://graph.facebook.com/v20.0/me?fields=id,name,email&access_token=${accessToken}`;
          headers = {};
          break;
        case 'instagram':
          userInfoUrl = `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`;
          headers = {};
          break;
        case 'twitter':
          userInfoUrl = `https://api.x.com/2/users/me`;
          headers = {
            'Authorization': `Bearer ${accessToken}`
          };
          break;
        default:
          Swal.fire({
            icon: 'error',
            title: 'Ditemukan Error',
            text: 'Provider tidak dikenal',
          });
          return;
      }

      api.get(userInfoUrl, headers)
        .then(userInfo => {
          console.log('User info:', userInfo);
          dispatch(setUserDetails(userInfo));
          dispatch(setLoggedIn(true));
          navigate('/');
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Ditemukan error saat mendapatkan user detail',
            text: `Gagal mendapatkan info pengguna: ${error}`,
          });
        });
    });
  };

  return <div>Loading...</div>;
};

export default AuthCallback;
