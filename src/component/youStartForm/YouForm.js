import axios from 'axios';
import React, { Component } from 'react'
import './youform.css';

class YouForm extends Component {

  constructor(props) {
      super(props)
  
      this.state = {
        videoType:'',
        videoTopic:'',
        videoUrl:'',
        desc:'',
      }
  }

  handleChange = (e) =>{
      const {name,value} = e.target;
      this.setState({
          [name]:value
      })
  }
  
  handleClick = (e) =>{
      // e.preventDefault();
      const videoData = {
          videoTopic:this.state.videoTopic,
          videoType:this.state.videoType,
          videoUrl:this.state.videoUrl,
          desc:this.state.desc,
      }
      axios.post("https://youstartapp.herokuapp.com/", videoData)
      .then((res)=>{
          console.log(res);
      })
  }

  render () {
    return (
      <div className='container youFormMain'>
        <div className='youFormHeading'>
            <h2>YouStarter Video Upload</h2>
        </div>
        <form>
          <div className='mb-3'>
            <label  className='form-label'>
              Video Type
            </label>
            <input
              type='text'
              className='form-control'
              name="videoType"
              onChange={this.handleChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>
              Video Short Desc
            </label>
            <input
              type='text'
              className='form-control'
              name="videoTopic"
              onChange={this.handleChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>
              Description
            </label>
            <input
              type='text'
              className='form-control'
              name="desc"
              onChange={this.handleChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>
              Video URL
            </label>
            <input
              type='text'
              className='form-control'
              name="videoUrl"
              onChange={this.handleChange}
            />
          </div>
          <button type='submit' onClick={this.handleClick} className='btn btn-primary'>
            Upload
          </button>
        </form>
      </div>
    )
  }
}

export default YouForm
