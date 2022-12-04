import React, { Component } from 'react'
import './index.css'

export default class SaiNaveen extends Component {
  render() {
    return (
      <div class="bg-container">
      <div class="card-container">
        <h1 class="heading">New Summer Collection !</h1>
        <div class="card-body">
          <img
            src="https://assets.ccbp.in/frontend/intermediate-rwd/offer-img.png"
            class="image"
         alt="" />
          <p class="description">
            Beat the heat with our cool fashion sale where everyday shopping is
            always rewarded. Get 50% cashback, free shipping, free returns, and
            more at 1000+ top retailers!
          </p>
          <p class="description">
            Shop from the comfort of your home & get your favourites delivered
            right to your doorstep. comprehensive size charts, product info &
            more to help you make the right buying decision. Fresh collection.
            Trendy designs. All for you!
          </p>
          <p class="description">
            You can see more of this collection by clicking on See More button
            below. Buy the Collection before they are all gone. Use EHYA20 to
            get 20% Disc.
          </p>
          <button class="button">See More</button>
          <button class="button">Apply Offer</button>
        </div>
      </div>
    </div>
    )
  }
}