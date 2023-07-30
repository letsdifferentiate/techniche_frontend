import React from 'react'
import Card from './components_and_images/card';
import Grid from './components_and_images/Grid';
import "./EventList.css"
import left_arrow from "./components_and_images/left.svg"
import right_arrow from "./components_and_images/right.svg"
import { Link } from 'react-router-dom'

function Management() {
  return (
    <div className='w-[70vw] mx-auto pt-10 my-20'>
      
        <div className='flex justify-between items-center'>
            <div>
            <Link to="/workshops"> <img src={left_arrow}/></Link>
            </div>
            <div className='text-white text-7xl heading '>
              <span className='flex'>E<p className='text-7xl'>V</p>ENTS</span>
            </div>
            <div>
              <Link to="/competitions/technical"><img src={right_arrow}/></Link>
            </div>
        </div>

      <div className='flex inline-block justify-center my-10'>
        <div className='flex text-white  border border-white rounded-full' >
         <Link to="/events/technical"> <div className='border-r border-white m-2  py-1 px-8 '>Technical</div></Link>
         <Link to="/events/management"> <div className='border-x border-white m-2  py-1 px-8 bg-blue-700  rounded-full'>Management</div></Link>
         <Link to="/events/initiatives"> <div className='border-x border-white m-2  py-1 px-8 '>Initiatives</div></Link>
         <Link to="/events/pronites"> <div className='m-2 py-1 px-8'>Pronites</div></Link>
        </div>
        </div>
      
      <Grid/>

    </div>






    

  )
}

export default Management;