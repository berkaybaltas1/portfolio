import React from 'react'
import './css/Section2.css'
import TrackVisibility from 'react-on-screen'
import { useHistory } from 'react-router-dom'
function Section2() {
  let history = useHistory()

  const ComponentToTrack = ({ isVisible }) => {
    const options = {
      background: isVisible ? 'btn-p animate-btn' : 'btn-p btn-hidden'
    }
    return (
      <div className='btn-container'>
        <button
          onClick={() => history.push('/contact')}
          className={options.background}
        >
          Contact
        </button>
      </div>
    )
  }

  return (
    <section className='section2-container'>
      <div className='section2'>
        <TrackVisibility>
          <h1 className='section2-logo'>Get in touch.</h1>
          <ComponentToTrack />
        </TrackVisibility>
      </div>
    </section>
  )
}

export default Section2
