import React from 'react'
import Card from './components_and_images/card';
import Grid from './components_and_images/Grid';
import "./WorkshopsList.css"
import left_arrow from "./components_and_images/left.svg"
import right_arrow from "./components_and_images/right.svg"
import { Link } from 'react-router-dom'

function Workshops() {
  return (
    <div className='w-[70vw] mx-auto pt-10 my-20'>
      
        <div className='flex justify-between items-center'>
            <div>
              <Link to="/competitions/technical"><img src={left_arrow}/></Link>
            </div>
            <div className='text-white text-3xl lg:text-7xl heading '>
              <span className='flex'>WO<p className='text-3xl lg:text-7xl'>RK</p>SHOPS</span>
            </div>
            <div>
              <Link to="/events/technical"><img src={right_arrow}/></Link>
            </div>
        </div>

      <div className='flex inline-block justify-center my-5'>
        <div className='flex text-white  border border-white rounded-full' >
        <div className='border-r border-white m-2  py-1 px-8 bg-blue-700  rounded-full'>Workshops</div>
         </div>
        </div>
      
      <Grid/>

    </div>






    

  )
}

export default Workshops;