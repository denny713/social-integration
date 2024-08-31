import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { useSelector } from "react-redux";

const AppRoutes = () => {
    const { isLoggedIn, user } = useSelector((state) => state);

    return (
        <Router>
            <Routes>
                <Route path="/" element={isLoggedIn ? <MainPage user={user} /> : <LoginPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
