import {
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
} from "../actions/actionTypes";

const initialState = {
    loginLoading: false,
    isAuthenticated: false,
}

const updateData = (oldObject = {}, updateData = {}) => {
    return {
        ...oldObject,
        ...updateData
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_START:
            return updateData(state, { loginLoading: true });
        case LOGIN_USER_SUCCESS:
            return updateData(state, { loginLoading: false, isAuthenticated: true });
        case LOGIN_USER_FAIL:
            return updateData(state, { loginLoading: false });
        default:
            return state;
    }
}

export default authReducer;