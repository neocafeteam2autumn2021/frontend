import Axios from 'axios';
import { GET_MENU_CATEGORIES_FAIL, GET_MENU_CATEGORIES_REQUEST, GET_MENU_CATEGORIES_SUCCESS, GET_MENU_FOODS_FAIL, GET_MENU_FOODS_REQUEST, GET_MENU_FOODS_SUCCESS } from '../constants/menuConstants';

export const getMenuCategories = () => async (dispatch, getState) => {
  dispatch({
      type: GET_MENU_CATEGORIES_REQUEST
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.get('https://neocafe-staging.herokuapp.com/menu/2/categories/', {
          headers: {
              'Authorization': `Bearer ${userInfo.access}`
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
    userSignin: { userInfo },
  } = getState();
  try {
      const data = await Axios.all(menuCategories.map((item) => {
        return Axios.get(`https://neocafe-staging.herokuapp.com/menu/2/categories/${item.id}`, {
          headers: {
              'Authorization': `Bearer ${userInfo.access}`
          }
      })}
      ));
      dispatch({ type: GET_MENU_FOODS_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: GET_MENU_FOODS_FAIL, payload: error.message });
  }
}