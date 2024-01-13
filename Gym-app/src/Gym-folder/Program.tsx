import './Program.scss'

const Program = () => {

    return (
        <div className="Program">
            <div className="Program-main">
                {/* <h1 className="Program-main-h1">Our Program</h1> */}
                <div className="Program-main-explore">
                    <span className="Program-main-explore-space">explore our </span>
                    Programs
                    <span className="Program-main-explore-space"> to shape you</span>
                </div>

                <div className="Program-main-box">
                    <div className="Program-main-box-box1">
                        <span className="Program-main-box-box1-icon bx bx-dumbbell bell"></span>
                        <p className="Program-main-box-box1-p">Strength Training</p>
                        <p className="Program-main-box-box1-p1">
                            In this program, you are trained to improves your Strength
                            through many exercises
                        </p>
                        <button className="Program-main-box-box1-btn">
                            <a href="" className='Program-main-box-box1-btn-a'>
                                Join Now <span className='bx bx-right-arrow-alt arrow'></span>
                            </a>
                        </button>
                    </div>
                    <div className="Program-main-box-box1">
                        <span className="Program-main-box-box1-icon bx bx-run"></span>
                        <p className="Program-main-box-box1-p">Cardio Training</p>
                        <p className="Program-main-box-box1-p1">
                            In this program, you are trained to do sequenyial moves
                            in range of 20 until 30 minutes
                        </p>
                        <button className="Program-main-box-box1-btn">
                            <a href="" className='Program-main-box-box1-btn-a'>
                                Join Now <span className='bx bx-right-arrow-alt arrow'></span>
                            </a>
                        </button>
                    </div>
                    <div className="Program-main-box-box1">
                        <span className="Program-main-box-box1-icon bx bxs-hot"></span>
                        <p className="Program-main-box-box1-p">Fat Burning</p>
                        <p className="Program-main-box-box1-p1">
                            This program, is suitable for you who wants 
                            to get rid of your fat and lose their weight
                        </p>
                        <button className="Program-main-box-box1-btn">
                            <a href="" className='Program-main-box-box1-btn-a'>
                                Join Now <span className='bx bx-right-arrow-alt arrow'></span>
                            </a>
                        </button>
                    </div>
                    <div className="Program-main-box-box1">
                        <span className="Program-main-box-box1-icon bx bxs-shield-plus"></span>
                        <p className="Program-main-box-box1-p">Health Fitness</p>
                        <p className="Program-main-box-box1-p1">
                            This program, is designed for for those who 
                            exercises only for their body fitness and building
                        </p>
                        <button className="Program-main-box-box1-btn">
                            <a href="" className='Program-main-box-box1-btn-a'>
                                Join Now <span className='bx bx-right-arrow-alt arrow'></span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Program;