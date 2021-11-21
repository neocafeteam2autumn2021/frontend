import { CREATE_ACTIVITY_FAIL, CREATE_ACTIVITY_REQUEST, CREATE_ACTIVITY_RESET, CREATE_ACTIVITY_SUCCESS, DELETE_ACTIVITY_FAIL, DELETE_ACTIVITY_REQUEST, DELETE_ACTIVITY_RESET, DELETE_ACTIVITY_SUCCESS, GET_ACTIVITY_FAIL, GET_ACTIVITY_REQUEST, GET_ACTIVITY_SUCCESS, GET_MENU_CATEGORIES_FAIL, GET_MENU_CATEGORIES_REQUEST, GET_MENU_CATEGORIES_SUCCESS, GET_MENU_FOODS_FAIL, GET_MENU_FOODS_REQUEST, GET_MENU_FOODS_SUCCESS, UPDATE_ACTIVITY_FAIL, UPDATE_ACTIVITY_REQUEST, UPDATE_ACTIVITY_RESET, UPDATE_ACTIVITY_SUCCESS } from "../constants/menuConstants";

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

export const createActivityReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_ACTIVITY_REQUEST:
        return { loadingCreateActivty: true };
      case CREATE_ACTIVITY_SUCCESS:
        return {
          loadingCreateActivty: false,
          createdActivityData: true
        };
      case CREATE_ACTIVITY_FAIL:
        return { loadingCreateActivty: false, errorCreatedActivity: action.payload };
      case CREATE_ACTIVITY_RESET:
        return {};
      default:
        return state;
    }
};

export const getActivityReducer = (state = {}, action) => {
  switch(action.type) {
      case GET_ACTIVITY_REQUEST:
          return { loadingActivity: true };
      case GET_ACTIVITY_SUCCESS:
          return {
              loadingActivity: false,
              activityData: action.payload
           };
      case GET_ACTIVITY_FAIL:
          return { loadingActivity: false, errorActivity: action.payload };
      default:
          return state;
  }
};

export const deleteActivityReducer = (state = {}, action) => {
  switch(action.type) {
      case DELETE_ACTIVITY_REQUEST:
          return { loadingDeleteActivity: true };
      case DELETE_ACTIVITY_SUCCESS:
          return {
              loadingDeleteActivity: false,
              deletedActivityData: action.payload
           };
      case DELETE_ACTIVITY_FAIL:
          return { loadingDeleteActivity: false, errorDeletedActivity: action.payload };
      case DELETE_ACTIVITY_RESET:
          return {};
      default:
          return state;
  }
};

export const updateActivityReducer = (state = {}, action) => {
  switch(action.type) {
      case UPDATE_ACTIVITY_REQUEST:
          return { loadingUpdateActivity: true };
      case UPDATE_ACTIVITY_SUCCESS:
          return {
            loadingUpdateActivity: false,
            updatedActivityData: action.payload
           };
      case UPDATE_ACTIVITY_FAIL:
          return { loadingUpdateActivity: false, errorUpdatedActivity: action.payload };
      case UPDATE_ACTIVITY_RESET:
          return {};
      default:
          return state;
  }
};