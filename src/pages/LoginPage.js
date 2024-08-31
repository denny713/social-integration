import React from "react";
import SocialButton from "../components/SocialButton";

const LoginPage = () => {
    return (
        <div className="login-page">
            <h1>Social Media Login</h1>
            <SocialButton socialMedia="google" />
            <SocialButton socialMedia="facebook" />
            <SocialButton socialMedia="instagram" />
            <SocialButton socialMedia="twitter" />
        </div>
    );
};

export default LoginPage;
