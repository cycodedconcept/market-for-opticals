import React from 'react'
import { useState } from 'react'
import './product.css'
import { Button}  from './Button'


const Product = (props) => {
    const [num, setNum] = useState(1);

    const increaseNum = () => {
      if (num < 10) {
        setNum(Number(num) + 1);
      }
    };
  
    const decreaseNum = () => {
      if (num > 1) {
        setNum(num - 1);
      }
    }
  return(
    <div className="col-sm-12 col-md-12 col-lg-3">
        <div className="service-card">
            <div className="get-position">
                <img src={props.img} alt="" />
                <Button type="button" buttonStyle="myBtn--transparent--solid" buttonSize="myBtn--xsmall">50% off</Button>
                <Button type="button" buttonStyle="myBtn--outline--solid" buttonSize="myBtn--xsmall"><img src={props.image} alt="heart" className='img-heart'/>save</Button>
            </div>
            <p className='m-0 p-0'>{props.name}</p>
            <p>{props.description}</p>
            <small className='para'>₦{props.price}</small>
            <div className="row">
                <div className="col-lg-6">
                  <small>free delivery</small>
                </div>
                <div className="col-lg-6">
                    <form>
                      <button className='mr-3 qty-down' type='button' onClick={decreaseNum}>-</button>
                      <input type="text" className='input-text' value={num} disabled/>
                      <button className='qty-up' type='button' onClick={increaseNum}>+</button>
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
  )
}

export default Product
