import Axios from 'axios';
import { GET_PROFILE_FAIL, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from '../constants/profileConstants';

export const getProfileInfo = () => async (dispatch, getState) => {
    dispatch({
        type: GET_PROFILE_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.get('https://neocafe-staging.herokuapp.com/employee/profile/', {
            headers: {
                'Authorization': `Bearer ${userInfo.access}`
            }
        });
        dispatch({ type: GET_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_PROFILE_FAIL, payload: error.message });
    }
  }