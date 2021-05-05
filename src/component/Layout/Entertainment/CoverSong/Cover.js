import React, { Component } from 'react'

class Cover extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
          flimData: [
            { url: 'https://www.youtube.com/embed/YO7kPWPvjA8' },
            { url: 'https://www.youtube.com/embed/wXABObj3h5I' },
            { url: 'https://www.youtube.com/embed/JXmMgsZFenE' },
            { url: 'https://www.youtube.com/embed/n6bIPWpQ6nY' }
          ]
        }
      }
    render() {
        const {flimData} = this.state;
        return (
            <div>
               <div className='youPopular mt-4'>
          <div className='popularHeading'>
            <h3>Cover Songs</h3>
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

export default Cover
