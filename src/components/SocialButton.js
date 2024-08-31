import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { loginUser } from "../redux/userActions";

const SocialButton = ({ socialMedia }) => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        let clientId;

        switch (socialMedia) {
            case 'google':
                clientId = process.env.GOOGLE_CLIENT_ID;
                break;
            case 'facebook':
                clientId = process.env.FACEBOOK_CLIENT_ID;
                break;
            case 'instagram':
                clientId = process.env.INSTAGRAM_CLIENT_ID;
                break;
            case 'twitter':
                clientId = process.env.TWITTER_CLIENT_ID;
                break;
            default:
                break;
        }

        axios.get(`/auth/${socialMedia}`, {
            params: { client_id: clientId }
        })
        .then(response => {
            const { authorizationCode } = response.data;

            return axios.post(`/auth/${socialMedia}/token`, { authorizationCode });
        })
        .then(tokenResponse => {
            const { accessToken } = tokenResponse.data;

            return axios.get(`/auth/${socialMedia}/user`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
        })
        .then(userResponse => {
            const userData = userResponse.data;
            
            dispatch(loginUser(userData));
            localStorage.setItem("user", JSON.stringify(userData));

            Swal.fire({
                icon: 'success',
                title: 'Login Successful!',
                text: `Welcome, ${userData.name}`,
            });
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Please try again!',
            });
        });
    };

    const getIcon = () => {
        switch (socialMedia) {
            case 'google': return faGoogle;
            case 'facebook': return faFacebook;
            case 'instagram': return faInstagram;
            case 'twitter': return faTwitter;
            default: return null;
        }
    };

    const setButtonClass = () => {
        switch (socialMedia) {
            case 'google': return 'google';
            case 'facebook': return 'facebook';
            case 'instagram': return 'instagram';
            case 'twitter': return 'twitter';
            default: return null;
        }
    };

    return (
        <button className={setButtonClass()} onClick={handleLogin}>
            <FontAwesomeIcon icon={getIcon()} /> Login with {socialMedia.charAt(0).toUpperCase() + socialMedia.slice(1)}
        </button>
    );
};

export default SocialButton;
