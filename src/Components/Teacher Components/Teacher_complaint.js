import React from 'react'
import Nav2 from '../Nav2'
import Footer from '../Footer'
import '../Complaint.css'

export default function Teacher_complaint() {
  return (
    <div>
      <Nav2/>
      <div className='Complaint-box'>
      <h1  style={{ marginTop: '2%'}}>Complaint</h1>
      <center><textarea name="complaint" id="complaint" cols="30" rows="10" placeholder='Write complaint here'></textarea></center>  
      </div>
      <Footer/>
    </div>
  )
}
