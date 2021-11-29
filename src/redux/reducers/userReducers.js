import { CHECK_USER_FAIL, CHECK_USER_REQUEST, CHECK_USER_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants";

export const userSigninReducer = (state = {loading: false}, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      case USER_SIGNOUT:
        return {};
      default:
        return state;
    }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loadingRegister: true };
    case USER_REGISTER_SUCCESS:
      return { loadingRegister: false, dataRegister: action.payload };
    case USER_REGISTER_FAIL:
      return { loadingRegister: false, errorRegister: action.payload };
    default:
      return state;
  }
};

export const checkUserReducer = (state = {}, action) => {
  switch (action.type) {
    case CHECK_USER_REQUEST:
      return { loadingCheckUser: true };
    case CHECK_USER_SUCCESS:
      return { loadingCheckUser: false, dataCheckUser: action.payload };
    case CHECK_USER_FAIL:
      return { loadingCheckUser: false, dataCheckUser: action.payload };
    default:
      return state;
  }
};