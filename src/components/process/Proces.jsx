import React from 'react'
import './process.css'
import {SlBasket} from 'react-icons/sl'
import {BsArrowRight} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {GiTakeMyMoney} from 'react-icons/gi'

const Proces = () => {
  return (
    <div className="proces_container">
      <div className="container proces_content">
        <h1>Our Delivery Process</h1>
        <div className="proces">
          <div className="proces_check">
            <SlBasket className='process_icon'/>
            <p>Choose Your Item</p>
          </div>
          <BsArrowRight className='arrow_proces'/>
          <div className="proces_check">
            <TbTruckDelivery className='process_icon'/>
            <p>free shipping</p>
          </div>
          <BsArrowRight className='arrow_proces'/>
          <div className="proces_check">
            <GiTakeMyMoney className='process_icon'/>
            <p>Cash On Delivery</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proces