import React, { Component } from 'react'
import './popular.css'

export class Popular extends Component {
  render () {
    return (
      <div className='youStartPopular'>
        <div className='youPopular'>
          <div className='popularHeading'>
            <h3>Popular Videos</h3>
          </div>
          <div className='popularVideoMain'>
            <div className='popularVideoShow'>
              <iframe
                src='https://www.youtube.com/embed/d9n0uNjfTmI'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen='allowfullscreen'
                mozallowfullscreen='mozallowfullscreen'
                msallowfullscreen='msallowfullscreen'
                oallowfullscreen='oallowfullscreen'
                webkitallowfullscreen='webkitallowfullscreen'
              ></iframe>
            </div>
            <div className='popularVideoShow'>
              <iframe
                src='https://www.youtube.com/embed/KfUExOXxU5Q'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen='allowfullscreen'
                mozallowfullscreen='mozallowfullscreen'
                msallowfullscreen='msallowfullscreen'
                oallowfullscreen='oallowfullscreen'
                webkitallowfullscreen='webkitallowfullscreen'
              ></iframe>
            </div>
            <div className='popularVideoShow'>
              <iframe
                src='https://www.youtube.com/embed/N-u9gR8ceQg'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen='allowfullscreen'
                mozallowfullscreen='mozallowfullscreen'
                msallowfullscreen='msallowfullscreen'
                oallowfullscreen='oallowfullscreen'
                webkitallowfullscreen='webkitallowfullscreen'
              ></iframe>
            </div>
            <div className='popularVideoShow'>
              <iframe
                src='https://www.youtube.com/embed/r3bngwZsfMI'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen='allowfullscreen'
                mozallowfullscreen='mozallowfullscreen'
                msallowfullscreen='msallowfullscreen'
                oallowfullscreen='oallowfullscreen'
                webkitallowfullscreen='webkitallowfullscreen'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Popular
