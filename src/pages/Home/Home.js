import React from 'react';
import CountryPackages from '../../components/CountryPackages';
import Footer from '../../components/Footer/Footer';
import ForeignPackages from '../../components/ForeignPackages/ForeignPackages';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <CountryPackages />
            <ForeignPackages />
            <Footer />
        </div>
    );
};

export default Home;