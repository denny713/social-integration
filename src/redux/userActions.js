export const loginUser = (userData) => {
    return {
        type: "LOGIN",
        payload: userData,
    };
};

export const logoutUser = () => {
    return {
        type: "LOGOUT",
    };
};

export const setLoggedIn = (isLoggedIn) => ({
    type: 'SET_LOGGED_IN',
    payload: isLoggedIn,
  });
  
  export const setUserDetails = (user) => ({
    type: 'SET_USER_DETAILS',
    payload: user,
  });