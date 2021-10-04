import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import { Carousel } from 'react-responsive-carousel';


import ReyCamisetaLogo from '../../src/reyCamiseta.png';


class MerchBanner extends Component{
    render() {
        return (
        <> 
        <a href="https://reycamiseta.com/?page_id=3751" target="_blank">
        <div className="w-screen bg-yellow p-4 flex items-center justify-around flex-col md:flex-row">
            <img className="logo-rey" src={ReyCamisetaLogo} />
            <div>
                <p className="merch-banner-subtext text-base pt-0 md:pt-4 md:pt-0">Encuentra la merch</p>
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
export default MerchBanner;

