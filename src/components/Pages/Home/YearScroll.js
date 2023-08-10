import React, {useState, useEffect} from 'react';
import "./YearScroll.css"
import flower from "./images/flower.png"


const YearScroll = () => {

  const [yearInBetween, setYearInBetween] = useState(false);

  useEffect( () => {

    const changeDivStyle = () => {
      const myDivs = document.querySelectorAll(".year")
      const rangeStart = 200;
      const rangeEnd = 450;

      const divArray = Array.from(myDivs)

      divArray.forEach((div) => {
        var distanceFromTop = div.getBoundingClientRect().top;
        console.log(distanceFromTop)
        if (distanceFromTop >= rangeStart && distanceFromTop <= rangeEnd) {
          
          div.classList.add('changeColor');
        } else {
          div.classList.remove('changeColor');
        }
      });
    };

  window.addEventListener('scroll', changeDivStyle);

  return () => {
    window.removeEventListener('scroll', changeDivStyle);
  };

  },[]);



  return (
    <div>
        

                <div class="yearTimeline">   
                
                    <div class="twenty ">20</div>
                    <div class="try">
                        
                       <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>00</div><div className='text-white'>jsdfl</div><img src={flower}/></div>
                       <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>01</div><img src={flower}/><div className='text-white'>jsdfl</div></div>
                       <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>02</div><div className='text-white'>jsdfl</div><img src={flower}/></div>
                       <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>03</div><img src={flower}/><div className='text-white'>jsdfl</div></div>
                       <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>04</div><div className='text-white'>jsdfl</div><img src={flower}/></div>
                    </div>
                </div>
               
    </div>
  )
}

export default YearScroll
