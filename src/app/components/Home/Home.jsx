import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import HomeService from './HomeService';
import HomeContact from '../HomeContact/HomeContact';

const Home = () => {
    return (
        <div className='mt-12'>
            <Hero />
            <AboutUs />
            <HomeService />
            <HomeContact />
        </div>
    );
};

export default Home;