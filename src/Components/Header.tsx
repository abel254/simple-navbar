import { useRef } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import { ConfigIcon } from './ConfigIcon'

let logo = require('../images/logo.png')

export const Header = () => {

  const navRef = useRef<HTMLUListElement| null>(null)

  const showNavbar = () => {
    navRef.current?.classList.toggle('responsive')
  }

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul ref={navRef}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Arrivals</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">ExpandBS</a></li>
          <li> <button className="menu-btn close" onClick={showNavbar}>
            <ConfigIcon><MdClose /></ConfigIcon>
          </button></li>
         
        </ul>
      </nav>
      <button className="menu-btn" onClick={showNavbar}>
        <ConfigIcon><MdMenu /></ConfigIcon>
      </button>
    </div>
  )
}