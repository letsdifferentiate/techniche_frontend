import React from 'react'
import SponsorCorner from "./images/sponsor_corner.svg"

function sponsors() {
  return (
    <div className='relative h-[90vh]'>
      <img src={SponsorCorner}/>
      <img src={SponsorCorner} className='absolute right-0 top-0 rotate-90'/>
      <img src={SponsorCorner} className='absolute right-0 bottom-0 rotate-180'/>
      <img src={SponsorCorner} className='absolute left-0 bottom-0 -rotate-90'/>
      <div className='text-3xl text-center text-white'>Our Sponsors</div>
      <div className='bg-white h-[60vh] w-[80vw] mx-auto'></div>
    </div>
  )
}

export default sponsors
