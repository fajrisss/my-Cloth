import React from 'react'
import './footer.css'
import {SiRakuten,SiWalmart} from 'react-icons/si'
import {FaEbay, FaAmazon} from 'react-icons/fa'
import {AiOutlineAlibaba} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="container footer_content">
        <div className="footer">
          <div className="footer_link">
            <h2>my-Cloth</h2>
            <div className="link_social">
              <a href="/"><FaAmazon className='social_icon'/></a>
              <a href="/"><AiOutlineAlibaba className='social_icon'/></a>
              <a href="/"><FaEbay className='social_icon'/></a>
              <a href="/"><SiWalmart className='social_icon'/></a>
              <a href="/"><SiRakuten className='social_icon'/></a>
            </div>
          </div>
          <div className="footer_email">
            <h1>Subscribe Our Newsletter</h1>
            <div className="search">
            <input type="text"  placeholder='Search Your Brands..'/>
            <button className="HS_btn"> <BsArrowRight className='btn_icon'/> </button>
          </div>
          </div>
          <div className="footer_adress">
            <p>jl jenderal sudirman, Malang,<br/>Jawa Timur</p>
            <p>+62-812-3456-7890</p>
          </div>
        </div>

        <div className="footer_gap"></div>

        <div className="footer_copy">
          <p>inspired by Abu-Studio</p>
        </div>
      </div>
    </div>
  )
}

export default Footer