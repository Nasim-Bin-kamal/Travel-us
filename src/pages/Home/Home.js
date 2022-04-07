import React from 'react';
import CompanyPolicy from '../../components/CompanyPolicy/CompanyPolicy';
import CountryPackages from '../../components/CountryPackages';
import FaQuestions from '../../components/FaQuestions/FaQuestions';
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
            <CompanyPolicy />
            <FaQuestions />
            <Footer />
        </div>
    );
};

export default Home;