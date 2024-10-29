import React from 'react'
import { IoSchoolOutline } from 'react-icons/io5'
import { BsFileCode } from 'react-icons/bs'
import { HiOutlineViewGrid } from 'react-icons/hi'
import './css/Cards.css'

function Cards() {
  return (
    <section className='container d-flex flex-wrap justify-content-center gap-5 p-4'>
      <div className='card custom-card'>
        <div className='card-body text-center'>
          <BsFileCode className='card-icon mb-3' />
          <h5 className='card-title'>Skills</h5>
          <ul className='list-group custom-list'>
            <li className='list-group-item custom-list-item'>
              React, Next.js, Vue
            </li>
            <li className='list-group-item custom-list-item'>
              HTML, CSS, JavaScript, TypeScript
            </li>
            <li className='list-group-item custom-list-item'>
              Node.js, Express, Python, Flask
            </li>
            <li className='list-group-item custom-list-item'>
              SQL (PostgreSQL), NoSQL (MongoDB)
            </li>
            <li className='list-group-item custom-list-item'>
              React Testing Library, Jest
            </li>
          </ul>
        </div>
      </div>

      <div className='card custom-card'>
        <div className='card-body text-center'>
          <IoSchoolOutline className='card-icon mb-3' />
          <h5 className='card-title'>Education</h5>
          <ul className='list-group custom-list'>
            <li className='list-group-item custom-list-item'>
              <span className='job-title'>
                Associate in Computer Information Systems
              </span>
              <span className='company-name'>
                Queensborough Community College
              </span>
              <span className='job-date'>2015 - 2017</span>
            </li>
            <span className='job-title'>Bachelor of Science in IT</span>
            <span className='company-name'>Arizona State University</span>
            <span className='job-date'>2019 - 2022</span>
          </ul>
        </div>
      </div>

      <div className='card custom-card'>
        <div className='card-body text-center'>
          <HiOutlineViewGrid className='card-icon mb-3' />
          <h5 className='card-title'>Experience</h5>
          <ul className='list-group custom-list'>
            <li className='custom-list-item'>
              <span className='job-title'>Full Stack Web Developer</span>
              <span className='company-name'>Source Digital</span>
              <span className='job-date'>March 2019 - May 2022</span>
            </li>
            <li className='custom-list-item'>
              <span className='job-title'>Full Stack Web Developer</span>
              <span className='company-name'>Applied Research Labs</span>
              <span className='job-date'>May 2022 - Nov 2022</span>
            </li>
            <li className='custom-list-item'>
              <span className='job-title'>Full Stack Web Developer</span>
              <span className='company-name'>Auria Space</span>
              <span className='job-date'>Nov 2022 - Present</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cards
