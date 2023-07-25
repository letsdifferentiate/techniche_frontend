import React from 'react'
import ReactPlayer from 'react-player'
import sidebar from "./images/sidebar.svg"
import Techniche from "./images/Techniche.svg"
import Techniche_logo from "./images/Techniche_logo.svg"
import Sponsors from './Sponsors'
import Eye from "./images/eye.svg"
import Star from "./images/star.svg"
import Full_group from "./images/full_group.svg"
import YearScroll from './YearScroll'

import "./Home.css"

function Home() {
  return (
    <div>
      <div className='text-white mt-40 w-[80vw] h-[50vh] mx-auto relative flex justify-between'>
        <img src={sidebar} className='h-inherit'/>
      
        <div className='h-inherit w-[40%] relative my-auto'>
            <div>SINCE 1999</div>
          
            <img src={Techniche} />
            <div className='absolute right-0 flex justify-end flex-col'>
             
                    <img src={Eye} />
                    <div className='fontx'>31st Aug-3rd Sept</div>
            
            </div>
            
        </div>
        <img src={Techniche_logo} className='h-[60%] my-auto'/>
        <img src={sidebar} className='h-inherit'/>
      </div>
      <img src={Full_group} className='mt-40 mx-auto w-[80vw]'/>
      <div className='w-[80vw]  mx-auto my-10 h-[80vh]'>
        <ReactPlayer url="https://www.youtube.com/watch?v=rMe52W-dRbQ" width="100%" height="100%" />
      </div>

      <YearScroll/>
      <Sponsors/>

      <div className='h-[30vh]'></div>
      
    </div>
  )
}

export default Home
