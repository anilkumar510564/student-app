import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Student } from '../../components/Student'

/**
* @author
* @function Home
**/

export const Home = (props) => {
  return(
    
    <div>
        <Header/>
        <Student/>
        <Footer/>
    </div>
   )

 }