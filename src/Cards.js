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
          <li>React, Vue</li>
          <li>HTML, CSS, Javascript</li>
          <li>Express, Node.js, SQL, NoSQL.</li>
          <li>Jest, Enzyme, Selenium, Python</li>
          <li>Redux, React-Router-DOM, React-Query, React-Table</li>
          <li>MaterialUI, BootStrap, TailWindCSS</li>
        </ul>
        <hr className='mt-5 bg-black hr-card'></hr>
      </div>
      <div className='cards'>
        <IoSchoolOutline className='cards-logo' />
        <h3>Education.</h3>
        <ul className='cards-list'>
          <li>Associate of Applied Science in Computer Information Systems</li>
          <li>Queensborough Community College</li>
          <li className='mt-5'>
            Bachelors Of Science in Information Technology
          </li>
          <li>Arizona State University</li>
        </ul>
        <hr className='mt-5 bg-black hr-card'></hr>
      </div>
      <div className='cards'>
        <HiOutlineViewGrid className='cards-logo' />
        <h3>Experience.</h3>
        <ul className='cards-list'>
          <li>Full Stack Web Developer</li>
          <li>Source Digital</li>
          <li>March 2021 - May 2022</li>
          <li className='mt-5'>Junior Web Developer</li>
          <li>Applied Research Laboratories</li>
          <li>May 2022 - Present</li>
        </ul>
        <hr className='mt-5 w-5 bg-black hr-card' />
      </div>
    </section>
  )
}

export default Cards
