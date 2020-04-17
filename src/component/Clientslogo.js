import React, {Component} from 'react';
import Clientsliders from 'react-slick';
import Sectiontitle from '../component/Banner/Sectiontitle';

class Clientslogo extends  Component{
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        };
        return(
            <section className="clients_logo_area">
                <div className="container">
                    <Sectiontitle Title="Jednostavno profesionalno" TitleP="Učinite svet boljim mestom sa profesionalcima."/>
                    <Clientsliders {...settings} className="clients_slider">
                        <div className="item">
                            <a href=".#"><img src={require('../image/11.png')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a href=".#"><img src={require('../image/12.png')}alt=""/></a>
                        </div>
                        <div className="item">
                            <a href=".#"><img src={require('../image/13.png')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a href=".#"><img src={require('../image/14.png')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a href=".#"><img src={require('../image/15.png')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a href=".#"><img src={require('../image/16.png')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a href=".#"><img src={require('../image/6.png')} alt=""/></a>
                        </div>
                    </Clientsliders>
                </div>
            </section>
        );
    }
    
}
export default Clientslogo;