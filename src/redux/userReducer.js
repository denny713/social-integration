const initialState = {
    isLoggedIn: false,
    user: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case "SET_LOGGED_IN":
            return {
                ...state,
                isLoggedIn: action.payload,
            };
        case "SET_USER_DETAILS":
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
