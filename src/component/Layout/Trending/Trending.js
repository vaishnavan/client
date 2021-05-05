import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import DisplayVideo from './displayVideo/DisplayVideo'

class Trending extends Component {
    render() {
        return (
            <div className="container pt-5">
                <Navbar />
                <DisplayVideo />
            </div>
        )
    }
}

export default Trending
