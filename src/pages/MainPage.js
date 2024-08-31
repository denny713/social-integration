import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { logoutUser } from "../redux/userActions";

const MainPage = ({ user }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
        localStorage.removeItem("user");
        Swal.fire({
            icon: 'info',
            title: 'Logged Out',
            text: 'Goodbye!',
        });
    };

    return (
        <div className="main-page">
            <h1>Home Page</h1>
            <p>ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Name: {user.name}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default MainPage;
