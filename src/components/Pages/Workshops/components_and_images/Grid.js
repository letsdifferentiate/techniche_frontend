import React from 'react'
import Card from './card';
import "./Grid.css"

function Grid() {
  return (
    <div>
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
                <div className='w-1/4'>
                  <Card />
                </div>
                <div className='w-1/4'>
                  <Card />
                </div>
                <div className='w-1/4'>
                  <Card />
                </div>
                <div className='w-1/4'>
                  <Card />
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

                <Card/>
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
            <div className='w-1/2'>
              <Card />
            </div>
            <div className='w-1/2'>
              <Card />
            </div>
          </div>





    </div>
    

  )
}

export default Grid;