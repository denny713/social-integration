import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { logoutUser } from "../redux/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const MainPage = ({ user }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
        localStorage.removeItem("user");
        Swal.fire({
            icon: 'info',
            title: 'Logged Out',
            text: `Wassalamu'alaikum Wr Wb`,
        });
    };

    return (
        <div className="main-page">
            <h1>Home Page</h1>
            <p>ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Name: {user.name}</p>
            <button className="logout-button" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
        </div>
    );
};

export default MainPage;
