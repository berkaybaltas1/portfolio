import React from 'react'
import '../src/css/Footer.css'
import { RiInstagramFill, RiLinkedinFill, RiGithubFill } from 'react-icons/ri'

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-list-container'>
        <ul>
          <li>
            <a
              href='https://www.instagram.com/berkay.baltas/'
              target='_blank'
              rel='noreferrer'
            >
              <RiInstagramFill className='m-2 footer-icon' />
              Instagram
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/berkaybaltas/'
              target='_blank'
              rel='noreferrer'
            >
              <RiLinkedinFill className='m-2 footer-icon' />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href='https://github.com/berkaybaltas1'
              target='_blank'
              rel='noreferrer'
            >
              <RiGithubFill className='m-2 footer-icon' />
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
