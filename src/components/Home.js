import React from 'react'
import './home.css'
import { Button }  from './Button'
import Product from './Product'
import Pix from '../images/pix.png'
import Pix2 from '../images/pix2.png'
import Item from '../images/item.png'
import Item2 from '../images/item2.png'
import Item3 from '../images/item3.png'
import Pr from '../images/pr.png'
import Pr2 from '../images/pr2.png'
import Pr3 from '../images/pr3.png'
import Heart from '../images/Heart.png'
import Wait from '../images/waitimg.png'
import Logo from '../images/logo.png'
import footLogo from '../images/foot.png'
import footimg from '../images/footimg.png'
import google from '../images/Google.png'
import facebook from '../images/Facebook.png'
import whatsap from '../images/WhatsApp.png'

const Home = () => {

  // const [num, setNum] = useState(1);

  // const increaseNum = () => {
  //   if (num < 10) {
  //     setNum(Number(num) + 1);
  //   }
  // };

  // const decreaseNum = () => {
  //   if (num > 1) {
  //     setNum(num - 1);
  //   }
  // }


  return (
    <>
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
    <div className='container mt-5'>
      <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="top">
              <h2>Lorem ipsum dolor sit amet, consectetur</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Morbi id dictum volutpat non, cursus ornare 
                mi at turpis. Sed semper vitae orci aenean tempor, 
                sed vel fames nisl.
              </p>
              <form>
                <input type="text" name="" className="input" id="" placeholder='Enter your email address' />
                <Button 
                type="button" 
                buttonStyle="myBtn--chocolate--solid"
                buttonSize="myBtn--small"
                >Join waitlist</Button>
              </form>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="top-right">
              <img src={ Pix } alt="pix"/>
            </div>
        </div>
      </div>
      <div className="works">
        <h2>How it Works</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="row row-box">
          <div className="col-sm-12 col-md-12 col-lg-4 work-card">
            <center>
              <div className="work-card-image"></div>
            </center>
            <h4>Find Optical</h4>
            <p>
              Nunc magna nibh, mollis at ultrices quis, gravida a magna. 
              Morbi eu facilisis eros. Nulla gravida ipsum nec ex laoreet ultrices. 
              Nullam id purus commodo, convallis leo id.
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 work-card">
            <center>
              <div className="work-card-image"></div>
            </center>
            <h4>Find Optical</h4>
            <p>
              Nunc magna nibh, mollis at ultrices quis, gravida a magna. 
              Morbi eu facilisis eros. Nulla gravida ipsum nec ex laoreet ultrices. 
              Nullam id purus commodo, convallis leo id.
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 work-card">
          <center>
              <div className="work-card-image"></div>
          </center>
            <h4>Find Optical</h4>
            <p>
              Nunc magna nibh, mollis at ultrices quis, gravida a magna. 
              Morbi eu facilisis eros. Nulla gravida ipsum nec ex laoreet ultrices. 
              Nullam id purus commodo, convallis leo id.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row row-choose">
      <div className="col-sm-12 col-md-12 col-lg-7">
        <div className="choose">
          <img src={ Pix2 } alt="pix" />
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-5">
        <div className="container">
        <h2>Why you should choose us.</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Erat vel placerat penatibus morbi consequat egestas.
        </p>
        <p className='py-3'><img src={ Item } alt="item" className='mr-3'/><span className='span-text'>Lorem</span> <br/>ipsum dolor sit amet, consectetur adipiscing 
          elit. Erat vel placerat penatibus morbi consequat egestas.
        </p>
        <p><img src={ Item2 } alt="item" className='mr-3'/><span className='span-text'>Lorem</span> <br/>ipsum dolor sit amet, consectetur adipiscing 
          elit. Erat vel placerat penatibus morbi consequat egestas.
        </p>
        <p><img src={ Item3 } alt="item" className='mr-3'/><span className='span-text'>Lorem</span> <br/>ipsum dolor sit amet, consectetur adipiscing 
          elit. Erat vel placerat penatibus morbi consequat egestas.
        </p>
        </div>
      </div>
    </div>

    <section className='section-service'>
      <div className="container">
        <div className="service">
          <h2>Our Service</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat vel placerat penatibus 
            morbi consequat egestas. <br/>Senectus in consectetur vel ornare tincidunt aliquet tellus. 
          </p>

          <div className="row">
            <Product img={Pr3} image={Heart} name="Korean Rectangle" description="Eyeglasses Optical Eyewear Frames For Men" price="7,995"/>
            <Product img={Pr2} image={Heart} name="Korean Rectangle" description="Eyeglasses Optical Eyewear Frames For Men" price="7,995"/>
            <Product img={Pr} image={Heart} name="Korean Rectangle" description="Eyeglasses Optical Eyewear Frames For Men" price="7,995"/>
            <Product img={Pr3} image={Heart} name="Korean Rectangle" description="Eyeglasses Optical Eyewear Frames For Men" price="7,995"/>
          </div>
        </div>
      </div>
    </section>
    <section style={{
      backgroundImage: `url(${Wait})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundSize: "cover",
      height: "450px",
      width: "100%",
      marginTop: "40px",
      position: "relative"
      }}>

        <div className="wait-section">
          <h3>Join our Waitlist</h3>
          <p>Get informed once we are live</p>
          <form>
            <input type="text" name="" className="input" id="" placeholder='Enter your email address' size= "60"/>
            <Button 
            type="button" 
            buttonStyle="myBtn--chocolate--solid"
            buttonSize="myBtn--small"
            >Join waitlist</Button>
          </form>
        </div>

    </section>
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
    </>
  )
}

export default Home
