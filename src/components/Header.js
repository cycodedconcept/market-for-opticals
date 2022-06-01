import React from 'react';
import './header.css';
import Logo from '../images/logo.png'

import { Button } from './Button'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href=""><img src={Logo} alt="logo"></img></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <a className="nav-link" href="#!">About <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#!">Our Service</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#!">Contact</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#!">FAQ</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {/* <Button 
            type="button" 
            buttonStyle="myBtn--transparent--solid" 
            buttonSize="myBtn--medium"
            >FAQ</Button> */}
            <a className="nav-link lin" href="#!">FAQ</a>
            <Button 
            type="button" 
            buttonStyle="myBtn--chocolate--solid"
            buttonSize="myBtn--medium"
            >
            Join waitlist</Button>
          </form>
          </div>
        </div>
       </nav>
    </div>
  )
}

export default Header
