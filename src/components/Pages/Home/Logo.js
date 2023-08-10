import React, {useState,useEffect} from 'react'
import Techniche_logo from "./images/Techniche_logo.svg"
import star from "./images/star.svg"
import "./Logo.css"

function Logo() {

  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position when the user scrolls
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    // Add event listener to track scroll position
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <>
    <div className='fixed right-[23vh] h-[5vh]'>
      <div  style={{ transform: `translateX(${-1*scrollPosition * 0.3}px) translateY(${scrollPosition * 0.2}px) rotateX(${scrollPosition * 0.15}deg) rotateY(${scrollPosition * 0.3}deg)` }}>
      <img src={Techniche_logo} className={`logo ${!scrollPosition ? 'animate-pulse' : ''}`} />

      </div>

        
    </div>
    <img src={star} className='fixed left-[50vh] top-[50vh]  animate-ping  ' style={{ height: '15px' }} />
    <img src={star} className='fixed left-[50vh] top-[20vh]  animate-ping  ' style={{ height: '15px' }} />
    <img src={star} className='fixed left-[30vh] top-[50vh]  animate-pulse ' style={{ height: '15px' }} />
    <img src={star} className='fixed left-[50vh] top-[100vh]  animate-ping  ' style={{ height: '15px' }} />
    <img src={star} className='fixed left-[10vh] top-[50vh]  animate-pulse  ' style={{ height: '15px' }} />
    <img src={star} className='fixed right-[20vh] top-[10vh]  animate-pulse  ' style={{ height: '15px' }} />
    <img src={star} className='fixed right-[30vh] top-[20vh]  animate-ping  ' style={{ height: '15px' }} />
    <img src={star} className='fixed right-[40vh] top-[30vh]  animate-pulse  ' style={{ height: '15px' }} />
    <img src={star} className='fixed right-[50vh] top-[40vh]  animate-pulse  ' style={{ height: '15px' }} />
    <img src={star} className='fixed right-[70vh] top-[50vh]  animate-ping  ' style={{ height: '15px' }} />
    <img src={star} className='fixed right-[60vh] top-[70vh]  animate-pulse  ' style={{ height: '15px' }} />
    <img src={star} className='fixed right-[60vh] top-[70vh]  animate-spin  ' style={{ height: '25px' }} />
    <img src={star} className='fixed right-[70vh] top-[50vh]  animate-ping  ' style={{ height: '15px' }} />
    <img src={star} className='fixed right-[60vh] top-[70vh]  animate-pulse  ' style={{ height: '15px' }} />
    <img src={star} className='fixed left-[60vh] bottom-[70vh]  animate-pulse  ' style={{ height: '25px' }} />
    <img src={star} className='fixed left-[70vh] bottom-[50vh]  animate-ping  ' style={{ height: '15px' }} />
    <img src={star} className='fixed left-[60vh] bottom-[70vh]  animate-pulse  ' style={{ height: '15px' }} />
    <img src={star} className='fixed left-[60vh] bottom-[70vh]  animate-pulse  ' style={{ height: '15px' }} />
    <img src={star} className='fixed left-[70vh] bottom-[50vh]  animate-ping  ' style={{ height: '15px' }} />
    <img src={star} className='fixed left-[60vh] bottom-[70vh]  animate-pulse  ' style={{ height: '15px' }} />
    <img src={star} className='fixed left-[60vh] bottom-[70vh]  animate-pulse  ' style={{ height: '15px' }} />
    </>
  )
}

export default Logo
