import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import { Carousel } from 'react-responsive-carousel';


import Show01 from '../../src/showalex01.jpeg';
import Show02 from '../../src/showalex02.jpeg';

class Shows extends Component{
    render() {
        return (
        <> 
        <section className="max-w-5xl mt-20 bg-white rounded-2xl p-4 mx-auto container-services flex-col">
            <Bounce right>
                <div className="title-section">
                    <h3 className="text-2xl md:text-3xl text-gray-600 text-center text-white font-bold leading-none">
                        PRÓXIMAS FECHAS
                    </h3>
                </div>
            </Bounce>  
            <section className="container w-full max-w-5xl mx-auto md:mt-2 flex flex-col md:flex-row wrap-own">
            <div  className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                <Carousel className="carousel-fan h-full " interval={3000} autoPlay swipeable dynamicHeight infiniteLoop width  >
                    <div className="flex">
                        <img className="img-carousel-shows" src={Show01} />
                    </div>
                    <div className="flex">
                        <img className="img-carousel-shows" src={Show02} />
                    </div>

                </Carousel>                       
            </div>
            <div className="w-full  text-gray-600 mb-8 text-lg md:text-right">
                <div className=" text-center md:text-right ">
                    <p className="text-gray-600 text-xl font-bold">TEATRO GALERIAS, GUADALAJARA</p>
                    <p className="text-gray-600 text-xl font-bold">10 DE SEPTIEMBRE / 21:00 HRS</p>
                    <a className="self-center mt-12" target="_blank" href="https://cutt.ly/2QV2J45">
                        <button class="mx-auto lg:mx-0 text-white font-bold bg-blue  px-4 border button-home content-center mt-4 rounded">
                            COMPRA TUS BOLETOS
                        </button>
                    </a>
                </div>
                <div className="mt-8 text-center md:text-right">
                    <p className="text-gray-600 font-bold text-xl">TEATRO SAN FRANCISCO, PACHUCA</p>
                    <p className="text-gray-600 font-bold text-xl">8 DE OCTUBRE / 21:00 HRS</p>
                    <a className="self-center mt-12" target="_blank" href="https://arema.mx/e/7184">
                        <button class="mx-auto lg:mx-0 text-white font-bold mt-4 bg-blue px-4 border button-home content-center rounded">
                            COMPRA TUS BOLETOS
                        </button>   
                    </a>
                </div>
                <div className="mt-8 text-center md:text-right">
                    <a className="self-center mt-12" target="_blank" href="https://bit.ly/2WC7gJZ">
                    <p className="text-gray-600 font-bold text-xl">TEATRO OCAMPO, CUERNAVACA</p>
                    <p className="text-gray-600 font-bold text-xl">9 DE OCTUBRE / 21:00 HRS</p>
                        <button class="mx-auto lg:mx-0 text-white font-bold bg-blue mt-4 px-4 border button-home content-center rounded">
                            COMPRA TUS BOLETOS
                        </button>
                    </a>
                </div>
            </div>
        </section>
       
        </section>

        
        </>

        )
    }
}
export default Shows;

