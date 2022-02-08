import React from 'react'
import '../src/css/Footer.css'
import { RiInstagramFill, RiTwitterFill, RiGithubFill } from 'react-icons/ri'

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-list-container'>
        <ul>
          <li>
            <a href='https://www.instagram.com/berkay.baltas/' target='_blank'>
              <RiInstagramFill className='m-2 footer-icon' />
              Instagram
            </a>
          </li>
          <li>
            <a href='https://twitter.com/berkaybaltas1' target='_blank'>
              <RiTwitterFill className='m-2 footer-icon' />
              Twitter
            </a>
          </li>
          <li>
            <a href='https://github.com/berkaybaltas1' target='_blank'>
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
