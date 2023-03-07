import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import { Carousel } from 'react-responsive-carousel';


import ReyCamisetaLogo from '../../src/reyCamiseta.png';


class FanArtNote extends Component{
    render() {
        return (
        <> 
        <a href="https://reycamiseta.com/?page_id=3751" target="_blank">
        <div className="w-auto bg-yellow px-2 py-4 flex items-center justify-around flex-col md:flex-row">
            <div>
                <p className="merch-banner-subtext text-base pt-2 md:pt-0 ">ESTE ES UN FANART, NO ES EL SITIO OFICIAL DE</p>
                <p className="merch-banner-text text-lg md:text-4xl ">
                    ALEX FERNÁNDEZ
                </p>
            </div>
        </div>
        </a>
        </>

        )
    }
}
export default FanArtNote;

