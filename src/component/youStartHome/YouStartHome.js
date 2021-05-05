import React, { Component } from 'react'
import Banner from '../Layout/Banner/Banner'
import Cover from '../Layout/Entertainment/CoverSong/Cover'
import ShortFlim from '../Layout/Entertainment/ShortFlim/ShortFlim'
import Vlog from '../Layout/Entertainment/Vlog/Vlog'
import Navbar from '../Layout/Navbar/Navbar'
import Popular from '../Layout/Popular/Popular'

class YouStartHome extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Banner />
                <Popular />
                <ShortFlim />
                <Vlog />
                <Cover />
            </div>
        )
    }
}

export default YouStartHome
