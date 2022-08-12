import { GET_STUDENTS } from "../action-types/student-type"

export const getStudents =(students) => {
    return {
        type: GET_STUDENTS,
        payload: students
    }
}