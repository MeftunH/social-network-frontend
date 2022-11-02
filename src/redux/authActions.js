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
  return  function(dispatch){

    const response =  login(creds); 
    const authState = {
     ...response.data,
     password,
   };
   dispatch(loginSuccess(authState));
    }
}