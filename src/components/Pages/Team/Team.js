import React from 'react'
import Team_card from './Team_card';
import star_small from "./images/Star_small.svg"
import star_big from "./images/Star_big.svg"
import plus from "./images/plus.svg"
import horizontal_plus from "./images/horizontal_plus.svg"

import "./Team.css"
//hello
function Team() {
  return (

    <div className='text-white flex mt-9'>


        <div className='fixed top-[50vh] left-[10vw]'>
            <div className='relative'>
                <img src={star_big} className='absolute -left-20'/>
                <img src={star_small} className='absolute bottom-5 right-9'/>
                <img src={plus} className='fixed -bottom-3 left-1/4'/>
                <img src={horizontal_plus} className='fixed top-[45vh] left-[8vw]'/>

                <div className='text-6xl '> 
                    M<span className='Gridular'>E</span>ET <br/>
                    <span className='Gridular'>O</span>UR <br />
                    TEA<span className='Gridular'>M</span>
                </div>
                <div>them along with so many others,<br/> made this event possible.</div>
            </div>
        </div>
        


        <div className='absolute right-[20vw] top-[10vh] '>
                <img src={plus} className='fixed right-40 top-1/3'/>
            <div className='w-[50vw] mb-6' >
                <div className='flex justify-between'>
                    <Team_card/>
                    <div className='m-9'><Team_card/></div>
                    <Team_card/>
                </div>
            </div>
            <div className='w-[50vw] mb-6' >
                <div className='flex justify-between'>
                    <Team_card/>
                    <div className='m-9'><Team_card/></div>
                    <Team_card/>
                </div>
            </div>
            <div className='w-[50vw] mb-6' >
                <div className='flex justify-between'>
                    <Team_card/>
                    <div className='m-9'><Team_card/></div>
                    <Team_card/>
                </div>
            </div>
            <Team_card/>
            
        </div>



    </div>
  )
}

export default Team;