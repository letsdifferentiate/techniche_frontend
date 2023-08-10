import React from 'react'
import Card from './components_and_images/card';
import Grid from './components_and_images/Grid';
import "./EventList.css"
import left_arrow from "./components_and_images/left.svg"
import right_arrow from "./components_and_images/right.svg"
import { Link } from 'react-router-dom'
import Grid1 from './components_and_images/Initiative_Grid';

function Initiatives() {
  return (
    <div className='w-[70vw] mx-auto pt-10 my-20'>
      
        <div className='flex justify-between items-center'>
            <div>
            <Link to="/workshops"> <img src={left_arrow}/></Link>
            </div>
            <div className='text-white text-3xl lg:text-7xl heading '>
              <span className='flex'>E<p className='text-3xl lg:text-7xl'>V</p>ENTS</span>
            </div>
            <div>
              <Link to="/competitions/technical"><img src={right_arrow}/></Link>
            </div>
        </div>

        <div className='flex inline-block justify-center my-10 '>
        <div className='flex text-white  border border-white rounded-full ' >
         <Link to="/events/technical"> <div className='  text-sm border-r border-white m-2  md:px-0 lg:py-2  px-4 lg:px-8   w-20 md:w-24 lg:w-36'>Technical</div></Link>
         <Link to="/events/management"> <div className='text-sm border-r border-white m-2 md:px-0 lg:py-2 px-4 lg:px-8  w-30 md:w-34 lg:w-36'>Management</div></Link>
         <Link to="/events/initiatives"> <div className='bg-blue-700  rounded-full text-sm  m-2  md:px-0 lg:py-2 px-4 lg:px-8 w-20 md:w-24 lg:w-36'>Initiatives</div></Link>
         <Link to="/events/pronites"> <div className='border-l border-white text-sm m-2  md:px-0 lg:py-2 px-4 lg:px-8 w-20 md:w-24 lg:w-36'>Pronites</div></Link>
        </div>
        </div>
      
      <Grid1/>

    </div>






    

  )
}

export default Initiatives;