import React from 'react'
import { Header } from '../../components/Header'
import { Student } from '../../components/Student'
import { Footer } from '../../components/Footer'

/**
* @author
* @function AddStudent
**/

export const AddStudent = (props) => {
  return(
    <div>
      <Header/>
      <Student/>
      <Footer/>
    </div>
   )

 }