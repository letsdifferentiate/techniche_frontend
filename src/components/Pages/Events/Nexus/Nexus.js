import React, { useState, useRef, useEffect } from 'react'
import "./NexusDetail.css"
// import "./EventForm.css"
import arrow_right from "./images/arrow_right.svg"
import arrow_left from "./images/arrow_left.svg"
import Header from "../../../Header/header"
import EventForm from './EventForm'
import image_1 from "./images/Screenshot 2023-08-04 110830.png"
import star from "./images/Star.png"


function Nexus() {



  const divRefs = {
    div1: useRef(null),
    div2: useRef(null),
    div3: useRef(null),
    div4: useRef(null),
    // Add more refs for each child div as needed
  };
  const [activeContent, setActiveContent] = useState('div1');
  const scrollToDiv = (refName) => {
    if (divRefs[refName] && divRefs[refName].current) {
      divRefs[refName].current.scrollIntoView({ behavior: 'smooth' });
      setActiveContent(refName);
      
    }
  };


  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveContent(entry.target.id);
      }
    });
  };



  const handleRegisterClick = () => {
    const contentElement = document.getElementById('content')
    contentElement.classList.add('hidden')
    const formElement = document.getElementById('form')
    formElement.classList.remove('hidden')
  }



  return (
    <>

      <div className=" text-white text-sm md:text-xl flex justify-center" id="content">
        <div>
          <div className='flex justify-between mt-[10vh] md:mt-[7vw]'>
            <div className='img1'><a href="#"><img src={arrow_left}/></a></div>
            <div className='title border-gradient'>
            <div className='flex'><div className='gridular'>N</div><div className='pp_mori'><div className='-mt-2 sm:mt-0'>EX</div></div><div className='gridular'>US</div></div>
            
            </div>
            <div className='img2'><a href="#"><img src={arrow_right} /></a></div>
          </div>

          <div className='mx-auto content w-[90vw] md:w-[80vw] h-[68vh] md:h-[60vh] '>
            <nav class="events-navbar">
              <ul class="events-navbar-list">
                <li id="div1" className={`events-navbar-item border-gradient ${activeContent === 'div1' ? 'active' : ''}`}>
                  <button onClick={() => scrollToDiv('div1')}>About</button>
                </li>
                <li id="div2" className={`events-navbar-item border-gradient ${activeContent === 'div2' ? 'active' : ''}`}>
                  <button onClick={() => scrollToDiv('div2')}>Structure</button>
                </li>
                <li id="div3" className={`events-navbar-item border-gradient ${activeContent === 'div3' ? 'active' : ''}`}>
                  <button onClick={() => scrollToDiv('div3')}>Past Speakers</button>
                </li>
                <li id="div4" className={`events-navbar-item ${activeContent === 'div4' ? 'active' : ''}`}>
                  <button onClick={() => scrollToDiv('div4')}>Contact</button>
                </li>
              </ul>
            </nav>
            <div className='text-parent'>
              <div className='text md:w-[60vw] h-[40vh] text-sm '>
                <div ref={divRefs.div1} >
                  Techniche presents 'NEXUS: the Corpo-Management conference,' your first step into corporate life. The conference spans from 1st to 3rd September 2023 and is designed to bring together professionals and enthusiasts from entrepreneurship, management & technology to exchange ideas and knowledge, network with like-minded people, and get expert insights.

                  <div className="text-xl md:text-3xl  font-extrabold mt-[4vh] md:mt-[1vw] flex   mb-[0.5vh]"><img src={star} className='w-6 h-6 mt-1 mr-2'/>Why Nexus?</div>
                  The Conference aims to provide a unique platform, connecting entrepreneurship, business, and management enthusiasts to industrial big-wigs and visionaries.
                  <br />
                  The Conference boasts itself for providing students with the opportunity to broaden their avenues and learn about the business dynamics of the industry growing at a blisteringly fast pace. The profusion of knowledge and experience shared by speakers, might just be the kickstart you need.
                  
                  <div className="text-xl md:text-3xl  font-extrabold mt-[4vh] md:mt-[1vw] flex   mb-[0.5vh]"><img src={star} className='w-6 h-6 mt-1 mr-2'/>What do participants gain?</div>
                  <ol className='list-disc text-white'>
                    <li> -  An opportunity to explore entrepreneurship, management, consulting, finance, and industry.</li>
                    <li> -  A chance to interact with top executives about their field and how they can get into it.</li>
                    <li> -  A space to grow their network with like-minded people.</li>
                    <li> -  A platform to polish their soft skills, confidence, and personality.</li>
                    <li> -  Also, you get hands-on experience with problems faced in the corporate world and an overview of blooming new dimensions.</li>

                  </ol>
                </div>
                <div ref={divRefs.div2} >
                  
                  <div className="text-xl md:text-3xl  font-extrabold mt-[4vh] md:mt-[2vw] flex   mb-[0.5vh]"><img src={star} className='w-6 h-6 mt-1 mr-2'/>THIS YEAR'S EVENTS LINEUP</div>
                  <div className='py-2'></div>
                  - Keynotes: A comprehensive lecture delivered by accomplished industry leaders followed by a brief Q&A session at the end, giving you a chance to learn from their lives and gain valuable insights.
                  <div />
                  <div className='py-2'></div>
                  - Panel Discussion: An engaging panel discussion on the topic “Adapting to Change: Navigating Global Dynamics and Job Market Challenges”, conducted by panelists from various industries who will share valuable insights and strategies to navigate these evolving landscapes successfully.
                  <div />
                  <div className='py-2'></div>
                  - Workshop: “Passion is a potent force that can drive us towards greatness." At the workshop on “Align or Incline: Harmonizing Passion and Career", participants will get to learn about how they can manage their passion in a healthy way and align and incline it with their career or studies.
                  <div />
                  <div className='py-2'></div>
                  -  Interactive Session: There's no better way to test your skills than a tight competition. Unleash your creativity and let your imagination go wild with our exciting interactive session.
                  <div /> <div className='py-2'></div>
                  - Networking: A chance to connect with guest speakers and panelists through Q&A. This would also be an excellent opportunity for you to connect with a diverse audience from across the nation.
                  <div />
                  <div className='py-2'></div>
                  - Speed Mentoring: A series of short focused conversations with the industry professionals of your career interests. Participants can have direct interaction with the speakers and panelists during an allotted time frame.
                  <div />
                  <div className="text-xl md:text-3xl  font-extrabold mt-[4vh] md:mt-[2vw] flex   mb-[0.5vh]"><img src={star} className='w-6 h-6 mt-1 mr-2'/>NEXUS: THRIVE AND NETWORK</div>
                  Thrive and Network Conference was organized from 15 July to 16 July 2023. This pre-event set the stage for Nexus'23 and offered a taste of the exciting experiences to come. The lineup was as follows:
                  <div className='py-2'></div>
                  - Keynote: The conference kickstarted with an enlightening keynote by the esteemed Mr. Harish Madaan, where he shared his expertise and valuable insights on "India Growth Story." The keynote was followed by a Q&A session.
                  <div />
                  <div className='py-2'></div>
                  - Career Crossroads: Exploring Diverse Paths: The conference culminated with Career Crossroads, a session designed to provide valuable insights and guidance for navigating career challenges. This engaging and enlightening session aimed to facilitate one-on-one interactions between participants and industry experts.

                  <div />
                </div>
                <div ref={divRefs.div3} >
                  <div class="flex flex-wrap justify-center mb-[5vh] md:mb-[20vh]">
                    <div className='flex flex-col mr-3 text-center '>
                      <img class="w-1/3 lg:w-auto" src={image_1} alt="Image 1" />

                      <div className='text-lg'> Mr.Amitava Saha</div>
                      <br />Founder and CEO, <br /> XpressBees

                    </div>
                    <div className='flex flex-col mr-3 text-center '>
                      <img class="w-1/3 lg:w-auto" src={image_1} alt="Image 1" />

                      <div className='text-lg'> Mr.Amitava Saha</div>
                      <br />Founder and CEO, <br /> XpressBees

                    </div><div className='flex flex-col mr-3 text-center '>
                      <img class="w-1/3 lg:w-auto" src={image_1} alt="Image 1" />

                      <div className='text-lg'> Mr.Amitava Saha</div>
                      <br />Founder and CEO, <br /> XpressBees

                    </div><div className='flex flex-col mr-3 text-center '>
                      <img class="w-1/3 lg:w-auto" src={image_1} alt="Image 1" />

                      <div className='text-lg'> Mr.Amitava Saha</div>
                      <br />Founder and CEO, <br /> XpressBees

                    </div><div className='flex flex-col mr-3 text-center'>
                      <img class="w-1/3 lg:w-auto" src={image_1} alt="Image 1" />

                      <div className='text-lg'> Mr.Amitava Saha</div>
                      <br />Founder and CEO, <br /> XpressBees

                    </div><div className='flex flex-col mr-3 text-center'>
                      <img class="w-1/3 lg:w-auto" src={image_1} alt="Image 1" />

                      <div className='text-lg'> Mr.Amitava Saha</div>
                      <br />Founder and CEO, <br /> XpressBees

                    </div>
                  </div>
                </div>
                <div ref={divRefs.div4}>
                  <div className=' md:flex justify-between text-sm md:text-xl'>
                    <div className='text-center mb-[4vh]'>
                      Rishi Gupta<br />
                      +91 584657435
                    </div>
                    <div className='text-center mb-[4vh]'>
                      Rishi Gupta<br />
                      +91 584657435
                    </div>
                    <div className='text-center mb-[4vh]'>
                      Rishi Gupta<br />
                      +91 584657435
                    </div>
                    <div className='text-center mb-[4vh]'>
                      Rishi Gupta<br />
                      +91 584657435
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <button className='button' onClick={handleRegisterClick}>Register</button>
          </div>
        </div>
      </div>
      <div id="form" className='text-white hidden'><EventForm /></div>
    </>
  )
}

export default Nexus