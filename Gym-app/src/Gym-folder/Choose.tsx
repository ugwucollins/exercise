import './Choose.scss';
const Choose= () => {
    return(
        <div className="Choose">
            <div className="Choose-all">
                    <p className='Choose-all-p'>
                        <span className='why'>Why </span>
                         choose us
                    </p>
     
                <div className="Choose-all-main">
                    <div className="Choose-all-main-img">
                        <img src="gym1.jpg" alt="gym-photo" className="Choose-all-main-img-span item1 image" />
                        <img src="gym3.jpg" alt="gym-photo" className="Choose-all-main-img-span item2" />
                        <img src="gym2.jpg" alt="gym-photo" className="Choose-all-main-img-span item3" />
                        <img src="gym4.jpg" alt="gym-photo" className="Choose-all-main-img-span item4" />
                    </div>

                    <div className="Choose-all-main-words">
                        <p className="h3">Some Reasons</p>
                        <p className='Choose-all-main-words-p'>
                            <span className='why'>Why </span>
                            choose us?
                        </p>
                        <div className="Choose-all-main-words-div">
                            <span className="Choose-all-main-words-div-span">
                                <p className="Choose-all-main-words-div-span-p1 bx bx-check-circle"></p>
                                <p className="Choose-all-main-words-div-span-p2">
                                    over 140+ Expert coachs
                                </p>
                            </span>

                            <span className="Choose-all-main-words-div-span">
                                <p className="Choose-all-main-words-div-span-p1 bx bx-check-circle"></p>
                                <p className="Choose-all-main-words-div-span-p2">
                                   Train smarter and faster than before
                                </p>
                            </span>

                            <span className="Choose-all-main-words-div-span">
                                <p className="Choose-all-main-words-div-span-p1 bx bx-check-circle"></p>
                                <p className="Choose-all-main-words-div-span-p2">
                                   1 free program for new members
                                </p>
                            </span>

                            <span className="Choose-all-main-words-div-span">
                                <p className="Choose-all-main-words-div-span-p1 bx bx-check-circle"></p>
                                <p className="Choose-all-main-words-div-span-p2">
                                   reliable parthers
                                </p>
                            </span>

                            <div className="Choose-all-main-words-div-div">
                                <p className="Choose-all-main-words-div-div-our">
                                    our parthers
                                </p>
                                <span className="Choose-all-main-words-div-div-icons">
                                    <i className='bx bxl-opera'></i>
                                    <i className='bx bxl-firebase'></i>
                                    <i className='bx bxl-django'></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Choose;