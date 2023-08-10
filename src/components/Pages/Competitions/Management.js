import React from 'react'
import Card from './components_and_images/card';
import Grid2 from './components_and_images/Managment_Grid';
import "./CompetitionList.css"
import left_arrow from "./components_and_images/left.svg"
import right_arrow from "./components_and_images/right.svg"
import { Link } from 'react-router-dom'

//comment
function Management() {
  return (
    <div className='w-[70vw] mx-auto pt-10 my-20'>
      
        <div className='flex justify-between items-center'>
            <div>
            <Link to="/events/technical"> <img src={left_arrow}/></Link>
            </div>
            <div className='text-white text-3xl lg:text-7xl heading '>
              <span className='flex'>C<p className='text-3xl lg:text-7xl'>OM</p>PETITIONS</span>
            </div>
            <div>
             <Link to="/workshops"> <img src={right_arrow}/></Link>
            </div>
        </div>

      <div className='flex inline-block justify-center my-10'>
        <div className='flex text-white  border border-white rounded-full' >
         <Link to="/competitions/technical"> <div className='border-r border-white m-2  py-1 px-8'>Technical</div></Link>
         <Link to="/competitions/management"> <div className='border-r border-white m-2  py-1 px-8 bg-blue-700  rounded-full'>Management</div></Link>
        </div>
        </div>
      
      <Grid2/>

    </div>






    

  )
}

export default Management;