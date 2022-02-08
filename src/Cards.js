import React from 'react'
import { IoSchoolOutline } from 'react-icons/io5'
import { BsFileCode } from 'react-icons/bs'
import { HiOutlineViewGrid } from 'react-icons/hi'
import './css/Cards.css'

function Cards() {
  return (
    <section className='cards-container'>
      <div className='cards'>
        <BsFileCode className='cards-logo' />
        <h3>Skills.</h3>
        <ul className='cards-list'>
          <li>
            Proficient in HTML, CSS, Javascript using a modern library such as
            React JS.
          </li>

          <li>Experience with Node.js, MongoDB, and Express.</li>
          <li>Familiar with SQL and AWS.</li>
        </ul>
        <hr className='mt-5 bg-black'></hr>
      </div>
      <div className='cards'>
        <IoSchoolOutline className='cards-logo' />
        <h3>Education.</h3>
        <ul className='cards-list'>
          <li>
            A.A.S. in Computer Information Systems - Queensborough Community
            College.
          </li>

          <li>B.S. in Information Technology - Arizona State University.</li>
        </ul>
        <hr className='mt-5 bg-black'></hr>
      </div>
      <div className='cards'>
        <HiOutlineViewGrid className='cards-logo' />
        <h3>Experience.</h3>
        <ul className='cards-list'>
          <li>Full Stack Web Developer - Source Digital</li>
          <li>March 2021 - Present</li>
        </ul>
        <hr className='mt-5  w-5 bg-black' />
      </div>
    </section>
  )
}

export default Cards
