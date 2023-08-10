import React from 'react'
import Card from './card';
import "./Grid.css"
import { Link } from 'react-router-dom'
import Card2 from './okok.png';

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
            <div className='flex justify-between grid grid-cols-1 '>
                <div className='w'>
                  <Card  image={Card2} date="2 - 3 Sep" title="Blockchain Technology" info=""/>
                </div>
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
                          
            </div>
            <div className='flex justify-between grid grid-cols-1 '>
                <div className='w'>
                  <Card image={Card2} date="2 - 3 Sep" title="Blockchain Technology" info="" />
                </div>
                          
            </div>
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
            <div className='flex justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                <div className='w  mx-3'>
                  <Card  image={Card2} date="2 - 3 Sep" title="Blockchain Technology" info=""/>
                </div>
                <div className='w mx-3'>
                  <Card  image={Card2} date="2 - 3 Sep" title="Blockchain Technology" info=""/>
                </div>
                <div className='w mx-3'>
                  <Card  image={Card2} date="2 - 3 Sep" title="Blockchain Technology" info=""/>
                </div>
                <div className='w mx-3'>
                  <Card  image={Card2} date="2 - 3 Sep" title="Blockchain Technology" info="" />
                </div>          
            </div>
   

            <hr />

          



    </div>
    

  )
}

export default Grid;