/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './baby.css'
import IMG from './../../asset/img/kids.png'
import IMG1 from './../../asset/img/model1.png'
import IMG2 from './../../asset/img/model2.png'
import IMG3 from './../../asset/img/model3.png'
import {BiLinkExternal} from 'react-icons/bi'
import {BsHeart} from 'react-icons/bs'

const top=[
  {
    img: IMG2,
    title: 'Man Jacket',
    price: '$100.00',
    disc: '-20%'
  },
  {
    img: IMG1,
    title: 'Man Hat',
    price: '$50.00',
    disc: '-15%'
  },
  {
    img: IMG3,
    title: 'Man Jacket',
    price: '$150.00',
    disc: '-5%'
  },
]

const Baby = () => {
  return (
    <div className="baby_container">
      <div className="container baby_content">

        <div className="kids">
          <div className="kids_text">
            <p>Offer This Week</p>
            <h1>Suit For Baby Kids</h1>
            <a href="/">Shop Now</a>
          </div>
          <div className="kids_img">
            <img src={IMG} alt="kids" />
          </div>
        </div>

        <div className="favorite">
          <div className="favorite_header">
            <h1>Favorite Collection</h1>
          </div>
          <div className="favorite_content">
            <p>It is a long estabilized fract that a reader will be distracted by the reable content of a page when looking at this layout</p>
            <a href="/"><BiLinkExternal/></a>
          </div>
        </div>

        <div className="top_sell">
          <div className="top_container">
            {top.map(({img, title, price, disc})=>{
              return(
                <div className="top_content">
                  <img src={img} alt="img" />
                  <div className="item_detail">
                    <h2>{title}</h2>
                    <a href="#"><BsHeart/></a>
                  </div>
                  <div className="item_price">
                    <h3 className="price">{price}</h3>
                    <p>{disc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Baby