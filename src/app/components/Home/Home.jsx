import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import HomeService from './HomeService';
import HomeContact from '../HomeContact/HomeContact';
import HomeServiceDB from './HomeServiceDB';

const Home = () => {
    return (
        <div className='mt-12'>
            <Hero />
            <AboutUs />
            <HomeService />
            <HomeContact />
            <HomeServiceDB />
        </div>
    );
};

export default Home;