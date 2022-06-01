import React from 'react'
import footLogo from '../images/foot.png'
import footimg from '../images/footimg.png'
import google from '../images/Google.png'
import facebook from '../images/Facebook.png'
import whatsap from '../images/WhatsApp.png'
import './footer.css'

const Footer = () => {
  return (
    <div style={{
        backgroundImage: `url(${footLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center left",
        backgroundSize: "cover",
        padding: "40px",
        maxHeight: "100%"
        }}>
      <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <img src={ footimg } alt="footer logo" />
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 myLink">
              <h5>Lorem</h5>
              <p><a href="">lorem ipsum</a></p>
              <p><a href="">lorem ipsum</a></p>
              <p><a href="">lorem ipsum</a></p>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 myLink">
              <h5>Lorem</h5>
              <p><a href="">lorem ipsum</a></p>
              <p><a href="">lorem ipsum</a></p>
              <p><a href="">lorem ipsum</a></p>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 myLink">
            <h5>Lorem</h5>
              <p><a href="">lorem ipsum</a></p>
              <p><a href="">lorem ipsum</a></p>
              <p><a href="">lorem ipsum</a></p>
          </div>
      </div>
      <div class="d-flex bd-highlight mb-3">
        <div class="mr-auto p-2 bd-highlight copy">Copyright © 2022  |  Powered by Carpadi</div>
        <div class="p-2 bd-highlight"><img src={ google } alt="google" /></div>
        <div class="p-2 bd-highlight"><img src={ facebook } alt="facebook" /></div>
        <div class="p-2 bd-highlight"><img src={ whatsap } alt="whatsap" /></div>
      </div>
    </div>
  )
}

export default Footer
