import { GET_MENU_CATEGORIES_FAIL, GET_MENU_CATEGORIES_REQUEST, GET_MENU_CATEGORIES_SUCCESS, GET_MENU_FOODS_FAIL, GET_MENU_FOODS_REQUEST, GET_MENU_FOODS_SUCCESS } from "../constants/menuConstants";

export const getMenuCategoriesReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_MENU_CATEGORIES_REQUEST:
            return { loadingMenuCategories: true };
        case GET_MENU_CATEGORIES_SUCCESS:
            return {
                loadingMenuCategories: false,
                menuCategoriesData: action.payload
             };
        case GET_MENU_CATEGORIES_FAIL:
            return { loadingMenuCategories: false, errorMenuCategories: action.payload };
        default:
            return state;
    }
};

export const getMenuFoodsReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_MENU_FOODS_REQUEST:
            return { loadingMenuFoods: true };
        case GET_MENU_FOODS_SUCCESS:
            return {
                loadingMenuFoods: false,
                menuFoodsData: action.payload
             };
        case GET_MENU_FOODS_FAIL:
            return { loadingMenuFoods: false, errorMenuFoods: action.payload };
        default:
            return state;
    }
};