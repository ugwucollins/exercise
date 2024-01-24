import { useState } from 'react';
import './Testimonials.scss';

interface Props{
    Texts:string[],
    Images:string[],
    Names:string[],
    Works:string[],
}


const Testimonials = ({Texts,Images,Names,Works}:Props) => {
    
    const [slideIndex,setslideIndex] = useState(0);

    function handlePrev() {
        setslideIndex(index=> index === 0 ?Texts.length - 1 :index - 1);
    }
    function handleNext() {
        setslideIndex(index=> index === Texts.length - 1 ? 0 :index + 1);
    }

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
                            <div className="slider">
                                {Texts.map((index) => <p key={index} 
                                className='slider-contain'
                                > {Texts[slideIndex]}</p>)}
                            </div>

                          <div className="flex">

                            <div className="flex-div">
                                {Names.map((index) => <p key={index} 
                                className='flex-div-contain'
                                > {Names[slideIndex]} - </p>)}
                            </div>
                            
                            <div className="flex-div1">
                                {Works.map((index) => <p key={index} 
                                className='flex-div1-contain'
                                > {Works[slideIndex]}</p>)}
                            </div>

                          </div>
                          

                            {
                            /* {word && <Word 
                            para='  I made the right choice by choosing the fitclub and by choosing 
                                  the right plan and program I already achieved my ideal body!'
                            name='Mathew John'
                            work='Entrepreneur'  />}                          
                            {word1 && <Word 
                            para='name='Tony Collins'
                            work='CEO The Manager '  />}                           */
                            }
                        </div>

                                
                        <div className="Testimonials-section">
                            <div className="Testimonials-section-border1"></div>

                            <span className="Testimonials-section-span what2 font-all">
                                <p className="what font-all">Ready to </p>
                                <span className="font-all">level up</span> 
                                &nbsp;
                            </span>

                            <span className="Testimonials-section-span what2 font-all">
                            <span className="font-all">your body</span> 
                            <p className="what font-all">with us?</p> 
                            </span>
                        </div>

                    </div>

                    <div className="Testimonials-main-all-img">

                        <div className="Testimonials-main-all-img-section">
                            <div className="Testimonials-main-all-img-section-btn">

                                <button className="Testimonials-main-all-img-section-btn-arrow" onClick={handlePrev}>
                                   <i className='bx bx-left-arrow-alt'></i>
                                </button>

                                <button className="Testimonials-main-all-img-section-btn-arrow1" onClick={handleNext}>
                                   <i className='bx bx-right-arrow-alt'></i>
                                </button>
                              
                            </div>

                            <div className="Testimonials-main-all-img-section-box">
                                 <div className="Image">
                                    <div className="Image-div">
                                        <span className="Image-div-span">
                                             {Images.map(image => 
                                               <img src={Images[slideIndex]}
                                            className='Image-div-span-contain2' 
                                            key={image}
                                             alt="gym-photos" />
                                             )}
                                             </span>
                                         </div>
                                     </div> 
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