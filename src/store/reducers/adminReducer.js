import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    users: [],
    topDoctors: [],
    allDoctors: [],
    allScheduleTime: [],
    allRequiredDoctorInfor: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log(('fire fetch gender start: ', action))
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = { ...state };
            copyState.genders = action.data;
            console.log('fire fetch gender success: ', copyState)
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_FAILDED:
            console.log('fire fetch gender FAILDED: ', action)
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_POSITION_FAILDED:
            state.positions = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ROLES_SUCCESS:
            state.roles = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_ROLES_FAILDED:
            state.roles = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.users;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USERS_FAILDED:
            state.users = [];
            return {
                ...state
            }
        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
            state.topDoctors = action.dataDoctor;
            return {
                ...state
            }
        case actionTypes.FETCH_TOP_DOCTORS_FAILDED:
            state.topDoctors = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_DOCTORS_SUCCESS:
            state.allDoctors = action.dataDoctor;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_DOCTORS_FAILDED:
            state.allDoctors = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS:
            state.allScheduleTime = action.dataTime;
            return {
                ...state
            }
        case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED:
            state.allScheduleTime = [];
            return {
                ...state
            }
        case actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILDED:
            state.allRequiredDoctorInfor = [];
            return {
                ...state
            }
        case actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS:
            state.allRequiredDoctorInfor = action.data;
            return {
                ...state
            }
        default:
            return state;
    }
}

export default adminReducer;