import actionTypes from "./actionTypes";
import { getAllcodeService, createNewUserService, getAllUsers, deleteUserService, editUserService, getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService, getAllSpecialty } from "../../services/userService";
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
export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Updated Success!")
                dispatch(editUserSuccess())
                dispatch(fetchAllUsersStart())
            }
            else {
                toast.error("Updated error!")
                dispatch(editUserFailed())
            }
        } catch (e) {
            toast.error("Updated error!")
            dispatch(editUserFailed())
            console.log("Editfailed error: ", e)
        }
    }
}
export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})
export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILDED
})
// let res1 = await getTopDoctorHomeService(3)
export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            console.log('res', res);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctor: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILDED,
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAILDED: ', e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILDED,
            })
        }
    }
}
export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors()
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDoctor: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILDED,
                })
            }
        } catch (e) {
            console.log('FETCH_ALL_DOCTORS_FAILDED: ', e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILDED,
            })
        }
    }
}
export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data)
            if (res && res.errCode === 0) {
                toast.success("save success!")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            } else {
                toast.error("save error!")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILDED,
                })
            }
        } catch (e) {
            toast.error("save error!")
            console.log('SAVE_DETAIL_DOCTOR_FAILDED: ', e)
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILDED,
            })
        }
    }
}
export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllcodeService("TIME");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED
                })
            }
        } catch (e) {
            console.log('FETCH_ALLCODE_SCHEDULE_TIME_FAILDED ', e)
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED
            })
        }
    }
}
export const getAllRequiredDoctorInfor = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_START })
            let resPrice = await getAllcodeService("PRICE");
            let resPayment = await getAllcodeService("PAYMENT");
            let resProvince = await getAllcodeService("PROVINCE");
            let resSpecialty = await getAllSpecialty();

            if (resPrice && resPrice.errCode === 0 && resPayment && resPayment.errCode === 0 && resProvince && resProvince.errCode === 0 && resSpecialty && resSpecialty.errCode === 0) {
                let data = {
                    resPrice: resPrice.data,
                    resPayment: resPayment.data,
                    resProvince: resProvince.data,
                    resSpecialty: resSpecialty.data,
                }
                dispatch(fetchRequiredDoctorInforSuccess(data))
            } else {
                dispatch(fetchRequiredDoctorInforFailded())

            }
        } catch (e) {
            dispatch(fetchRequiredDoctorInforFailded())
            console.log('fetchRequiredDoctorInforFailded ', e)
        }
    }
}

export const fetchRequiredDoctorInforSuccess = (allRequiredData) => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS,
    data: allRequiredData
})
export const fetchRequiredDoctorInforFailded = () => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILDED
})