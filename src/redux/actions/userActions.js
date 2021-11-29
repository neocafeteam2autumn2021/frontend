import Axios from 'axios';
import { CHECK_USER_FAIL, CHECK_USER_REQUEST, CHECK_USER_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from '../constants/userConstants';

export const refreshToken = (refreshToken) => async (dispatch) => {
  try {
    const { data } = await Axios.post('https://neocafe-staging.herokuapp.com/refresh_token/', { refresh: refreshToken });
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    var newUserInfo = {access: data.access, refresh: userInfo.refresh}
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: newUserInfo });
    localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
  } catch (error) {
    console.log(error);
    // dispatch({
    //   type: USER_SIGNIN_FAIL,
    //   payload:
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message,
    // });
  }
};

export const login = (uid) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });
    try {
      const { data } = await Axios.post('https://neocafe-staging.herokuapp.com/login/', { uid });
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

export const register = (uid, date, latestToken, mynumber, name, surname) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    await Axios.post('https://neocafe-staging.herokuapp.com/register/',
      { phone_number: mynumber,
        name: name,
        registration_token: latestToken,
        device_type: "web",
        uid: uid,
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