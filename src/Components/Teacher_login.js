import React from 'react'
import Login from './Login'
import Nav2 from './Nav2'
import Footer from './Footer'

export default function Teacher_login() {
  return (
    <div>
      <Nav2/>
       <Login title='Teacher Log in' loginLink='/teacher/TeacherDashboard'/>
       <Footer/>
    </div>
  )
}
