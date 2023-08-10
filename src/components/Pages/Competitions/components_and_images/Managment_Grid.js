import React from 'react'
import Card from './card';
import "./Grid.css"
import skySprint from "./robotics/126.png";
import skySprint1 from "./robotics/123.png";
import skySprint2 from "./robotics/124.png"
import skySprint3 from "./robotics/125.png"
import skySprint4 from "./robotics/127.png"
import skySprint8 from "./robotics/128.png"

function Grid2() {
  return (
    <div>
          <hr />

            <div className='flex justify-between text-white items-center'>
              <div className='event_name text-2xl'>Robotics</div>
              <div className='text-sm space-y-1'>
                
              </div>
            </div>

            <div className='flex justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <div className='w mx-2'>
                  <Card image={skySprint1} dates="31 Aug - 2 Sep" title="Escalade" info="Climb to Great Heights in the Ultimate Staircase Race."/>
                </div>
                <div className='w mx-2'>
                  <Card image={skySprint2}  dates=" 1-3 Sept " title="Aquawars" info="Mechs Meet Water, Unleashes Robotic Onslaught" />
                </div>
                <div className='w mx-2'>
                  <Card image={skySprint}  dates="2 Sep " title="Micromouse" info="Pixel-Sized Pathfinders" />
                </div>
                <div className='w mx-2'>
                  <Card image={skySprint8}  dates="31 Aug & 1 Sep" title="SkySprint" info="Where Machines Soar and Strategies Clash" />
                </div>
                     
            </div>
   

            <hr />
            <div className='flex justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 '>
                <div className='w mx-2'>
                  <Card image={skySprint3} dates="31 Aug - 1 Sep"  title="Robowars" info="Rise of the Machines - Battle for Supremacy"/>
                </div>
                <div className='w mx-2'>
                  <Card image={skySprint4}  dates="2 & 3 Sep" title="Track titans" info="Where Precision Meets Velocity in Ultimate RC battle" />
                </div>
                
                
                     
            </div>
   

            <hr />


          <div className='flex justify-between text-white items-center'>
            <div className='event_name text-2xl'>Lecture Series</div>
            <div className='text-sm space-y-1'>
              <p className=' space-y-4'>
              some detail hello <br/>
              some more detail <br/>
              hello worldd
              </p>
            </div>
          </div>


          <div className='flex justify-between'>
                <div className='w-full'>

                <Card image={skySprint} dates="31 Aug - 2 Sep" title="Escalade" info="Climb to Great Heights in the Ultimate Staircase Race."/>
                </div>
          </div>


            <hr />
            <div className='flex justify-between text-white items-center'>
            <div className='event_name text-2xl'>Lecture Series</div>
            <div className='text-sm space-y-1'>
              <p className=' space-y-4'>
              some detail hello <br/>
              some more detail <br/>
              hello worldd
              </p>
            </div>
          </div>


          <div className='flex justify-between'>
                <div className='w-full'>

                <Card image={skySprint} dates="31 Aug - 2 Sep"  title="Escalade" info="Climb to Great Heights in the Ultimate Staircase Race."/>
                </div>
          </div>


            <hr />

           





    </div>
    

  )
}

export default Grid2;