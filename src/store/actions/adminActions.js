import actionTypes from "./actionTypes";
import { getAllcodeService, createNewUserService, getAllUsers, deleteUserService } from "../../services/userService";
import { toast } from "react-toastify";
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
            if (res && res.errCode === 0) {
                toast.success("Create a New User Success!")
                dispatch(saveUserSuccess())
                dispatch(fetchAllUsersStart());
            } else {
                dispatch(saveUserFailded())
            }
        } catch (e) {
            // dispatch(saveUserFailded())
            console.log('save failded err: ', e)
        }
    }
}
export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})
export const saveUserFailded = () => ({
    type: actionTypes.CREATE_USER_FAILDED
})
export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            } else {
                toast.error("Fetch users failded !")
                dispatch(fetchAllUserFailed())
            }
        } catch (e) {
            toast.error("Fetch users failded !")
            dispatch(fetchAllUserFailed())
            console.log('fetchallusers failded err: ', e)
        }
    }
}
export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})
export const fetchAllUserFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILDED
})
export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId)
            if (res && res.errCode === 0) {
                toast.success("Delete the user success!")
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error("Delete the user error!")
                dispatch(deleteUserFailed())
            }
        } catch (e) {
            toast.error("Delete the user error!")
            dispatch(deleteUserFailed())
            console.log('saveUserFailed err: ', e)
        }
    }
}
export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILDED
})