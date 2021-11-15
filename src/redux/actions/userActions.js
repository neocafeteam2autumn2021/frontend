import Axios from 'axios';
import { CHECK_USER_FAIL, CHECK_USER_REQUEST, CHECK_USER_SUCCESS, GET_USERAGREEMENT_FAIL, GET_USERAGREEMENT_REQUEST, GET_USERAGREEMENT_SUCCESS, GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS, PUT_USERAGREEMENT_FAIL, PUT_USERAGREEMENT_REQUEST, PUT_USERAGREEMENT_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from '../constants/userConstants';

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
      const { data } = await Axios.post('http://167.172.167.145:9090/login', { email, password });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_SIGNIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
};

export const register = (date, latestToken, mynumber, name, surname) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    await Axios.post('https://neocafe-staging.herokuapp.com/register/',
      { phone_number: mynumber,
        name: name,
        registration_token: latestToken,
        device_type: "web",
        type_of_user: 3,
        date_of_birth: date,
        surname: surname }
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: true });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfoFull');
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_SIGNOUT });
};

export const checkUser = (number) => async (dispatch) => {
  dispatch({ type: CHECK_USER_REQUEST });
  try {
    await Axios.post('https://neocafe-staging.herokuapp.com/check_user/', { "phone_number": number });
    dispatch({ type: CHECK_USER_SUCCESS, payload: true });
  } catch (error) {
    dispatch({ type: CHECK_USER_FAIL, payload: false});
  }
};

export const getAllUsers = () => async (dispatch, getState) => {
  dispatch({
      type: GET_USERS_REQUEST
  });
  const {
      userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.get('http://167.172.167.145:9090/users', {
          headers: {
              'Authorization': `Bearer ${userInfo.jwt}`
          }
      });
      dispatch({ type: GET_USERS_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: GET_USERS_FAIL, payload: error.message });
  }
}

export const getUserAgreement = () => async (dispatch, getState) => {
  dispatch({
      type: GET_USERAGREEMENT_REQUEST
  });
  const {
      userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.get('http://167.172.167.145:9090/documents/user-agreement', {
          headers: {
              'Authorization': `Bearer ${userInfo.jwt}`
          }
      });
      dispatch({ type: GET_USERAGREEMENT_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: GET_USERAGREEMENT_FAIL, payload: error.message });
  }
}

export const putUserAgreement = (value) => async (dispatch, getState) => {
  dispatch({
      type: PUT_USERAGREEMENT_REQUEST
  });
  const {
      userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.put('http://167.172.167.145:9090/documents/user-agreement',
        value,
        {
          headers: {
              'Authorization': `Bearer ${userInfo.jwt}`
          }
      });
      dispatch({ type: PUT_USERAGREEMENT_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: PUT_USERAGREEMENT_FAIL, payload: error.message });
  }
}