import React from 'react'
import cartoon from './images/cartoon.jpg'


function Team_card() {
  return (
    <div className='w-[15vw] h-[20vw]'>
        <div className='image'>
            <img src={cartoon}/>
        </div>
        <div className='bg-white rounded-xl text-black pl-2'>
            <div className='text-xl'>Captain America</div>
            <div className='text-md'>Avenger</div>
        </div>
    </div>
  )
}

export default Team_card