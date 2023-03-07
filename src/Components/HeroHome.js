import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import Zoom from 'react-reveal/Zoom';
import  Bounce  from 'react-reveal/Zoom';

import BgAlexHome from '../../src/alef-home.png'
import LogoAlex from '../../src/LogoAF.png'


class HeroHome extends Component{ 
    render() {
        return (
    <div className="relative bg-white overflow-hidden mt-0 md:mt-20">
      <div className="max-w-9xl mx-auto">
        <div className="relative flex items-center h-screen z-10 bg-home-publico lg:max-w-2xl lg:w-full ">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48  transform translate-x-1/2"
            color="#010101"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="mx-auto ml-0 md:ml-12 max-w-7xl px-4  sm:px-6  lg:px-8 ">
            <Bounce>
            <div className="sm:text-center ">
              <div className="text-center lg:text-left">
              <p className="text-4xl tracking-tight font-extrabold text-white sm:text-3xl md:text-3xl text-shadow-lg">ALEX FERNÁNDEZ:</p>
                <p className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-shadow-lg">EL MEJOR COMEDIANTE DEL MUNDO</p>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                <Link className="w-full flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-blue  md:py-4 md:text-lg md:px-10" to="/calendario">Encuentra tus boletos</Link>
                </div>
              </div>
            </div>
            </Bounce>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-8/12 hide-element">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={BgAlexHome}
          alt=""
        />
      </div>
    </div>
        )
    }
}
export default HeroHome;
