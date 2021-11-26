import Axios from 'axios';
import { GET_PLACE_ORDERS_FAIL, GET_PLACE_ORDERS_REQUEST, GET_PLACE_ORDERS_SUCCESS, GET_TAKEAWAY_ORDERS_FAIL, GET_TAKEAWAY_ORDERS_REQUEST, GET_TAKEAWAY_ORDERS_SUCCESS } from '../constants/orderConstants';

export const getTakeawayOrders = (id) => async (dispatch, getState) => {
  dispatch({
      type: GET_TAKEAWAY_ORDERS_REQUEST
  });
  const {
    userToken: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.get(`https://neocafe-staging.herokuapp.com/orders/${id}/`, {
          headers: {
              'Authorization': `Bearer ${userInfo.latestToken}`
          }
      });
      dispatch({ type: GET_TAKEAWAY_ORDERS_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: GET_TAKEAWAY_ORDERS_FAIL, payload: error.message });
  }
};

export const getPlaceOrders = (id) => async (dispatch, getState) => {
    dispatch({
        type: GET_PLACE_ORDERS_REQUEST
    });
    const {
        userToken: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.get(`https://neocafe-staging.herokuapp.com/in_place_orders/${id}/`, {
            headers: {
                'Authorization': `Bearer ${userInfo.latestToken}`
            }
        });
        dispatch({ type: GET_PLACE_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_PLACE_ORDERS_FAIL, payload: error.message });
    }
  };