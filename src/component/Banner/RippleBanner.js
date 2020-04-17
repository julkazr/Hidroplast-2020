import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal/Reveal/';
import WaterWave from 'react-water-wave';
const image = require('../../image/Sail-Away.jpg');

class Banner extends Component {
    render(){
        let jhonData = this.props.jhonData;
        return(
            <section id="home">
                 <WaterWave strength={500} className="banner_area" style={{ width: '100%', height: '100%', backgroundSize: 'cover' }} imageUrl={image}>
                        {({ getRootProps}) => (
                             <div className="container">
                                <div className="banner_content">
                                    <Reveal effect="fadeInUp">
                                        <h5>Dobrodošli</h5>
                                    </Reveal>
                                    <Reveal  effect="fadeInUp" duration={1500}>
                                        <h2 className="wow fadeInLeft animated">{jhonData.name}</h2>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={2200}>
                                        <h4 className="wow fadeInUp anoimated">Projektovanje i izvođenje instalacija</h4>
                                    </Reveal>
                                    
                                </div>
                            </div>
                            
                        )}
                        
                </WaterWave>
               
            </section>
        );
    }
}

export default Banner;