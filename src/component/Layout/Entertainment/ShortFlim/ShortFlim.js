import React, { Component } from 'react'
import './shortflim.css'

class ShortFlim extends Component {
  constructor (props) {
    super(props)

    this.state = {
      flimData: [
        { url: 'https://www.youtube.com/embed/Q0re4l90iec' },
        { url: 'https://www.youtube.com/embed/ZzEjc-xOhgc' },
        { url: 'https://www.youtube.com/embed/u2io3GVmesc' },
        { url: 'https://www.youtube.com/embed/e5pGMxq6CwI' }
      ]
    }
  }

  render () {
    const { flimData } = this.state
    return (
      <div>
        <div className='youPopular mt-4'>
          <div className='popularHeading'>
            <h3>Short Flim</h3>
          </div>
          <div className='popularVideoMain'>
            {flimData.map((data, i) => {
              return (
                <div key={i} className='popularVideoShow'>
                  <iframe
                    src={data.url}
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
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default ShortFlim
