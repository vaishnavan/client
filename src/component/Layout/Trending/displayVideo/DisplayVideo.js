import axios from 'axios'
import React, { Component } from 'react'
import moment from 'moment';
import './displayVideo.css';

export class DisplayVideo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      videoData: []
    }
  }

  componentDidMount () {
    axios.get('https://youstartapp.herokuapp.com/getVideo').then(res => {
      this.setState({
        videoData: res.data
      })
    })
  }

  render () {
    const { videoData } = this.state
    return (
      <div className="mt-3">
        <div className='youVideoDisplay'>
          {videoData.reverse().map((data)=> {
              return(
                <div key={data._id} className='youVideoDisplayData mt-3'>
                <p>{data.videoTopic}</p>
                <iframe
                  src={data.videoUrl}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen='allowfullscreen'
                  mozallowfullscreen='mozallowfullscreen'
                  msallowfullscreen='msallowfullscreen'
                  oallowfullscreen='oallowfullscreen'
                  webkitallowfullscreen='webkitallowfullscreen'
                ></iframe>
                <p>{data.desc} <span>- {moment(data.createdAt).startOf('hour').fromNow()}</span></p>
              </div>
              )
          })}
        </div>
      </div>
    )
  }
}

export default DisplayVideo
