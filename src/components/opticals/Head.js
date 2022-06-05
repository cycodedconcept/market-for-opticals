import React from 'react'
import './head.css'
import Logo from '../../images/logo.png'
import { Button } from '../Button'
import Vector from '../../images/Vector.png'
import Heart from '../../images/Heart.png'
import Vec from '../../images/vec.png'
import Photo from '../../images/i.png'
import Location from '../../images/lo.png'
const Head = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href=""><img src={Logo} alt="logo"></img></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Button 
            type="button" 
            buttonStyle="myBtn--chocolate--solid"
            buttonSize="myBtn--large"
            >
              <i className="fas fa-bars mr-2" style={{ color: "white" }}></i>
            Categories</Button>
          <div class="form-group has-search ml-5 mr-">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="search" className="form-control" placeholder="Search..."/>
          </div>
          <div className="link mr-3">
            <a href=""><img src={ Vector } alt="" className='mr-3 ml-3'/>Orders</a>
            <a href=""><img src={ Heart } alt="" className='mr-3 ml-3'/>Save</a>
            <a href=""><img src={ Vec } alt="" className='mr-3 ml-3'/>Cart</a>
          </div>

          <form className="form-inline my-2 my-lg-0">
            <img src={ Photo } alt="" className='ml-5 mr-3'/>
            <Button 
            type="button" 
            buttonStyle="myBtn"
            buttonSize="myBtn--medium"
            >
            Sign Out</Button>
          </form>
          </div>
      </nav>
      <div id="container">
      <div class="d-flex justify-content-between">
      <div className="d-flex">
          <div>
            <img src={Location} alt="" />
          </div>
          <div>
           <p className='ml-2'>Ikeja, Lagos</p>
          </div>
        </div>
        <div className="d-flex link">
          <a href="" className='mr-4'>Best seller</a>
          <a href="" className='mr-4'>New Release</a>
          <a href="" className='mr-4'>Lenses</a>
          <a href="" className='mr-4'>Frames</a>
          <a href="" className='mr-4'>Accessories</a>
          <a href="" className='mr-4'>Lab Equipments</a>
          <a href="" className='mr-4'>Optical Equipments</a>
        </div>
        <div className="d-flex link">
          <a href="">Becoma a Seller</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Head
