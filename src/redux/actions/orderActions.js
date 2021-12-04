import Axios from 'axios';
import { ADD_QUICK_ORDER_FAIL, ADD_QUICK_ORDER_REQUEST, ADD_QUICK_ORDER_SUCCESS, CLOSE_QUICK_ORDER_FAIL, CLOSE_QUICK_ORDER_REQUEST, CLOSE_QUICK_ORDER_SUCCESS, GET_PLACE_ORDERS_FAIL, GET_PLACE_ORDERS_REQUEST, GET_PLACE_ORDERS_SUCCESS, GET_QUICK_ORDERS_FAIL, GET_QUICK_ORDERS_REQUEST, GET_QUICK_ORDERS_SUCCESS, GET_TAKEAWAY_ORDERS_FAIL, GET_TAKEAWAY_ORDERS_REQUEST, GET_TAKEAWAY_ORDERS_SUCCESS, RELEASE_QUICK_ORDER_FAIL, RELEASE_QUICK_ORDER_REQUEST, RELEASE_QUICK_ORDER_SUCCESS, UPDATE_PLACE_ORDERS_FAIL, UPDATE_PLACE_ORDERS_REQUEST, UPDATE_PLACE_ORDERS_SUCCESS, UPDATE_QUICK_ORDER_FAIL, UPDATE_QUICK_ORDER_REQUEST, UPDATE_TAKEAWAY_ORDERS_FAIL, UPDATE_TAKEAWAY_ORDERS_REQUEST, UPDATE_TAKEAWAY_ORDERS_SUCCESS } from '../constants/orderConstants';

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

export const updatePlaceOrders = (id, oldStatus, newStatus) => async (dispatch, getState) => {
    dispatch({
        type: UPDATE_PLACE_ORDERS_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.put(`https://neocafe-staging.herokuapp.com/in_place_orders/${oldStatus}/${id}/`,
        {
            status: newStatus
        },
        {
            headers: {
                'Authorization': `Bearer ${userInfo.access}`
            }
        });
        dispatch({ type: UPDATE_PLACE_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_PLACE_ORDERS_FAIL, payload: error });
    }
};

export const updateTakeawayOrders = (id, oldStatus, newStatus) => async (dispatch, getState) => {
    dispatch({
        type: UPDATE_TAKEAWAY_ORDERS_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.put(`https://neocafe-staging.herokuapp.com/orders/${oldStatus}/${id}/`,
        {
            status: newStatus
        },
        {
            headers: {
                'Authorization': `Bearer ${userInfo.access}`
            }
        });
        dispatch({ type: UPDATE_TAKEAWAY_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_TAKEAWAY_ORDERS_FAIL, payload: error.message });
    }
};

export const addQuickOrder = (id, food_measure_id) => async (dispatch, getState) => {
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
            quantity: 1,
            food_measure_id
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

export const updateQuickOrder = (id, quantity) => async (dispatch, getState) => {
    dispatch({
        type: UPDATE_QUICK_ORDER_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.put(`https://neocafe-staging.herokuapp.com/fast_order/${id}`,
        {
            quantity,
        },
        {
            headers: {
                'Authorization': `Bearer ${userInfo.access}`
            }
        });
        dispatch({ type: UPDATE_TAKEAWAY_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_QUICK_ORDER_FAIL, payload: error.message });
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
        dispatch({ type: GET_QUICK_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_QUICK_ORDERS_FAIL, payload: error.message });
    }
};

export const releaseTakeawayOrders = () => async (dispatch, getState) => {
    dispatch({
        type: RELEASE_QUICK_ORDER_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        await Axios.put(`https://neocafe-staging.herokuapp.com/fast_order/release_takeaway_order/`, {}, {
            headers: {
                'Authorization': `Bearer ${userInfo.access}`
            }
        });
        dispatch({ type: RELEASE_QUICK_ORDER_SUCCESS, payload: true });
    } catch (error) {
        dispatch({ type: RELEASE_QUICK_ORDER_FAIL, payload: error });
    }
};

export const closeOrder = (id) => async (dispatch, getState) => {
    dispatch({
        type: CLOSE_QUICK_ORDER_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        await Axios.put(`https://neocafe-staging.herokuapp.com/orders/4/${id}/close_takeaway_order/`, {}, {
            headers: {
                'Authorization': `Bearer ${userInfo.access}`
            }
        });
        dispatch({ type: CLOSE_QUICK_ORDER_SUCCESS, payload: true });
    } catch (error) {
        dispatch({ type: CLOSE_QUICK_ORDER_FAIL, payload: error });
    }
};