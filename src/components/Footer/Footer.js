import React from 'react'
import { Link } from 'react-router-dom'
import Insta from "./images/instagram.svg"
import Youtube from "./images/youtube.svg"
import Twitter from "./images/twitter.svg"
import Medium from "./images/medium.svg"
import Linkedin from "./images/linkedin.svg"
import "./Footer.css"

function footer() {
  return (
    <div className='text-white footer rounded-t-3xl'>

      <div className='  border border-white relative'>
        <div className='pt-20 pl-20  text-3xl'>
         <div className='roslindale'> Experience one of the India's <br />Best Techno-Management Fest!<br/></div>
          <div className='bg-gradient-to-r from-blue-500 to-violet-900 py-1 px-4 mt-4 rounded-full inline-block'><Link to="/signup">Sign Up</Link></div>
        </div>
        <div className='flex justify-between w-[50vw] pl-20 mt-20'>
        <div>
          <div className='roslindale text-3xl'>Contact Us</div>
          techniche@iitg.ac.in <br/><br/>
          Lorem ipsum dolor <br/> sit amet consecterue <br/> Mattis.
          </div>
        <div className='roslindale text-3xl'>
          Connect with us<br/>
          <div className='flex w-[30vw] justify-between mt-4'>
            <a href="https://twitter.com/Techniche_IITG"><img src={Twitter} /></a>
            <a href="https://in.linkedin.com/company/techniche-iitg"><img src={Linkedin} /></a>
            <a href="https://www.instagram.com/techniche_iitguwahati/?hl=en"><img src={Insta} /></a>
            <a href="https://www.youtube.com/c/techniche"><img src={Youtube} /></a>
            <a href="https://media-techniche.medium.com/"><img src={Medium} /></a>
          </div>
        </div>

      </div>
      </div>

     
    </div>
  )
}

export default footer
