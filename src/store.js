import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getMenuCategoriesReducer, getMenuFoodsReducer } from './redux/reducers/menuReducers';
import { addQuickOrderReducer, getPlaceOrdersReducer, getQuickOrdersReducer, getTakeawayOrdersReducer } from './redux/reducers/orderReducers';
import { getProfileReducer } from './redux/reducers/profileReducers';
import { checkUserReducer, userRegisterReducer, userSigninReducer } from './redux/reducers/userReducers';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null
  }
};
const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
  checkUser: checkUserReducer,
  profileInfo: getProfileReducer,

  menuCategories: getMenuCategoriesReducer,
  menuFoods: getMenuFoodsReducer,

  takeawayOrders: getTakeawayOrdersReducer,
  placeOrders: getPlaceOrdersReducer,
  addQuickOrder: addQuickOrderReducer,
  quickOrders: getQuickOrdersReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;