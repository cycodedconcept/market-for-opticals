import React from 'react'
import './home.css'
import { Button}  from './Button'
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

const Home = () => {
  return (
    <>
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
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="service-card">
                <div className='get-position'>
                  <img src={ Pr3 } alt="pr" />
                  <Button type="button" buttonStyle="myBtn--transparent--solid" buttonSize="myBtn--xsmall">50% off</Button>
                  <Button type="button" buttonStyle="myBtn--outline--solid" buttonSize="myBtn--xsmall"><img src={ Heart } alt="heart" className='img-heart'/>save</Button>
                </div>
                <p className='m-0 p-0'>Korean Rectangle</p>
                <p>Eyeglasses Optical Eyewear Frames For Men</p>
                <small className='para'>₦7,568</small>
                <div className="row">
                  <div className='col-lg-6'>
                    <small>free delivery</small>
                  </div>
                  <div className='col-lg-6'>
                    <form>
                      <button className='mr-3 qty-down'>-</button>
                      <input type="text" className='input-text' value="1" disabled/>
                      <button className='qty-up'>+</button>
                    </form>
                  </div>
                </div>
                <div class="d-flex mt-3 justify-content-between">
                  <div class="rating font-size-12">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="far fa-star"></i></span>
                  </div>
                  <p>100</p>
                  <div>
                    <Button 
                    type="button" 
                    buttonStyle="myBtn--chocolate--solid"
                    buttonSize="myBtn--cart-small"
                    >Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="service-card">
                <div className='get-position'>
                  <img src={ Pr } alt="pr" />
                  {/* <Button type="button" buttonStyle="myBtn--transparent--solid" buttonSize="myBtn--xsmall">50% off</Button> */}
                  <Button type="button" buttonStyle="myBtn--outline--solid" buttonSize="myBtn--xsmall"><img src={ Heart } alt="heart" className='img-heart'/>save</Button>
                </div>
                <p className='m-0 p-0'>Korean Rectangle</p>
                <p>Eyeglasses Optical Eyewear Frames For Men</p>
                <small className='para'>₦7,568</small>
                <div className="row">
                  <div className='col-lg-6'>
                    <small>free delivery</small>
                  </div>
                  <div className='col-lg-6'>
                    <form>
                      <button className='mr-3 qty-down'>-</button>
                      <input type="text" className='input-text' value="1" disabled/>
                      <button className='qty-up'>+</button>
                    </form>
                  </div>
                </div>
                <div class="d-flex mt-3 justify-content-between">
                  <div class="rating font-size-12">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="far fa-star"></i></span>
                  </div>
                  <p>100</p>
                  <div>
                    <Button 
                    type="button" 
                    buttonStyle="myBtn--chocolate--solid"
                    buttonSize="myBtn--cart-small"
                    >Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="service-card">
                <div className='get-position'>
                  <img src={ Pr3 } alt="pr" />
                  <Button type="button" buttonStyle="myBtn--transparent--solid" buttonSize="myBtn--xsmall">50% off</Button>
                  <Button type="button" buttonStyle="myBtn--outline--solid" buttonSize="myBtn--xsmall"><img src={ Heart } alt="heart" className='img-heart'/>save</Button>
                </div>
                <p className='m-0 p-0'>Korean Rectangle</p>
                <p>Eyeglasses Optical Eyewear Frames For Men</p>
                <small className='para'>₦7,568</small>
                <div className="row">
                  <div className='col-lg-6'>
                    <small>free delivery</small>
                  </div>
                  <div className='col-lg-6'>
                    <form>
                      <button className='mr-3 qty-down'>-</button>
                      <input type="text" className='input-text' value="1" disabled/>
                      <button className='qty-up'>+</button>
                    </form>
                  </div>
                </div>
                <div class="d-flex mt-3 justify-content-between">
                  <div class="rating font-size-12">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="far fa-star"></i></span>
                  </div>
                  <p>100</p>
                  <div>
                    <Button 
                    type="button" 
                    buttonStyle="myBtn--chocolate--solid"
                    buttonSize="myBtn--cart-small"
                    >Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="service-card">
                <div className='get-position'>
                  <img src={ Pr2 } alt="pr" />
                  <Button type="button" buttonStyle="myBtn--transparent--solid" buttonSize="myBtn--xsmall">50% off</Button>
                  <Button type="button" buttonStyle="myBtn--outline--solid" buttonSize="myBtn--xsmall"><img src={ Heart } alt="heart" className='img-heart'/>save</Button>
                </div>
                <p className='m-0 p-0'>Korean Rectangle</p>
                <p>Eyeglasses Optical Eyewear Frames For Men</p>
                <small className='para'>₦7,568</small>
                <div className="row">
                  <div className='col-lg-6'>
                    <small>free delivery</small>
                  </div>
                  <div className='col-lg-6'>
                    <form>
                      <button className='mr-3 qty-down'>-</button>
                      <input type="text" className='input-text' value="1" disabled/>
                      <button className='qty-up'>+</button>
                    </form>
                  </div>
                </div>
                <div class="d-flex mt-3 justify-content-between">
                  <div class="rating font-size-12">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="far fa-star"></i></span>
                  </div>
                  <p>100</p>
                  <div>
                    <Button 
                    type="button" 
                    buttonStyle="myBtn--chocolate--solid"
                    buttonSize="myBtn--cart-small"
                    >Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>
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
          <p>Get informed once we’re live</p>
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
    </>
  )
}

export default Home
