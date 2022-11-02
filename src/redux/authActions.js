import * as ACTIONS from './Constants'
import {login} from '../api/apiCalls'
export const logoutSuccess = () => {
 return {
    type: ACTIONS.LOGOUT_SUCCESS,
 }
}

export const loginSuccess = (authState) => {
    return {
        type: ACTIONS.LOGIN_SUCCESS,
        payload: authState,
    }
};

export const loginHandler = (creds) => {
login(creds);
}