import { ADD_QUICK_ORDER_FAIL, ADD_QUICK_ORDER_REQUEST, ADD_QUICK_ORDER_RESET, ADD_QUICK_ORDER_SUCCESS, CLOSE_QUICK_ORDER_FAIL, CLOSE_QUICK_ORDER_REQUEST, CLOSE_QUICK_ORDER_RESET, CLOSE_QUICK_ORDER_SUCCESS, GET_PLACE_ORDERS_FAIL, GET_PLACE_ORDERS_REQUEST, GET_PLACE_ORDERS_SUCCESS, GET_QUICK_ORDERS_FAIL, GET_QUICK_ORDERS_REQUEST, GET_QUICK_ORDERS_RESET, GET_QUICK_ORDERS_SUCCESS, GET_TAKEAWAY_ORDERS_FAIL, GET_TAKEAWAY_ORDERS_REQUEST, GET_TAKEAWAY_ORDERS_SUCCESS, RELEASE_QUICK_ORDER_FAIL, RELEASE_QUICK_ORDER_REQUEST, RELEASE_QUICK_ORDER_RESET, RELEASE_QUICK_ORDER_SUCCESS, UPDATE_PLACE_ORDERS_FAIL, UPDATE_PLACE_ORDERS_REQUEST, UPDATE_PLACE_ORDERS_RESET, UPDATE_PLACE_ORDERS_SUCCESS, UPDATE_QUICK_ORDER_FAIL, UPDATE_QUICK_ORDER_REQUEST, UPDATE_QUICK_ORDER_RESET, UPDATE_QUICK_ORDER_SUCCESS, UPDATE_TAKEAWAY_ORDERS_FAIL, UPDATE_TAKEAWAY_ORDERS_REQUEST, UPDATE_TAKEAWAY_ORDERS_RESET, UPDATE_TAKEAWAY_ORDERS_SUCCESS } from "../constants/orderConstants";

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

export const updatePlaceOrdersReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_PLACE_ORDERS_REQUEST:
            return { loadingUpdatePlaceOrder: true };
        case UPDATE_PLACE_ORDERS_SUCCESS:
            return {
                loadingUpdatePlaceOrder: false,
                updatePlaceOrderData: action.payload
             };
        case UPDATE_PLACE_ORDERS_FAIL:
            return { loadingUpdatePlaceOrder: false, errorUpdatePlaceOrder: action.payload };
        case UPDATE_PLACE_ORDERS_RESET:
            return {};
        default:
            return state;
    }
};

export const updateTakeawayOrdersReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_TAKEAWAY_ORDERS_REQUEST:
            return { loadingUpdateTakeawayOrder: true };
        case UPDATE_TAKEAWAY_ORDERS_SUCCESS:
            return {
                loadingUpdateTakeawayOrder: false,
                updateTakeawayOrderData: action.payload
             };
        case UPDATE_TAKEAWAY_ORDERS_FAIL:
            return { loadingUpdateTakeawayOrder: false, errorUpdateTakeawayOrder: action.payload };
        case UPDATE_TAKEAWAY_ORDERS_RESET:
            return {};
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

export const updateQuickOrderReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_QUICK_ORDER_REQUEST:
            return { loadingUpdateQuickOrder: true };
        case UPDATE_QUICK_ORDER_SUCCESS:
            return {
                loadingUpdateQuickOrder: false,
                updateQuickOrderData: action.payload
             };
        case UPDATE_QUICK_ORDER_FAIL:
            return { loadingUpdateQuickOrder: false, errorUpdateQuickOrder: action.payload };
        case UPDATE_QUICK_ORDER_RESET:
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
        case GET_QUICK_ORDERS_RESET:
            return {};
        default:
            return state;
    }
};

export const releaseOrdersReducer = (state = {}, action) => {
    switch(action.type) {
        case RELEASE_QUICK_ORDER_REQUEST:
            return { loadingReleaseOrders: true };
        case RELEASE_QUICK_ORDER_SUCCESS:
            return {
                loadingReleaseOrders: false,
                releaseOrdersData: action.payload
             };
        case RELEASE_QUICK_ORDER_FAIL:
            return { loadingReleaseOrders: false, errorReleaseOrders: action.payload };
        case RELEASE_QUICK_ORDER_RESET:
            return {};
        default:
            return state;
    }
};

export const closeOrderReducer = (state = {}, action) => {
    switch(action.type) {
        case CLOSE_QUICK_ORDER_REQUEST:
            return { loadingCloseOrder: true };
        case CLOSE_QUICK_ORDER_SUCCESS:
            return {
                loadingCloseOrder: false,
                closeOrderData: action.payload
             };
        case CLOSE_QUICK_ORDER_FAIL:
            return { loadingCloseOrder: false, errorCloseOrder: action.payload };
        case CLOSE_QUICK_ORDER_RESET:
            return {};
        default:
            return state;
    }
};