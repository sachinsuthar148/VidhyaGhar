import React from 'react'
import Login from './Login'
import Nav2 from './Nav2'
import Footer from './Footer'

export default function Student_login() {
  return (
    <div>
      <Nav2/>
      <Login title='Student Log in' loginLink='/student/StudentDashboard'/>
      <Footer/>
    </div>
  )
}
