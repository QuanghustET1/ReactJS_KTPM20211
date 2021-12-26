import actionTypes from "./actionTypes";
import { getAllcodeService, createNewUserService } from "../../services/userService";
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllcodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFAILDED())
            }
        } catch (e) {
            dispatch(fetchGenderFAILDED());
            console.log('fetch gender error', e)
        }
    }
}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFAILDED = () => ({
    type: actionTypes.FETCH_GENDER_FAILDED
})
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFAILDED = () => ({
    type: actionTypes.FETCH_GENDER_FAILDED
})
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLES_SUCCESS,
    data: roleData
})
export const fetchRoleFAILDED = () => ({
    type: actionTypes.FETCH_ROLES_FAILDED
})
export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllcodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFAILDED())
            }
        } catch (e) {
            dispatch(fetchPositionFAILDED())
            console.log('fetchPosition FAILDED error: ', e)
        }
    }
}
export const fetchRolesStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllcodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFAILDED())
            }
        } catch (e) {
            dispatch(fetchRoleFAILDED())
            console.log('fetchRoleFAILDED err: ', e)
        }
    }
}
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            console.log('check create user redux: ', res);
            // if (res && res.errCode === 0) {
            //     dispatch(saveUserSuccess())
            // } else {
            //     dispatch(saveUserFailded())
            // }
        } catch (e) {
            // dispatch(saveUserFailded())
            console.log('save failded err: ', e)
        }
    }
}