import React, { Component } from 'react';
import LogoAlex from '../../src/LogoAF.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




class NavBar extends Component{
    render() {
        return (
        <>
        <nav className="md:fixed w-full h-20 z-30 top-0 bg-black px-12 md:px-16 mx-auto flex  justify-center ">
            <div className="flex w-full items-center justify-center md:justify-between">
                <Link to="/" className="toggleColour flex text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                    <img className="h-8 items-center" src={LogoAlex} alt="" />
                </Link>
            </div>
        </nav>
        </>

        )
    }
}
export default NavBar;

