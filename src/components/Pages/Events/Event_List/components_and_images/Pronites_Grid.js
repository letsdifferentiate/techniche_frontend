import React from 'react'
import Card from './card';
import "./Grid.css";
import Card2 from './okok.png';

function Grid3() {
  return (
    <div>
          <hr />

            <div className='flex justify-between text-white items-center'>
              <div className='event_name text-2xl'>After The Sunset</div>
              <div className='text-sm space-y-1'>
                <p className=' space-y-4'>
                
                </p>
              </div>
            </div>

            <div className='flex justify-between grid grid-cols-1  '>
                <div className='w'>
                  <Card image={Card2} date="3 Sep" title="Coming Soon" info="" />
                </div>
                
                         
            </div>
            <hr />
            
            

          

    </div>
    

  )
}

export default Grid3;