import { CHECK_USER_FAIL, CHECK_USER_REQUEST, CHECK_USER_SUCCESS, GET_USERAGREEMENT_FAIL, GET_USERAGREEMENT_REQUEST, GET_USERAGREEMENT_SUCCESS, GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS, PUT_USERAGREEMENT_FAIL, PUT_USERAGREEMENT_REQUEST, PUT_USERAGREEMENT_RESET, PUT_USERAGREEMENT_SUCCESS, USER_INFO_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_TOKEN_SUCCESS } from "../constants/userConstants";

export const userTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_TOKEN_SUCCESS:
      return { userInfoFull: action.payload };
    case USER_INFO_SUCCESS:
      return { userInfo: action.payload };
    default:
      return state;
  }
};

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

export const getAllUsersReducer = (state = {}, action) => {
  switch(action.type) {
      case GET_USERS_REQUEST:
          return { loadingAllUsers: true };
      case GET_USERS_SUCCESS:
          return {
              loadingAllUsers: false,
              allUsersData: action.payload.content
           };
      case GET_USERS_FAIL:
          return { loadingAllUsers: false, errorAllUsers: action.payload };
      default:
          return state;
  }
};

export const getUserAgreementReducer = (state = {}, action) => {
  switch(action.type) {
      case GET_USERAGREEMENT_REQUEST:
          return { loadingUserAgreement: true };
      case GET_USERAGREEMENT_SUCCESS:
          return {
              loadingUserAgreement: false,
              userAgreementData: action.payload
           };
      case GET_USERAGREEMENT_FAIL:
          return { loadingUserAgreement: false, errorUserAgreement: action.payload };
      default:
          return state;
  }
};

export const putUserAgreementReducer = (state = {}, action) => {
  switch(action.type) {
      case PUT_USERAGREEMENT_REQUEST:
          return { loadingUpdatedAgreement: true };
      case PUT_USERAGREEMENT_SUCCESS:
          return {
              loadingUpdatedAgreement: false,
              updatedAgreement: action.payload
           };
      case PUT_USERAGREEMENT_FAIL:
          return { loadingUpdatedAgreement: false, errorUpdatedAgreement: action.payload };
      case PUT_USERAGREEMENT_RESET:
          return {};
      default:
          return state;
  }
};