import { GET_PROFILE_FAIL, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from "../constants/profileConstants";

export const getProfileReducer = ( state = {}, action ) => {
    switch (action.type) {
        case GET_PROFILE_REQUEST:
            return { loadingProfile: true };
        case GET_PROFILE_SUCCESS:
            return {
                loadingProfile: false,
                dataProfile: action.payload
            };
        case GET_PROFILE_FAIL:
            return { loadingProfile: false, errorProfile: action.payload };
        default:
            return state;
    }
};