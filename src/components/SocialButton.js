import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const SocialButton = ({ socialMedia }) => {
    const handleLogin = () => {
        let clientId, redirectPath, scope, authUrl;
        let state = uuidv4();
        sessionStorage.setItem('oauthState', state);

        switch (socialMedia) {
            case 'google':
                clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
                redirectPath = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
                scope = process.env.REACT_APP_GOOGLE_SCOPE;
                authUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&access_type=offline&redirect_uri=${redirectPath}&response_type=code&client_id=${clientId}&state=${state}`;
                break;
            case 'facebook':
                clientId = process.env.REACT_APP_FACEBOOK_CLIENT_ID;
                redirectPath = process.env.REACT_APP_FACEBOOK_REDIRECT_URI;
                scope = process.env.REACT_APP_FACEBOOK_SCOPE;
                authUrl = `https://www.facebook.com/v20.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectPath}&response_type=code`
                break;
            case 'instagram':
                clientId = process.env.REACT_APP_INSTAGRAM_CLIENT_ID;
                redirectPath = process.env.REACT_APP_INSTAGRAM_REDIRECT_URI;
                scope = process.env.REACT_APP_INSTAGRAM_SCOPE;
                authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectPath}&scope=${scope}&response_type=code`;
                break;
            case 'twitter':
                localStorage.removeItem('codeChallenge');
                clientId = process.env.REACT_APP_TWITTER_CLIENT_ID;
                redirectPath = process.env.REACT_APP_TWITTER_REDIRECT_URI;
                scope = process.env.REACT_APP_TWITTER_SCOPE;
                state = Math.random().toString(36).substr(2, 10);

                let codeChallenge = Math.random().toString(36).substr(2, 10);
                let method = 'plain';

                localStorage.setItem('codeChallenge', codeChallenge);
                authUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectPath}&scope=${scope}&state=${state}&code_challenge=${codeChallenge}&code_challenge_method=${method}`;
                break;
            default:
                return;
        }

        if (authUrl) {
            window.location.href = authUrl;
        }
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

    return (
        <button className={socialMedia} onClick={handleLogin}>
            <FontAwesomeIcon icon={getIcon()} /> Login with {socialMedia.charAt(0).toUpperCase() + socialMedia.slice(1)}
        </button>
    );
};

export default SocialButton;
