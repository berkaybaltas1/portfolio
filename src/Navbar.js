import React, { useState } from 'react'
import { HiMenu, HiOutlineX } from 'react-icons/hi'
import './css/Navbar.css'
import logo from './images/bold.png'
import { useHistory } from 'react-router-dom'

function Navbar() {
  const [clicked, setClicked] = useState(false)
  let history = useHistory()

  const handleNavigate = (path) => {
    history.push(path)
    setClicked(false)
  }
  return (
    <nav className='navbar-container'>
      <div className='nav-menu'>
        <img
          onClick={() => history.push('/')}
          className='logo'
          src={logo}
          alt='logo'
        ></img>
        <i onClick={() => setClicked(!clicked)}>
          {clicked ? (
            <HiOutlineX className='icon-menu-close' />
          ) : (
            <HiMenu className='icon-menu-open' />
          )}
        </i>
        <div className={clicked ? 'menu-open' : 'menu-close'}>
          <ul>
            <li class='active'>
              <button onClick={() => handleNavigate('/')}>Home</button>
            </li>
            <li>
              <button onClick={() => handleNavigate('/about')}>About me</button>
            </li>
            <li>
              <button onClick={() => handleNavigate('/contact')}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
