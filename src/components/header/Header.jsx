import React from 'react'
import './header.css'
import {FaSearch} from 'react-icons/fa'
import IMG1 from './../../asset/img/model1.png'
import IMG2 from './../../asset/img/model2.png'
import IMG3 from './../../asset/img/model3.png'

const Header = () => {
  return (
    <div className="header_container" id='home'>
      <div className="container header_content">
        <div className="header_title">
          <h1>Find Your Favorite <FaSearch/> Clothing</h1>
          <div className="search">
            <input type="text"  placeholder='Search Your Brands..'/>
            <button className="HS_btn"> <FaSearch className='btn_icon'/> </button>
          </div>
        </div>
        <div className="header_img">
          <div className="ava1 ava">
            <img src={IMG2} alt="img1" />
          </div>
          <div className="ava2 ava">
            <img src={IMG1} alt="img1" />
          </div>
          <div className="ava3 ava">
            <img src={IMG3} alt="img1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header