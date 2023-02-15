import React from 'react'
import Ads from '../components/Ads.js'
import Navbar from '../components/Navbar.js'
import Slider from '../components/Slider.js'
import Categories from '../components/Categories.js'
import Popular from '../components/Popular.js'
import Footer from '../components/Footer.js'

const Home = () => {
    return (
        <div>
            <Ads />
            <Navbar />
            <Slider />
            <Categories />
            <Popular />
            <Footer />
        </div>
    )
};

export default Home;