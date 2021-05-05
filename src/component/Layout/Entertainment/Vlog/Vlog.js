import React, { Component } from 'react'

class Vlog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      flimData: [
        { url: 'https://www.youtube.com/embed/2KhC88f28jo' },
        { url: 'https://www.youtube.com/embed/QGgbc2EPhMg' },
        { url: 'https://www.youtube.com/embed/zxzilbmQNik' },
        { url: 'https://www.youtube.com/embed/fG8FKI4khLg' }
      ]
    }
  }
  render () {
      const {flimData} = this.state;
    return (
      <div>
        <div className='youPopular mt-4'>
          <div className='popularHeading'>
            <h3>Vlog Videos</h3>
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

export default Vlog
