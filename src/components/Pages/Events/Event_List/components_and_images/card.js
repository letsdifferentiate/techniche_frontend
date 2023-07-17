import React, {useState} from 'react'
import "./card.css"
import add from "./add.svg"
//using tailwind css
function Card(props) {
   // Initial width value

  return (
    <div className="group pb-3 relative flex flex-col m-4 bg-gradient-to-b from-gray-500 to-black rounded-2xl border border-gray-200 transition-all duration-300" style={{ width: `${props.width}vw` }}>
        <div className='h-[15vw]'><img src={add} className='invisible group-hover:visible mx-auto mt-4'/></div>
        <div className='card-content text-white bottom-div'>
            <h4 className='bg-black p-1 inline ml-2 rounded-full px-2 text-sm'>Competition</h4>
            <h1 className='text-2xl font-bold ml-2'>Aquawars</h1>
            <h2 className='ml-2'>A competition lorem</h2>
            <a className="ml-2 underline invisible group-hover:visible" href="#">View Details</a>
        </div>
       
    </div>
  )
}

export default Card;