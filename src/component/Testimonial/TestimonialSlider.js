import React, {Component} from 'react';
import Slider from 'react-slick';

 class TestimonialSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 1800,
        arrows: false,
        autoplay: true,
        pauseOnHover:true,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings} className="testimonial_slider">
                <div className="item">
                    <div className="author_img">
                        <img src={require('../../image/slider2.png')} alt=""/>
                    </div>
                    <h6>Video inspekcija kanalizacije</h6>
                    <span>Dodatne usluge</span>
                    <p>Tehnologija snimanja kanalizacije ima za svrhu da precizno locira uzrok začepljenja, oštecenost ili devijaciju instalacije.
					Ova tehnologija u mnogome olakšava detektovanje problema a samim tim i njegovo rešavanje.
					Kolorni monitoring, prečnik glave kamere Ø8.50mm, snimanje snimka ili fotografije.
					</p>
                </div>
                <div className="item">
                    <div className="author_img">
                        <img src={require('../../image/our-coaches-2.jpg')} alt=""/>
                    </div>
                    <h6>Bušenje betona</h6>
                    <span>Dodatne usluge</span>
                    <p>Pod bušenjem betona se podrazumeva bušenje bez opiljaka delova betona, što za rezultat ima perfektnu i ravnu rupu.
					Izrada kružnih otvora vertikalno, horizontalno ili koso bušenje za montažu raznih vrsta instalacija
					sada je vrlo jednostavno, brzo i kvalitetno čak i ako se radi o armirano betonskom materijalu.</p>
                </div>
                <div className="item">
                    <div className="author_img">
                        <img src={require('../../image/our-coaches-7.jpg')} alt=""/>
                    </div>
                    <h6>Održavanje instalacija</h6>
                    <span>Dodatne usluge</span>
                    <p>Tekuće održavanje instalacija je izvođenje radova koji se preduzimaju radi sprečavanja oštećenja koja nastaju upotrebom ili
					eksploatacijom. Radovi se sastoje od pregleda, popravki i preduzimanja preventivnih i zaštitnih mera, odnosno svih radova 
					kojima se obezbeđuje održavanje instalacija na zadovolјavajućem nivou upotreblјivosti.</p>
                </div>
          </Slider>
        </div>
      );
    }
  }
  export default TestimonialSlider;