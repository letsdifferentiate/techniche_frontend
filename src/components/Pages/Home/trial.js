import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [isGreenBackground, setIsGreenBackground] = useState(false);

  useEffect(() => {
    // Function to change the class of the div based on scroll position
    const changeDivStyle = () => {
      const myDivs = document.querySelectorAll('.myDiv');
      const scrollPosition = window.scrollY;
      const rangeStart = 200; // Set the lower range value here (in pixels)
      const rangeEnd = 500;   // Set the upper range value here (in pixels)

      // Convert the NodeList to an array
      const divArray = Array.from(myDivs);

      // Loop through the divs and apply the green-bg class based on the scroll position
      divArray.forEach((div) => {
        const distanceFromTop = div.offsetTop - scrollPosition;
        if (distanceFromTop >= rangeStart && distanceFromTop <= rangeEnd) {
          div.classList.add('green-bg');
        } else {
          div.classList.remove('green-bg');
        }
      });
    };

    // Attach the changeDivStyle function to the scroll event
    window.addEventListener('scroll', changeDivStyle);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', changeDivStyle);
    };
  }, []);

  return (
    <div>
      <div className="boxx"></div>
      <div className={`myDiv ${isGreenBackground ? 'green-bg' : ''}`}>
        This is the target div
      </div>
      <div className={`myDiv ${isGreenBackground ? 'green-bg' : ''}`}>
        This is the target div
      </div>
      <div className={`myDiv ${isGreenBackground ? 'green-bg' : ''}`}>
        This is the target div
      </div>
      <div className={`myDiv ${isGreenBackground ? 'green-bg' : ''}`}>
        This is the target div
      </div>
      <div className="boxx"></div>

      {/* CSS styles */}
      <style>
        {`
          /* Add a new class for the green background color */
          .green-bg {
            background-color: green;
            color: black;
          }
          .myDiv {
            width: 200px;
            height: 200px;
            text-align: center;
            padding-top: 50px;
            font-size: 20px;
          }
          .boxx {
            height: 80vh;
            background-color: black;
          }
        `}
      </style>
    </div>
  );
};

export default MyComponent;
