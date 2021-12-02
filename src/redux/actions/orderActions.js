import Axios from 'axios';
import { ADD_QUICK_ORDER_FAIL, ADD_QUICK_ORDER_REQUEST, ADD_QUICK_ORDER_SUCCESS, GET_PLACE_ORDERS_FAIL, GET_PLACE_ORDERS_REQUEST, GET_PLACE_ORDERS_SUCCESS, GET_QUICK_ORDERS_FAIL, GET_QUICK_ORDERS_REQUEST, GET_QUICK_ORDERS_SUCCESS, GET_TAKEAWAY_ORDERS_FAIL, GET_TAKEAWAY_ORDERS_REQUEST, GET_TAKEAWAY_ORDERS_SUCCESS } from '../constants/orderConstants';

export const getTakeawayOrders = (id) => async (dispatch, getState) => {
  dispatch({
      type: GET_TAKEAWAY_ORDERS_REQUEST
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.get(`https://neocafe-staging.herokuapp.com/orders/${id}/`, {
          headers: {
              'Authorization': `Bearer ${userInfo.access}`
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
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.get(`https://neocafe-staging.herokuapp.com/in_place_orders/${id}/`, {
            headers: {
                'Authorization': `Bearer ${userInfo.access}`
            }
        });
        dispatch({ type: GET_PLACE_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_PLACE_ORDERS_FAIL, payload: error.message });
    }
};

export const addQuickOrder = (id) => async (dispatch, getState) => {
    dispatch({
        type: ADD_QUICK_ORDER_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.post('https://neocafe-staging.herokuapp.com/fast_order/',
        {
            food_id: id,
            quantity: 1
        },
        {
            headers: {
                'Authorization': `Bearer ${userInfo.access}`
            }
        });
        dispatch({ type: ADD_QUICK_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ADD_QUICK_ORDER_FAIL, payload: error.message });
    }
};

export const getQuickOrders = () => async (dispatch, getState) => {
    dispatch({
        type: GET_QUICK_ORDERS_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.get(`https://neocafe-staging.herokuapp.com/fast_order/`, {
            headers: {
                'Authorization': `Bearer ${userInfo.access}`
            }
        });
        console.log(data);
        dispatch({ type: GET_QUICK_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_QUICK_ORDERS_FAIL, payload: error.message });
    }
};