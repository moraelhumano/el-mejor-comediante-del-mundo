import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import  Bounce  from 'react-reveal/Zoom';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'



import Alex01 from '../../src/alex01.jpeg';
import Alex02 from '../../src/alex02.jpeg';
import Alex03 from '../../src/alex03.jpeg';



class Profile extends Component{
    render() {
        return (
        <>
        <section className="pt-4 mt-12">
            <Zoom>
                <section className="max-w-5xl bg-white rounded-2xl py-10 mx-auto container-services ">
                    <section className="flex justify-center px-6 flex-col md:flex-row text-center md:text-left">
                        <div className="sm:w-1/2  sm-text-center flex flex-col justify-center">
                            <h3 className="text-5xl text-gray-600 font-bold leading-none">
                                ¡Místico!
                            </h3>
                            <p className="text-lg md:text-2xl text-gray-600 mt-4">
                            Alex Fernández es comediante de <b>stand up</b> y <b>escritor</b>. 
                            Ha colaborado en diversas ocaciones en <b>Comedy Central</b> y ademásde
                            contar con <b>2 especiales en Netflix</b>.
                            </p>
                            <ul className="text-lg md:text-2xl text-gray-600 mt-4">
                                <a href="https://www.netflix.com/mx/title/80183198" target="_blank"><b><li className="text-lg text-gray-600 underline mt-4">Alex Fernandez: El Especial</li></b></a>
                                <a href="https://www.netflix.com/mx/title/81121981" target="_blank"><b><li className="text-lg text-gray-600 underline">Alex Fernandez: El Mejor comediante del mundo</li></b></a>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                        <Carousel className="carousel-fan h-full" interval={3000} autoPlay swipeable dynamicHeight infiniteLoop width  >
                            <div className="flex">
                                <img className="img-carousel" src={Alex01} />
                            </div>
                            <div className="flex">
                                <img className="img-carousel" src={Alex02} />
                            </div>
                            <div className="flex">
                                <img className="img-carousel" src={Alex03} />
                            </div>
                        </Carousel>
                        </div>
                    </section>
                </section>
            </Zoom>
        </section>

        </>

        )
    }
}
export default Profile;



