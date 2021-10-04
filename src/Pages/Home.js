import React, { Component } from 'react';

import HeroHome from '../Components/HeroHome';
import Shows from '../Components/Shows';
import Profile from '../Components/Profile';
import Projects from '../Components/Projects'
import Footer from '../Components/Footer';

 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MerchBanner from '../Components/MerchBanner';



class Home extends Component{
    render() {
        return (
        <>
        <Router>
            <HeroHome />
            <MerchBanner />
            <Profile />
            <Shows />
            <Projects />
            <Footer />
        </Router>
        </>

        )
    }
}
export default Home;


