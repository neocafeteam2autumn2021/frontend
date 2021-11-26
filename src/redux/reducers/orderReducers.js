import { GET_PLACE_ORDERS_FAIL, GET_PLACE_ORDERS_REQUEST, GET_PLACE_ORDERS_SUCCESS, GET_TAKEAWAY_ORDERS_FAIL, GET_TAKEAWAY_ORDERS_REQUEST, GET_TAKEAWAY_ORDERS_SUCCESS } from "../constants/orderConstants";

export const getTakeawayOrdersReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_TAKEAWAY_ORDERS_REQUEST:
            return { loadingTakeawayOrders: true };
        case GET_TAKEAWAY_ORDERS_SUCCESS:
            return {
                loadingTakeawayOrders: false,
                takeawayOrdersData: action.payload
             };
        case GET_TAKEAWAY_ORDERS_FAIL:
            return { loadingTakeawayOrders: false, errorTakeawayOrders: action.payload };
        default:
            return state;
    }
};

export const getPlaceOrdersReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_PLACE_ORDERS_REQUEST:
            return { loadingPlaceOrders: true };
        case GET_PLACE_ORDERS_SUCCESS:
            return {
                loadingPlaceOrders: false,
                placeOrdersData: action.payload
             };
        case GET_PLACE_ORDERS_FAIL:
            return { loadingPlaceOrders: false, errorPlaceOrders: action.payload };
        default:
            return state;
    }
};