import React, {useState, useEffect} from 'react';
import "./YearScroll.css"
import flower from "./images/flower.png"
import Nasa from "./images/nasa.jpg"
import Escalade from "./images/escalade.jpg"
import Ghm from "./images/ghm.jpg"
import Pragati from "./images/pragati.jpg"
import Technotholon  from "./images/technothlon.jpg"
import Two from "./images/2000.jpg"

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
                    <div class="try text-white">
                        
                       <div className='flex items-center justify-between w-[60vw]'> 
                          <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>00</div>
                          <div>
                          <ul style={{ listStyleType: 'square' }}>
                                                                                                        <li>Added Managt domain; First Techno-Management Fest of India.</li>
                                                                                                        <li>Technothlon started.</li>
                                                                                                      </ul>
                                                                                                      </div><div><img src={Nasa} className='h-[10vw] w-[10vw]'/></div>
                        </div>
                       <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>01</div><img src={Escalade}  className='h-[10vw] w-[10vw]'/><div><ul style={{ listStyleType: 'square' }}>
                                                                                                        <li>Guwahati Half Marathon started.</li>
                                                                                                      </ul></div></div>
                       <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>02</div><div className='text-white'><ul style={{ listStyleType: 'square' }}>
                                                                                                        <li>Technothlon reached 200 cities across India and witnessed highest ever participation.</li>
                                                                                                        <li>'Wake Up and Vote' campaign was launched in the wake of 2014 General elections, reaching over 2 lakh people.</li>
                                                                                                      </ul></div><img src={Ghm} className='h-[10vw]'/></div>
                       <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>03</div><img src={flower}/><div className='text-white'><ul style={{ listStyleType: 'square' }}>
                                                                                                        <li>Technothlon went international.</li>
                                                                                                      </ul></div></div>
                       <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>04</div><div className='text-white'><ul style={{ listStyleType: 'square' }}>
                                                                                                        <li>'Pragati' initiative was pioneered to adopt neighbouring village.</li>
                                                                                                      </ul></div><img src={flower}/></div>
                                                                                                      <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>09</div><img src={flower}/><div className='text-white'>
                                                                                                      <ul style={{ listStyleType: 'square' }}>
                                                                                                        <li>Guwahati Half Marathon started.</li>
                                                                                                      </ul>
                                                                                                      </div></div>

                                                                                                      <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>10</div><div className='text-white'>
                                                                                                      <ul style={{ listStyleType: 'square' }}>
                                                                                                        <li>Technothlon went international.</li>
                                                                                                      </ul>
                                                                                                      </div><img src={flower}/></div>
                                                                                                      <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>14</div><img src={flower}/><div className='text-white'>
                                                                                                      <ul style={{ listStyleType: 'square' }}>
                                                                                                        <li>Technothlon reached 200 cities across India and witnessed highest ever participation.</li>
                                                                                                        <li>'Wake Up and Vote' campaign was launched in the wake of 2014 General elections, reaching over 2 lakh people.</li>
                                                                                                      </ul>
                                                                                                      </div></div>                                                                                                      
                       <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>15</div><div className='text-white'>
                       <ul style={{ listStyleType: 'square' }}>
                                                                                                        <li>'Pragati' initiative was pioneered to adopt neighbouring village.</li>
                                                                                                      </ul></div><img src={flower}/></div>
                                                                                                      <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>17</div><img src={flower}/><div className='text-white'>
                                                                                                      <ul style={{ listStyleType: 'square' }}>
                                                                                                        <li>5 villages were adopted under 'Pragati'.</li>
                                                                                                      </ul>
                                                                                                      </div></div>
                       <div className='flex items-center justify-between w-[60vw]'> <div className={`year ${yearInBetween ? 'changeColor' : ''}`}>04</div><div className='text-white'><ul style={{ listStyleType: 'square' }}>
                                                                                                        <li>'Pragati' initiative was pioneered to adopt neighbouring village.</li>
                                                                                                      </ul></div><img src={flower}/></div>
                    </div>
                </div>
               
    </div>
  )
  
}

export default YearScroll
