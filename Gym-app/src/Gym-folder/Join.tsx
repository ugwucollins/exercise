// import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import './Join.scss';
import { useState } from "react";

const Join = ({index}:any) => {
  const [vido, setvido] = useState(0);
  const videos = [ 
    {
      id:1,
      title:'gym-video2.webm',
    },
    {
      id:2,
      title:'gym-video1.webm',
    },
    {
      id:3,
      title:'gym-video.webm',
    },
    {
      id:4,
      title:'gym-video3.webm',
    },
    {
      id:5,
      title:'gym-video4.webm',
    },
    {
      id:6,
      title:'gym-video5.webm',
    },
    {
      id:7,
      title:'gym-video6.webm',
    },
  ]
  return(
    <div className="Join">
        <audio src="audio.mp3" autoPlay></audio>

      <div className="Join-all">
      {/* className= {vido?'active-vido':"Join-all-video"} */}
        <div className="Join-all-header">
          <div className="Join-all-header-word">
            <p className="Join-all-header-word-p">F</p>

            <span className="Join-all-header-word-span">
              <p className="Join-all-header-word-span-p">The</p>
              <p className="Join-all-header-word-span-p">fit Club</p>
            </span>
          </div>

            <button className="Join-all-header-btn">
            <Link to='/' className="Join-all-header-btn-a">Home</Link>
            </button>
          </div>


        {/* </div> */}
        <div className= {vido === index?"Join-all-video":'active-vido'}>
           {videos.map((video:any,index:any) => 
           <video src={video.title} autoPlay 
           controls className={vido === index ?'active-vido':"Join-all-video-a"}
           onClick={() => {
            setvido(index);
           }}>

           </video>
           )}
        </div>

      </div>
      
    </div>
  )
}
export default Join; 
