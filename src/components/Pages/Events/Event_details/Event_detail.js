import React, {useState} from 'react'
import "./Event_detail.css"
import arrow_right from "./images/arrow_right.svg"
import arrow_left from "./images/arrow_left.svg"
import Header from "../../../Header/header"

function Event_detail(props) {

  const [content, setContent] = useState("About content")

  const handleAboutClick = () => {
    setContent('About content')
  }
  const handleStructureClick = () => {
    setContent('structure content')
  }
  const handleTestimonialClick = () => {
    setContent('Testimonial content')
  }
  const handleContactClick = () => {
    setContent('Contact content')
  }



  return (
    <>
    
   <div className="event_details">

        <div className='event_change'>
            <div className='img1'><a href="#"><img src={arrow_left}/></a></div>
            <div className='title border-gradient'>{props.event_name}Techexpo</div>
            <div className='img2'><a href="#"><img src={arrow_right}/></a></div>
        </div>

        <div className='content'>
            <nav class="events-navbar">
              <ul class="events-navbar-list">
                <li class="events-navbar-item border-gradient"><a href="#" onClick={handleAboutClick}>About</a></li>
                <li class="events-navbar-item border-gradient"><a href="#" onClick={handleStructureClick}>Structure</a></li>
                <li class="events-navbar-item border-gradient"><a href="#" onClick={handleTestimonialClick}>Testimonials</a></li>
                <li class="events-navbar-item"><a href="#" onClick={handleContactClick}>Contact</a></li>
              </ul>
            </nav>
            <div className='text-parent'>
              <div className='text'>
              {content}
              Tech Expo is a platform where innovators and creators like you from all around the world can highlight their works and find
  ways to change the world. This is the place where we strive to teach the scientific aptitude and research - mindedness
  required to become a pillar in this society. Your projects will be judged and critiqued by researchers, scientists, corporate
  personalities and Nobel Laureates at IITG as well as give away prizes to the most extraordinary ones. At Tech Expo, we help you build the right mindset to make your project a real game changer.Tech Expo is a platform where innovators and creators like you from all around the world can highlight their works and find
  ways to change the world. This is the place where we strive to teach the scientific aptitude and research - mindedness
  required to become a pillar in this society. Your projects will be judged and critiqued by researchers, scientists, corporate
  personalities and Nobel Laureates at IITG as well as give away prizes to the most extraordinary ones. At Tech Expo, we help you build the right mindset to make your project a real game changer.
  Tech Expo is a platform where innovators and creators like you from all around the world can highlight their works and find
  ways to change the world. This is the place where we strive to teach the scientific aptitude and research - mindedness
  required to become a pillar in this society. Your projects will be judged and critiqued by researchers, scientists, corporate
  personalities and Nobel Laureates at IITG as well as give away prizes to the most extraordinary ones. At Tech Expo, we help you build the right mindset to make your project a real game changer.


              </div>
            </div>
            <button className='button'>Register</button>
        </div>

   </div>
   </>
  )
}

export default Event_detail