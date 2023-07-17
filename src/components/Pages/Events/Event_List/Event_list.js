import React from 'react'
import Card from './components_and_images/card';
import Grid from './components_and_images/Grid';
import "./Event_list.css"
import left_arrow from "./components_and_images/left.svg"
import right_arrow from "./components_and_images/right.svg"


function Event_list() {
  return (
    <div className='w-[70vw] mx-auto pt-10 '>
      
        <div className='flex justify-between items-center'>
            <div>
              <img src={left_arrow}/>
            </div>
            <div className='text-white text-7xl heading '>
              <span className='flex'>E<p className='text-7xl'>V</p>ENTS</span>
            </div>
            <div>
              <img src={right_arrow}/>
            </div>
        </div>

      <div className='flex inline-block justify-center'>
        <div className='flex text-white  border border-white rounded-full' >
          <div className='border-r border-white m-2  py-1 px-8 bg-blue-700  rounded-full'>Technical</div>
          <div className='border-r border-white m-2  py-1 px-8'>Management</div>
          <div className='border-r border-white m-2  py-1 px-8'>Initiatives</div>
          <div className='m-2 py-1 px-8'>Pronites</div>
        </div>
        </div>
      
      <Grid/>

    </div>






    

  )
}

export default Event_list;