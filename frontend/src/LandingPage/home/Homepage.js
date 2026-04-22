import React from 'react';

import Hero from './Hero';
import Pricing from './Pricing';

import Stats from './Stats';
import Education from './Education';
import Awards from './Awards';
import OpenAccount from '../OpenAccount';



function HomePage() {
    return (
        <>
            
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            
            <Education />
            <OpenAccount />
          


        </>
    );
}

export default HomePage;