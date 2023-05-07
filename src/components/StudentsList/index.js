import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getStudents } from '../../actions/student.action';

/**
* @author
* @function StudentList
**/

export const StudentList = (props) => {
  
  const dispatch=useDispatch()
  const student = useSelector((state) => state.student);
  useEffect(()=>{
     dispatch(getStudents())
   
  },[])
  return(
    <Table style={{ fontSize: 12 }} responsive="sm">
     
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Fee</th>
            
            
          </tr>
        </thead>
        <tbody>
          {student.students.length > 0
            ? student.students.map((student) => (
              <tr key={student._id}>
                  
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.fee}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
   )

 }