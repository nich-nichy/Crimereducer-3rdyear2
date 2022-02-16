import { AUTH } from '../constants/actionTypes';

export const signin = (formDate, navigate) => async(dispatch) => {
    try {
         navigate('/')
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formDate, navigate) => async(dispatch) => {
    try {
         navigate('/')
    } catch (error) {
        console.log(error);
    }
}