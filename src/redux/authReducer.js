
const defaultState = {
    isLoggedIn: false,
    username: undefined,
    displayName: undefined,
    image: undefined,
    password: undefined,
  };
  
  //give last state and action to reducer
  const authReducer = (state = { ...defaultState}, action) => {
    if (action.type === "LOGOUT_SUCCESS") {
      return defaultState;
    } else if (action.type === "LOGIN_SUCCESS") {
      return{
        ... action.payload,
        isLoggedIn: true,
      }
    }
    return state;
  };

  export default authReducer;