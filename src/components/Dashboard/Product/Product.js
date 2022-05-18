import React, {useEffect, useState} from 'react'
// import axios from 'axios'
import './Product.css'

const Product = () => {
  return (
    <div className='products'>
      <div className='product-card'>
          <div className='product-card-img'>
              <img src='http:\/\/placeimg.com\/640\/480\/any' alt=''/>
          </div>
          <div>
            <h3>Et ut nostrum et ex.</h3>
            <p>Taxes.</p>
            <p>Price</p>
            <p>Net_Price</p>
          </div>
      </div>

    </div>
  )
}

export default Product