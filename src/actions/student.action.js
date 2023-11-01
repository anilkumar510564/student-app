


import axios from "../helper/axios";
import { studentsConstants } from "./constants";

export const addStudent = (form) => {
  const config = {
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header here
    },
  }
    return async (dispatch) => {
      try {
        dispatch({ type: studentsConstants.ADD_STUDENT_REQUEST });
        const res = await axios.post(`createStudent`, form,config);
        if (res.status === 201) {
          dispatch({ type: studentsConstants.ADD_STUDENT_SUCCESS });
        
        } else {
          dispatch({ type: studentsConstants.ADD_STUDENT_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };


export  const getStudents = () => {
    return async dispatch => {
      try {
        dispatch({ type: studentsConstants.GET_ALL_STUDENTS_REQUEST });
        const res = await axios.get(`/readAllStudents`);
        if (res.status === 200) {
          
          const  students  = res.data;
          dispatch({
            type: studentsConstants.GET_ALL_STUDENTS_SUCCESS,
            payload: { students },
          });
          console.log(students);
        } else {
          dispatch({ type: studentsConstants.GET_ALL_STUDENTS_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const deleteStudentById = (payload) => {
    const config = {
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header here
      },
    }
    return async (dispatch) => {
      try {
        const res = await axios.delete(`deleteStudent?studentId=${payload.studentId}` ,config);
        dispatch({ type: studentsConstants.DELETE_STUDENT_BY_ID_REQUEST });
        if (res.status === 202) {
          dispatch({ type: studentsConstants.DELETE_STUDENT_BY_ID_SUCCESS });
          dispatch(getStudents());
        } else {
          const { error } = res.data;
          dispatch({
            type: studentsConstants.DELETE_STUDENT_BY_ID_FAILURE,
            payload: {
              error,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  