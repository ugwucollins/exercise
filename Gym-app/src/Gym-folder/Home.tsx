import './Index.scss'
import Header from './Header';
import { Link } from 'react-router-dom';

const Index = ({menus}:any) => {

  return (
    <>
    <div className="Home">
        <div className="Home-main">
          <Header menus={menus} />

          <div className="Home-main-fit">
            <p className="Home-main-fit-p">
            THE BEST FITNESSS CLUB IN TOWN
            </p>
          </div>

          <div className="Home-main-shape">
            <span className="Home-main-shape-s">SHAPE</span>YOUR IDEAL BODY
          </div>
          
          <span className="Home-main-span">
            In here we will help you to shape and build your ideal body
             and live up your life to the fullest
          </span>

          <div className="Home-main-rating">
            <span className="Home-main-rating-span">
              <p className="Home-main-rating-span-p1">+ 130</p>
              <p className="Home-main-rating-span-p2">EXPERT COACHES</p>
            </span>

            <span className="Home-main-rating-span">
              <p className="Home-main-rating-span-p1">+ 931</p>
              <p className="Home-main-rating-span-p2">MEMBERS JOINED</p>
            </span>

            <span className="Home-main-rating-span">
              <p className="Home-main-rating-span-p1">+ 50</p>
              <p className="Home-main-rating-span-p2">FITNESS programs</p>
            </span>

            <span className="Home-main-rating-span1">
              <div className="Home-main-rating-span-div">
                <div className="Home-main-rating-span-div-div1"></div>
                <div className="Home-main-rating-span-div-div2"></div>
              </div>

              <div className="Home-main-rating-span-last">
                <p className="Home-main-rating-span-last-p2">Carlorles burned</p>
                <p className="Home-main-rating-span-last-p1">220 Kcal</p>
              </div>
            </span>

          </div>

          <div className="Home-main-btn">
            <button className="Home-main-btn-btn1">
              <Link to='/Join' className="Home-main-btn-btn1-p">Get Started</Link>
            </button>
            <button className="Home-main-btn-btn2">
              <p className="Home-main-btn-btn2-p">Learn More</p>
            </button>
          </div>

          <div className="Home-main-circle">
            <div className="Home-main-circle-main"></div>
            <div className="Home-main-circle-main1"></div>
          </div>

        </div>
        <div className="Home-second-main">
          <button  className="Home-second-main-btn">
            <Link to='/Join' className="Home-second-main-btn-a">Join Now</Link>
          </button>
          <div className="Home-second-main-div">
            <span className="Home-second-main-div-span bx bxs-heart"></span>
            <p className="Home-second-main-div-rate">Heart Rate</p>
            <p className="Home-second-main-div-p">116 bpm</p>
          </div>
        </div>
    </div>
    <div className="Home-img">
      {/* <img src="gym.png" alt="gym" className='Home-img-image' /> */}
      <img src="gym2.png" alt="gym" className='Home-img-image' />
    </div>
    </>
  )
}
export default Index;
