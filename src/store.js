import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getMenuCategoriesReducer, getMenuFoodsReducer } from './redux/reducers/menuReducers';
import { createCategoryFoodReducer, deleteCategoryFoodReducer, getAllCategoriesReducer, getCategoryFoodReducer, updateCategoryFoodReducer } from './redux/reducers/categoryReducers';
import { createFoodReducer, deleteFoodReducer, getAllFoodsReducer, getFoodReducer, updateFoodReducer } from './redux/reducers/foodReducers';
import { getProfileReducer } from './redux/reducers/profileReducers';
import { checkUserReducer, getAllUsersReducer, getUserAgreementReducer, putUserAgreementReducer, userRegisterReducer, userSigninReducer, userTokenReducer } from './redux/reducers/userReducers';

const initialState = {
  userToken: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
    userInfoFull: localStorage.getItem('userInfoFull')
      ? JSON.parse(localStorage.getItem('userInfoFull'))
      : null,
  }
};
const reducer = combineReducers({
  userToken: userTokenReducer,
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
  checkUser: checkUserReducer,
  profileInfo: getProfileReducer,

  menuCategories: getMenuCategoriesReducer,
  menuFoods: getMenuFoodsReducer,
  
  allUsers: getAllUsersReducer,
  allFoods: getAllFoodsReducer,
  food: getFoodReducer,
  updatedFood: updateFoodReducer,
  deletedFood: deleteFoodReducer,
  createdFood: createFoodReducer,
  allCategories: getAllCategoriesReducer,
  categoryFood: getCategoryFoodReducer,
  updatedCategoryFood: updateCategoryFoodReducer,
  deletedCategoryFood: deleteCategoryFoodReducer,
  createdCategoryFood: createCategoryFoodReducer,
  userAgreement: getUserAgreementReducer,
  updatedUserAgreement: putUserAgreementReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;