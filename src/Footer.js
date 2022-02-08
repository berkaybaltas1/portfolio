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
              <RiInstagramFill className='icon-footer' />
              Instagram
            </a>
          </li>
          <li>
            <a href='https://twitter.com/berkaybaltas1' target='_blank'>
              <RiTwitterFill className='icon-footer' />
              Twitter
            </a>
          </li>
          <li>
            <a href='https://github.com/berkaybaltas1' target='_blank'>
              <RiGithubFill className='icon-footer' />
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
