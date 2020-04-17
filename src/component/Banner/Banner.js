import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Parallax} from 'react-parallax/';
import {Fade , Reveal} from 'react-reveal/';
const image = require('../../image/profile.jpg');

class Banner extends Component {
    render(){
        let jhonData = this.props.jhonData;
        return(
            <section id="home">
                <Parallax bgImage={image} strength={500} className="banner_area">
                    <div className="container">
                        <div className="banner_content">
                            <Reveal effect="fadeInUp">
                                <h5>Dobrodošli na</h5>
                            </Reveal>
                            <Reveal effect="fadeInUp" duration={1500}>
                                <h2>{jhonData.name}</h2>
                            </Reveal>
                            
                            <h4 className="wow fadeInUp anoimated">Projektovanje i izvođenje instalacija</h4>
                            <Fade  bottom cascade duration={1000}>
                            
                            </Fade>
                        </div>
                    </div>
                </Parallax>
            </section>
        );
    }
}

export default Banner;