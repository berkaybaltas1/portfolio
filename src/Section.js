import React, { useState } from 'react'
import './css/Section.css'
import profile from './images/profile-pic.jpeg'

function Section() {
  const [rotate, setRotate] = useState(false)

  return (
    <section className='section-container'>
      <div className='section-container-1'>
        <h1 className='section-logo'>Hello, I'm Berkay.</h1>
        <h3>I'm a Web Developer.</h3>
      </div>
      <div
        onMouseEnter={() => setRotate(!rotate)}
        onMouseLeave={() => setRotate(false)}
        className={
          rotate ? `section-container-2 rotate-img` : 'section-container-2'
        }
      >
        <hr></hr>
        <img className='profile-image' src={profile} alt='me'></img>
      </div>
    </section>
  )
}

export default Section
