import Axios from 'axios';
import { CREATE_ACTIVITY_FAIL, CREATE_ACTIVITY_REQUEST, CREATE_ACTIVITY_SUCCESS, DELETE_ACTIVITY_FAIL, DELETE_ACTIVITY_REQUEST, DELETE_ACTIVITY_SUCCESS, GET_ACTIVITY_FAIL, GET_ACTIVITY_REQUEST, GET_ACTIVITY_SUCCESS, GET_MENU_CATEGORIES_FAIL, GET_MENU_CATEGORIES_REQUEST, GET_MENU_CATEGORIES_SUCCESS, GET_MENU_FOODS_FAIL, GET_MENU_FOODS_REQUEST, GET_MENU_FOODS_SUCCESS, UPDATE_ACTIVITY_FAIL, UPDATE_ACTIVITY_REQUEST, UPDATE_ACTIVITY_SUCCESS } from '../constants/menuConstants';

export const getMenuCategories = () => async (dispatch, getState) => {
  dispatch({
      type: GET_MENU_CATEGORIES_REQUEST
  });
  const {
    userToken: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.get('https://neocafe-staging.herokuapp.com/menu/2/categories/', {
          headers: {
              'Authorization': `Bearer ${userInfo.latestToken}`
          }
      });
      dispatch({ type: GET_MENU_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: GET_MENU_CATEGORIES_FAIL, payload: error.message });
  }
}

export const getMenuFoods = (menuCategories) => async (dispatch, getState) => {
  dispatch({
      type: GET_MENU_FOODS_REQUEST
  });
  const {
    userToken: { userInfo },
  } = getState();
  try {
      const data = await Axios.all(menuCategories.map((item) => {
        return Axios.get(`https://neocafe-staging.herokuapp.com/menu/2/categories/${item.id}`, {
          headers: {
              'Authorization': `Bearer ${userInfo.latestToken}`
          }
      })}
      ));
      dispatch({ type: GET_MENU_FOODS_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: GET_MENU_FOODS_FAIL, payload: error.message });
  }
}

export const createActivity = (bodyFormData) => async (dispatch, getState) => {
    dispatch({ type: CREATE_ACTIVITY_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        'http://167.172.167.145:9090/activities',
        bodyFormData,
        {
            'Content-Type': 'multipart/form-data',
            headers: { Authorization: `Bearer ${userInfo.jwt}` },
        }
      );
      console.log(data);
      dispatch({
        type: CREATE_ACTIVITY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CREATE_ACTIVITY_FAIL, payload: message });
    }
};

export const updateActivity = (bodyFormData, activityId) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_ACTIVITY_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `http://167.172.167.145:9090/activities/${activityId}`,
      bodyFormData,
      {
          'Content-Type': 'multipart/form-data',
          headers: { Authorization: `Bearer ${userInfo.jwt}` },
      }
    );
    dispatch({
      type: UPDATE_ACTIVITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: UPDATE_ACTIVITY_FAIL, payload: error.message });
  }
};

export const getActivity = (id) => async (dispatch, getState) => {
  dispatch({
      type: GET_ACTIVITY_REQUEST
  });
  const {
      userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.get(`http://167.172.167.145:9090/activities/${id}`, {
          headers: {
              'Authorization': `Bearer ${userInfo.jwt}`
          }
      });
      dispatch({ type: GET_ACTIVITY_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: GET_ACTIVITY_FAIL, payload: error.message });
  }
};

export const deleteActivity = (id) => async (dispatch, getState) => {
  dispatch({
      type: DELETE_ACTIVITY_REQUEST
  });
  const {
      userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.delete(`http://167.172.167.145:9090/activities/${id}`, {
          headers: {
              'Authorization': `Bearer ${userInfo.jwt}`
          }
      });
      dispatch({ type: DELETE_ACTIVITY_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: DELETE_ACTIVITY_FAIL, payload: error.message });
  }
};