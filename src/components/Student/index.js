import React, { useState } from 'react'
import { addStudent } from '../../actions'
import { useDispatch } from 'react-redux'

/**
* @author
* @function Student
**/

export const Student = (props) => {
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [fee,setFee]=useState("")


  const dispatch=useDispatch()


  const submitStudentForm = () => {
    
    const form = new FormData();
    form.append("name", name);
    form.append("age", age);
    form.append("fee", fee);
    
    dispatch(addStudent(form));
  };
  return(
    <div>
        <div className="col-md-6 m-auto">
          <form>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name"  placeholder="Enter the Name"
               name="name"
               value={name} 
               onChange={(e)=>setName(e.target.value)}  />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="text"  className="form-control" id="age" placeholder="Enter the Age"
               name="age"
               value={age}
               onChange={(e)=>setAge(e.target.value)}/>
            </div>
          
            <div className="form-group">
              <label htmlFor="fee">Fee</label>
              <input type="text"  className="form-control" id="fee" placeholder="Enter the Fee" 
              name='fee'
              value={fee}
              onChange={(e)=>setFee(e.target.value)}/>
            </div>
            
            <button type="button" className="btn btn-primary float-right"
            onClick={submitStudentForm}>
              submit
            </button>
          </form>
        </div>
    </div>

  )
 }