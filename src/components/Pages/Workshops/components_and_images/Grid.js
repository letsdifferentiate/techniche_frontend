import React from 'react'
import Card from './card';
import Brain from './img/brain.png';
import Card2 from './img/okok.png';
import Card3 from './img/7878.png';
import Card4 from './img/AI.png';
import { Link } from 'react-router-dom'

import "./Grid.css"

function Grid() {
  return (
    <div>
          <hr />

            <div className='flex justify-between text-white items-center'>
              <div className='event_name text-2xl'>Lecture Series</div>
              <div className='text-sm space-y-1'>
                <p className=' space-y-4'>
                
                </p>
              </div>
            </div>

            <div className='flex justify-between mr-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                <Link to="/"><div className='w mx-3'>
                <Card image={Brain} date="31 Aug - 3 Sep" title=" Artificial Intelligence" info=""/>
                </div>
                    </Link>
               <Link to="/"> <div className='w mx-3'>
                <Card image={Card3} date="31 Aug - 1 Sep" title="Cyber Security & Ethical Hacking" info=""/>
                </div>
                </Link>
                <Link  to="/"><div className='w mx-3'>
                <Card image={Card2} date="2 - 3 Sep" title="Blockchain Technology" info=""/>
                </div>

</Link>               <Link to="/"> <div className='w mx-3'>
                <Card image={Card4} date="31 Aug - 3 Sep" title="Internet of Thingswith AWS" info=""/>
                </div>
                </Link>          
            </div>
   

            <hr />

          




    </div>
    

  )
}

export default Grid;