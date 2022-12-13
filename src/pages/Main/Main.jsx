
import React from 'react';
import AboutUs from '../../components/AboutUs/AboutUs';
import Advantages from '../../components/Advantages/Advantages';
import Diagnostics from '../../components/Diagnostics/Diagnostics';
import Footer from '../../components/Footer/Footer';
import Intro from '../../components/Intro/Intro';

import PriceList from '../../components/PriceList/PriceList';
import "./Main.scss";

const Main = () => {
    return (
        <div className='main'>
            <Intro />
            <Advantages />
            <Diagnostics />
            <AboutUs />
            <PriceList />
            <Footer />
            
        </div>
    );
}

export default Main;