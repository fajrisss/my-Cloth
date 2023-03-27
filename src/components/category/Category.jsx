import React from 'react'
import './category.css'
import { GiDress, GiMonclerJacket, GiArmoredPants, GiConverseShoe } from 'react-icons/gi'
import {RiShirtFill} from 'react-icons/ri'
import {FaRedhat} from 'react-icons/fa'


const Category = () => {
  return (
    <div className="category_container">
      <div className="container category_content">
        <div className="jenis_item">
          <p><a href="/"><GiDress/><br/>
          DRESS</a></p>
        </div>
        <div className="jenis_item">
          <p><a href="/"><GiMonclerJacket/><br/>
          JACKET</a></p>
        </div>
        <div className="jenis_item">
          <p><a href="/"><GiArmoredPants/><br/>
          PANTS</a></p>
        </div>
        <div className="jenis_item">
          <p><a href="/"><RiShirtFill/><br/>
          SHIRT</a></p>
        </div>
        <div className="jenis_item">
          <p><a href="/"><FaRedhat/><br/>
          HAT</a></p>
        </div>
        <div className="jenis_item">
          <p><a href="/"><GiConverseShoe/><br/>
          SHOE</a></p>
        </div>
        
      </div>
    </div>
  )
}

export default Category