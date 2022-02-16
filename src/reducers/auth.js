import { AUTH, AUTH2, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authDate: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
        return { ...state, authData: action?.data };
        case AUTH2:
            localStorage.setItem('_grecaptcha', JSON.stringify({ ...action?.data }));
        return { ...state, authData: action?.data };
        case LOGOUT:
            localStorage.clear();
        return { ...state, authData: null };
        default:
        return state;
    }
};
export default authReducer;