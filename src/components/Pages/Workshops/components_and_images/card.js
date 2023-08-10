import React, {useState} from 'react'
import "./card.css"
import add from "./add.svg"

//using tailwind css
function Card(props) {
   // Initial width value

   const divStyle = {
    width: '100%',
    height: '250px',
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover', // or 'contain'
    backgroundPosition: 'center',
  };

  return (
    <div className="group pb-3 relative flex flex-col m-4 bg-gradient-to-b from-gray-500 to-black rounded-2xl border border-gray-200 transition-all duration-300" style={divStyle}>
      
        <div className='card-content text-white bottom-div absolute bottom-0'>
            <h4 className='bg-black p-1 inline ml-2 rounded-full px-2 text-sm'>{props.date}</h4>
            <h1 className='text-2xl font-bold ml-2'>{props.title}</h1>
            {/* <h2 className='ml-2'>{props.info}</h2> */}
            {/* <a className="ml-2 underline invisible group-hover:visible" href={props.link}>View Details</a> */}
        </div>
       
    </div>
  )
}

export default Card;