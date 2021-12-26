import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: []
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
        default:
            return state;
    }
}

export default adminReducer;