import React, { Component } from 'react'
import './Banner.css'

class Banner extends Component {
  render () {
    return (
      <div className='youBannerMain'>
        <div
          id='carouselExampleFade'
          className='carousel slide carousel-fade'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src='https://images.unsplash.com/photo-1599999904438-c6e25307afd0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80' className='d-block' alt='no' />
            </div>
            <div className='carousel-item'>
              <img src='https://images.unsplash.com/photo-1533751043337-13101c0d03ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' className='d-block' alt='no' />
            </div>
            <div className='carousel-item'>
              <img src='https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80' className='d-block' alt='no' />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleFade'
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleFade'
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    )
  }
}

export default Banner
