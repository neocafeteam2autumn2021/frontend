import { ADD_QUICK_ORDER_FAIL, ADD_QUICK_ORDER_REQUEST, ADD_QUICK_ORDER_RESET, ADD_QUICK_ORDER_SUCCESS, GET_PLACE_ORDERS_FAIL, GET_PLACE_ORDERS_REQUEST, GET_PLACE_ORDERS_SUCCESS, GET_QUICK_ORDERS_FAIL, GET_QUICK_ORDERS_REQUEST, GET_QUICK_ORDERS_SUCCESS, GET_TAKEAWAY_ORDERS_FAIL, GET_TAKEAWAY_ORDERS_REQUEST, GET_TAKEAWAY_ORDERS_SUCCESS } from "../constants/orderConstants";

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

export const addQuickOrderReducer = (state = {}, action) => {
    switch(action.type) {
        case ADD_QUICK_ORDER_REQUEST:
            return { loadingAddQuickOrder: true };
        case ADD_QUICK_ORDER_SUCCESS:
            return {
                loadingAddQuickOrder: false,
                addQuickOrderData: action.payload
             };
        case ADD_QUICK_ORDER_FAIL:
            return { loadingAddQuickOrder: false, errorAddQuickOrder: action.payload };
        case ADD_QUICK_ORDER_RESET:
            return {};
        default:
            return state;
    }
};

export const getQuickOrdersReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_QUICK_ORDERS_REQUEST:
            return { loadingQuickOrders: true };
        case GET_QUICK_ORDERS_SUCCESS:
            return {
                loadingQuickOrders: false,
                quickOrdersData: action.payload
             };
        case GET_QUICK_ORDERS_FAIL:
            return { loadingQuickOrders: false, errorQuickOrders: action.payload };
        default:
            return state;
    }
};