import React, { useState, useEffect } from 'react';
import './cursor.css';

const TrailCursor = () => {
  const [trail, setTrail] = useState([]);
  
  const updateTrail = (x, y) => {
    const newTrail = [...trail, { x, y }];
    
    if (newTrail.length > 10) {
      newTrail.shift();
    }
    
    setTrail(newTrail);
  };
  
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    updateTrail(clientX, clientY);
  };
  
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    })

    document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    })
  }, []);
  
  return (
    <div className="trail-cursor">
     <div className='cursor'></div>
     </div>
  );
};

export default TrailCursor;
