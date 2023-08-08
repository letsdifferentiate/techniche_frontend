import React, {useState,useEffect} from 'react'
import ReactPlayer from 'react-player'
import sidebar from "./images/sidebar.svg"
import Techniche from "./images/Techniche.svg"
import Techniche_logo from "./images/Techniche_logo.svg"
import Sponsors from './Sponsors'
import Eye from "./images/eye.svg"
import Star from "./images/star.svg"
import Full_group from "./images/full_group.svg"
import YearScroll from './YearScroll'
import globe from "./images/globe.mp4"
import coordinates from "./images/Coordinates.png"
import flower from "./images/flower.png"
import "./Home.css"
import Logo from './Logo'
import Ellipse from './images/Ellipse.png'
import video from "./images/sample_video.mp4"
import Footer from "../../Footer/Footer"


function Home() {
  
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [mouseContent, setMouseContent] = useState("Pause")

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
 

  useEffect(() => {
    const updateCursorPosition = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    if (isHovering) {
      document.body.style.cursor = 'none'; // Hide the default cursor when hovering over the custom cursor
    } else {
      document.body.style.cursor = 'auto'; // Restore the default cursor when not hovering over the custom cursor
    }
    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, [isHovering]);

useEffect( () =>
  {
  const videoPlayer = document.getElementById('videoPlayer');

// Set the desired playback speed (e.g., 1.5 for 1.5x speed)
const playbackSpeed = 5;

// Set the playback speed when the video is ready to play
videoPlayer.oncanplay = () => {
  videoPlayer.playbackRate = playbackSpeed;
};})
const handleVideoClick = () => {
  const video = document.getElementById('video');
  if(mouseContent === "Pause"){
    setMouseContent("Play")
    video.pause();
  }
  else{
    setMouseContent("Pause")
    video.play()
  }
}
  return (
    <div>
    <Logo />


      <div className='text-white md:mt-40 w-[90vw] h-[50vh] mx-auto relative flex justify-between items-center'>
       <img src={sidebar} className='hover hidden md:block'/>
        <div className=' w-[45vw] relative my-auto h-[30vh] md:h-[50vh] flex flex-col items-center justify-center'>
           <div className='absolute top-0 left-0 text-lg'>SINCE 1999</div>
           <div></div>
           <img src={Ellipse} className='ellipse absolute hover w-[100vw]' />
           
           <div className='relative mx-auto'>
  <div className='text-6xl md:text-8xl text-white flex mx-auto'>
    <div className='mori_to_grid T1' style={{ background: 'linear-gradient(to bottom, blue, white)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>T</div>
    <div className='grid_to_mori E1' style={{ background: 'linear-gradient(to bottom, blue, white)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>E</div>
    <div className='mori_to_grid C1' style={{ background: 'linear-gradient(to bottom, blue, white)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>C</div>
    <div className='grid_to_mori H1' style={{ background: 'linear-gradient(to bottom, blue, white)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>H</div>
    <div className='mori_to_grid N1' style={{ background: 'linear-gradient(to bottom, blue, white)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>N</div>
    <div className='mori_to_grid I1' style={{ background: 'linear-gradient(to bottom, blue, white)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>I</div>
    <div className='grid_to_mori C2' style={{ background: 'linear-gradient(to bottom, blue, white)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>C</div>
    <div className='mori_to_grid H2' style={{ background: 'linear-gradient(to bottom, blue, white)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>H</div>
    <div className='mori_to_grid E2' style={{ background: 'linear-gradient(to bottom, blue, white)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>E</div>
  </div>
</div>

            <div className='absolute right-0 bottom-0 md:bottom-10 flex  flex-col justify-end'>
                    <div className='fontx text-3xl'>31st Aug-3rd Sept</div>
            </div>
            
        </div>
        <div className='w-0 md:w-[20vw]'></div>
        <img src={sidebar} className='hover hidden md:block'/>
      </div>

      <a href="https://www.google.com/maps/d/u/0/viewer?mid=10kOD2TXBPY1qsMQfdF8AXlBxS0Q&hl=en_US&ll=26.19210399999995%2C91.69464100000002&z=17" className='text-white'>
          <div className='mt-9 w-[95vw] md:w-[80vw] h-auto rounded-full border-1 border white mx-auto flex justify-between relative z-1'>
            <div className='m-2 ml-7 flex'>
                <div className='h-[7vh] w-[7vh] md:w-[10vh] md:h-[10vh]'>
                <video id="videoPlayer" loop autoPlay muted>
                      <source src={globe} type="video/mp4" />
                </video>
                </div>  
                <div className='text-white my-auto ml-3'>THE 25TH EDITION <br/>26°11′14″N,  91°41′30″E</div>
            </div>
            <div className='flex'>
                <div className='text-white my-auto hidden md:block'>The Annual Techno-Management festival of Indian Institute of Technology (IIT), Guwahati. <br/> This year we bring to you the 25th Edition.</div>
                <img src={flower} className='w-[7vh] h-[7vh] mx-4 my-auto animate-spin'/></div>
          </div>

      </a>
      <div className='text-white mt-[20px] text-center md:hidden'>The Annual Techno-Management festival of Indian Institute of Technology (IIT), Guwahati. <br/> This year we bring to you the 25th Edition.</div>


      <div className='w-[80vw]  mx-auto my-10 md:my-20 md:h-[90vh] relative z-20' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div id="playPauseBtn" className={isHovering ? 'cursor': ''} style={{ top: cursorPosition.y, left: cursorPosition.x }} >
        {mouseContent}

      </div>
      
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5DvECSbgtaE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  onClick={handleVideoClick}
                ></iframe>
      </div>

      <YearScroll/>
      <Sponsors/>
      <Footer/>

      
      
    </div>
  )
}

export default Home
