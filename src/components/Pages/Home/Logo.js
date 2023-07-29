import React, {useState,useEffect} from 'react'
import Techniche_logo from "./images/Techniche_logo.svg"


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
    <div className='fixed right-[30vh] h-[5vh] '>
      <div  style={{ transform: `translateX(${-1*scrollPosition * 0.3}px) translateY(${scrollPosition * 0.2}px) rotateX(${scrollPosition * 0.15}deg) rotateY(${scrollPosition * 0.3}deg)` }}>
        <img src={Techniche_logo} className={!scrollPosition ? 'animate-pulse': ''}/>
      </div>
        
    </div>
  )
}

export default Logo
