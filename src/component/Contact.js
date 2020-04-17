import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal/';

class Contact extends Component {
    render(){
        let jhonData = this.props.jhonData;
        return(
            <section className="contact-area" id="contact">
                <div className="container">
                    <div className="row row-reverse">
                        {
                            jhonData.contact && jhonData.contact.map(item =>{
                            return(
                                    <React.Fragment key={item.id}>
                                        <div className="col-lg-5">
                                            <Reveal effect="fadeInLeft" duration={500}>
                                                <div className="contact_info">
                                                    <h4>{item.title}</h4>
                                                    <ul className="nav">
                                                        {
                                                            item.menuItems.map(info =>{
                                                                return(
                                                                    <li className="item" key={info.id}>
                                                                        <div className="media">
                                                                            <a href="/#">
                                                                                <i className={info.icon}></i>
                                                                            </a>
                                                                            <div className="media-body">
                                                                                <a href="/#">{info.text}</a> 
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </Reveal>
                                        </div>
                                    </React.Fragment>
                                    )
                                }
                            )
                        }
                        <div className="col-md-7">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="input_form">
                                    <h4>{jhonData.contacttitle}</h4>
                                    <form action="contact_process.php" id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" id="name" name="name" className="form-control" placeholder="Ime*"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="email" className="form-control" id="email" name="email" placeholder="email*"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" id="subject" name="subject" className="form-control" placeholder="Tema*"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" id="phone" name="phone" placeholder="Telefon*"/>
                                            </div>
                                        </div>
                                        <textarea name="message" id="message" className="form-control" rows="6" placeholder="Sadržaj..."></textarea>
                                        <button type="submit" className="btn send_btn theme_btn">Pošalji</button>
                                    </form>
                                    <div id="success">Vaša poruka je uspešno poslata!</div>
                                    <div id="error">Opps! Nešto nije u redu. Pokušajte ponovo</div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Contact;