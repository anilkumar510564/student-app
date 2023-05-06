import { studentsConstants } from "../actions/constants"


const initailData={
    error:null,
    loading:false,
    students:[],
}
export default (state=initailData,action)=>{
    switch(action.type){
        case studentsConstants.ADD_STUDENT_REQUEST:
            state={
                ...state,
                loading:true
            }
            break
        case studentsConstants.ADD_STUDENT_SUCCESS:
            state={
                ...state,
                students:action.payload.students,
                loading:false
            }
            break
        case studentsConstants.ADD_STUDENT_FAILURE:
            state={
                ...state,
          loading:false,
          error:action.payload.error
            }
            break
        case studentsConstants.GET_ALL_STUDENTS_REQUEST:
            state={
                ...state,
                loading:true
            }
            break
        case studentsConstants.GET_ALL_STUDENTS_SUCCESS:
            state={
                ...state,
                students:action.payload.students,
                loading:false
            }
            break
        case studentsConstants.GET_ALL_STUDENTS_FAILURE:
            state={
                ...state,
          loading:false,
          error:action.payload.error
            }
            break
    }
    return state
}