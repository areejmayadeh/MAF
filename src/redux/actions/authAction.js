import {
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
} from './actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginUserStart = () => ({
    type: LOGIN_USER_START,
});
const loginUserSuccess = (data) => ({
    type: LOGIN_USER_SUCCESS,
    auth: {'email': data}
});
const loginUserFail = () => ({
    type: LOGIN_USER_FAIL,
});
export const loginUser = (data, callback) => {
    return dispatch => {
        dispatch(loginUserStart());
        //success
        AsyncStorage.setItem('@token', data.email);
        dispatch(loginUserSuccess(data.email));
        callback && callback('success');
    }
}