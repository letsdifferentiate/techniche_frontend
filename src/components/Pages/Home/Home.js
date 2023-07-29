import React, {useEffect} from 'react'
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


function Home() {

useEffect( () =>
  {
  const videoPlayer = document.getElementById('videoPlayer');

// Set the desired playback speed (e.g., 1.5 for 1.5x speed)
const playbackSpeed = 5;

// Set the playback speed when the video is ready to play
videoPlayer.oncanplay = () => {
  videoPlayer.playbackRate = playbackSpeed;
};})

  return (
    <div>
    <Logo />


      <div className='text-white mt-40 w-[90vw] h-[50vh] mx-auto relative flex justify-between items-center'>
       <img src={sidebar} />
        <div className=' w-[45vw] relative my-auto h-[50vh] flex flex-col items-center justify-center'>
           <div className='absolute top-0 left-0 text-lg'>SINCE 1999</div>
           <div></div>
           <img src={Ellipse} className='absolute w-[90%]' />
           
          <div className='relative'>
              <div className='text-8xl text-white flex'>
                  <div className='mori_to_grid text-blue-800 T1'>T</div>
                  <div className='grid_to_mori text-violet-800 E1'>E</div>
                  <div className='mori_to_grid text-blue-500 C1'>C</div>
                  <div className='grid_to_mori  H1'>H</div>
                  <div className='mori_to_grid N1'>N</div>
                  <div className='mori_to_grid I1'>I</div>
                  <div className='grid_to_mori C2'>C</div>
                  <div className='mori_to_grid H2'>H</div>
                  <div className='mori_to_grid E2'>E</div>
              </div>
            </div>
            <div className='absolute right-0 bottom-10 flex  flex-col justify-end'>
                    <img src={Eye} className='h-[60px] hover:animate-bounce '/>
                    <div className='fontx text-3xl'>31st Aug-3rd Sept</div>
            </div>
            
        </div>
        <div className='w-[20vw] text-black'>Easter eggs?!</div>
        <img src={sidebar} />
    
      </div>

      <a href="https://www.google.com/maps/d/u/0/viewer?mid=10kOD2TXBPY1qsMQfdF8AXlBxS0Q&hl=en_US&ll=26.19210399999995%2C91.69464100000002&z=17" className='text-white'>
          <div className='mt-9 w-[80vw] h-auto rounded-full border-1 border white mx-auto flex justify-between relative z-1'>
            <div className='m-2 ml-7 flex'>
                <div className='w-[10vh] h-[10vh]'>
                <video id="videoPlayer" loop autoPlay muted>
                      <source src={globe} type="video/mp4" />
                </video>
                </div>  
                <div className='text-white my-auto ml-3'>THE 25TH EDITION <br/>26°11′14″N,  91°41′30″E</div>
            </div>
            <div className='flex'>
                <div className='text-white my-auto'>The Annual Techno-Management festival of Indian Institute of Technology (IIT), Guwahati. <br/> This year we bring to you the 25th Edition.</div>
                <img src={flower} className='w-[8vh] h-[8vh] mx-4 my-auto animate-spin'/></div>
          </div>
      </a>


      <div className='w-[80vw]  mx-auto my-20 h-[90vh] relative z-20'>
        <ReactPlayer url="https://www.youube.com/watch?v=rMe52W-dRbQ" playing={true} width="100%" height="100%" />
        
      </div>

      <YearScroll/>
      <Sponsors/>

      <div className='h-[30vh]'></div>
      
    </div>
  )
}

export default Home
