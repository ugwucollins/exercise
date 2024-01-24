import { useState } from 'react';
import './Plans.scss';

const Plans = () => {
    const [box,setbox] = useState(true);
    const [box1,setbox1] = useState(false);
    const [box2,setbox2] = useState(false);
    return(
        <div className="Plans">
            <div className="Plans-main">
                <div className="Plans-main-words font-all">
                    <span className="Plans-main-words-span font-all">Ready to start </span>
                   <span className='font-all'> Your journey</span>
                    <span className="Plans-main-words-span font-all"> now withus</span>
                </div>

                <div className="Plans-main-box">
                    <div  className={box1? 'box-a':"Plans-main-box-boxs"}
                    onClick={() =>{
                        setbox1(true);
                        setbox(false);
                        setbox2(false)
                    }}>
                        <span className="Plans-main-box-boxs-icon bx bx-shield-plus"></span>
                        <p className="Plans-main-box-boxs-h1">Basic plan</p>
                        <p className="Plans-main-box-boxs-price">$ 25</p>

                       <div className="Plans-main-box-boxs-div">
                            <span className="Plans-main-box-boxs-div-icon">
                                <i className='bx bx-check-circle Plans-main-box-boxs-div-icon-i'></i>
                                <p className="Plans-main-box-boxs-div-icon-p">
                                    2 hours of excercises
                                </p>
                            </span>
                            <span className="Plans-main-box-boxs-div-icon">
                                <i className='bx bx-check-circle Plans-main-box-boxs-div-icon-i'></i>
                                <p className="Plans-main-box-boxs-div-icon-p">
                                    Free Consultation to coaches
                                </p>
                            </span>
                            <span className="Plans-main-box-boxs-div-icon">
                                <i className='bx bx-check-circle Plans-main-box-boxs-div-icon-i'></i>
                                <p className="Plans-main-box-boxs-div-icon-p">
                                    Access to The Community
                                </p>
                            </span>

                            <span className="Plans-main-box-boxs-div-read">
                                See more benefits <span className='bx bx-right-arrow-alt arrow1'></span>
                            </span>
                       </div>
                       
                       <button className="Plans-main-box-boxs-btn">
                         <a href="" className="Plans-main-box-boxs-btn-a">
                            Join now
                         </a>
                       </button>
                    </div>

                    <div className={box? 'box-a':"Plans-main-box-boxs"}
                    onClick={() =>{
                        setbox(true)
                        setbox1(false)
                        setbox2(false)
                    }}
                    >
                        <span className="Plans-main-box-boxs-icon bx bx-crown"></span>
                        <p className="Plans-main-box-boxs-h1">Permum plan</p>
                        <p className="Plans-main-box-boxs-price">$ 30</p>

                       <div className="Plans-main-box-boxs-div">
                            <span className="Plans-main-box-boxs-div-icon">
                                <i className='bx bx-check-circle Plans-main-box-boxs-div-icon-i'></i>
                                <p className="Plans-main-box-boxs-div-icon-p">
                                    5 hours of excercises
                                </p>
                            </span>
                            <span className="Plans-main-box-boxs-div-icon">
                                <i className='bx bx-check-circle Plans-main-box-boxs-div-icon-i'></i>
                                <p className="Plans-main-box-boxs-div-icon-p">
                                    Free Consultation to coaches
                                </p>
                            </span>
                            <span className="Plans-main-box-boxs-div-icon">
                                <i className='bx bx-check-circle Plans-main-box-boxs-div-icon-i'></i>
                                <p className="Plans-main-box-boxs-div-icon-p">
                                    Access to minibar
                                </p>
                            </span>

                            <span className="Plans-main-box-boxs-div-read">
                                See more benefits <span className='bx bx-right-arrow-alt arrow1'></span>
                            </span>
                       </div>
                       
                       <button className="Plans-main-box-boxs-btn">
                         <a href="" className="Plans-main-box-boxs-btn-a">
                            Join now
                         </a>
                       </button>
                    </div>

                    <div  className={box2? 'box-a':"Plans-main-box-boxs"}
                    onClick={() =>{
                        setbox(false)
                        setbox2(true)
                        setbox1(false)
                    }}>
                        <span className="Plans-main-box-boxs-icon bx bx-dumbbell bell"></span>
                        <p className="Plans-main-box-boxs-h1">Pro plan</p>
                        <p className="Plans-main-box-boxs-price">$ 45</p>

                       <div className="Plans-main-box-boxs-div">
                            <span className="Plans-main-box-boxs-div-icon">
                                <i className='bx bx-check-circle Plans-main-box-boxs-div-icon-i'></i>
                                <p className="Plans-main-box-boxs-div-icon-p">
                                    8 hours of excercises
                                </p>
                            </span>
                            <span className="Plans-main-box-boxs-div-icon">
                                <i className='bx bx-check-circle Plans-main-box-boxs-div-icon-i'></i>
                                <p className="Plans-main-box-boxs-div-icon-p">
                                    Consultation Of Private Coach
                                </p>
                            </span>
                            <span className="Plans-main-box-boxs-div-icon">
                                <i className='bx bx-check-circle Plans-main-box-boxs-div-icon-i'></i>
                                <p className="Plans-main-box-boxs-div-icon-p">
                                    Free Fitnesss Merchandiises
                                </p>
                            </span>

                            <span className="Plans-main-box-boxs-div-read">
                                See more benefits <span className='bx bx-right-arrow-alt arrow1'></span>
                            </span>
                       </div>
                       
                       <button className="Plans-main-box-boxs-btn">
                         <a href="" className="Plans-main-box-boxs-btn-a">
                            Join now
                         </a>
                       </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Plans;