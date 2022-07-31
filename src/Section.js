import React from 'react'
import './css/Section.css'
import profile from './images/profile-pic.jpeg'

function Section() {
  return (
    <section className='section-container'>
      <div className='section-container-1'>
        <h1 className='section-logo'>Hello, I'm Berkay.</h1>
        <h3>I'm a Web Developer.</h3>
      </div>
      <div className='section-container-2'>
        <img className='profile-image' src={profile} alt='me'></img>
        <hr className='bg-black hr-profile'></hr>
      </div>
    </section>
  )
}

export default Section
