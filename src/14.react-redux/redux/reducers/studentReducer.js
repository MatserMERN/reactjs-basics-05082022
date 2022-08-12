import { GET_STUDENTS } from "../action-types/student-type";

const initialState = {
    students: []
}

export const studentReducer = (state = initialState , action) => {
    switch(action.type){
        case GET_STUDENTS :
            return {...state, students: action.payload}
        default:
            return state
    }
}