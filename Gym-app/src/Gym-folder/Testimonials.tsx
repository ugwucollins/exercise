import { useState } from 'react';
import './Testimonials.scss';
import Word from './Word';
import Image from './Image';
const Testimonials = () => {
    const [word,setword]= useState(true);

    return(
        <div className="Testimonials">
            <div className="Testimonials-main">
               <h2 className="Testimonials-main-h2">Our Testimonials</h2>

                <div className="Testimonials-main-all">
                    <div className="Testimonials-main-all-word">
                        <p className="orange">Testimonials</p>
                        <p className="what Testimonials-main-all-word-p">What they</p>
                        <p className="what2 Testimonials-main-all-word-p2">say about us</p>

                        <div className="Testimonials-main-all-word-l">
                            {word && <Word />}                          
                        </div>

                                
                        <div className="Testimonials-section">
                            <div className="Testimonials-section-border1"></div>

                            <span className="Testimonials-section-span what2">
                                <p className="what">Ready to </p>level up &nbsp;
                            </span>

                            <span className="Testimonials-section-span what2">
                            your body <p className="what">with us?</p> 
                            </span>
                        </div>

                    </div>

                    <div className="Testimonials-main-all-img">

                        <div className="Testimonials-main-all-img-section">
                            <div className="Testimonials-main-all-img-section-btn">
                                <span className="Testimonials-main-all-img-section-btn-arrow bx bx-left-arrow-alt"  onClick={() => {
                                  setword(false);
                               }}></span>
                                <span className="Testimonials-main-all-img-section-btn-arrow1 bx bx-right-arrow-alt"></span>
                            </div>

                            <div className="Testimonials-main-all-img-section-box">
                                    <Image />
                            </div>
                        </div>

                        <div className="Testimonials-main-all-img-input">

                            <div className="Testimonials-main-all-img-input-active">
                                <input type="text"
                                 required
                                 className='Testimonials-main-all-img-input-active-input' />
                                
                                <label
                                className='Testimonials-main-all-img-input-active-label'>
                                    Enter Your Email Address Now
                                </label>
                            </div>
                        
                        <button className="Testimonials-main-all-img-input-btn">
                            <a href=" " className="Testimonials-main-all-img-input-btn-a">
                                Join now
                            </a>
                        </button>
                        </div>

                    </div>

                </div>


                <footer className="footer">
                    <div className="footer-border2"></div>

                    <div className="footer-icon">
                        <span className="footer-icon-span">
                            <a href="https://github.com/ugwucollins" className='bx bxl-github footer-icon-span-a'></a>
                            <a href="https://instagram.com/tonycollinsu?igshid=YWYwM2I1ZDdmOQ==" className='bx bxl-instagram footer-icon-span-a'></a>
                            <a href="" className='bx bxl-linkedin footer-icon-span-a'></a>
                        </span>

                        <span className="footer-icon-span1">
                            <p className="footer-icon-span1-p">F</p>
                            <span className="footer-icon-span1-p1">
                                <p className="footer-icon-span1-p1-p">The</p>
                                <p className="footer-icon-span1-p1-p2">FIT CLUB</p>
                            </span>
                        </span>
                    </div>
                </footer>  
            </div>
        </div>
    )
}
export default Testimonials;