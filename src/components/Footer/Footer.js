import React from "react";
import { Link } from "react-router-dom";
import Insta from "./images/instagram.svg";
import Youtube from "./images/youtube.svg";
import Logo from "./images/logo.svg";
import Twitter from "./images/twitter.svg";
import Medium from "./images/medium.svg";
import Linkedin from "./images/linkedin.svg";
import Loc from "./images/location.svg";
import "./Footer.css";

function footer() {
  return (
    <div className="text-white footer rounded-t-3xl text-center md:text-left">
      <div className="  border border-white relative">
        <div className="pt-10 pl-0 md:pl-20 mx-auto md:mx-0 text-2xl">
          <div className="roslindale ">
            
            Experience one of the India's <br />
            Best Techno-Management Fest!
            <br />
          </div>
          <div className="">
          <div className="bg-gradient-to-r mx-auto md:mx-0 from-blue-500 to-violet-900 py-2 px-5 md:px-4 mt-4 rounded-full inline-block text-sm">
            <Link to="/signup">Sign Up</Link>
          </div>
          
          
        </div>
          {/* ------- */}
          {/* <img src={Logo} alt="Your Image" className="center-image" /> {/* Add the image here */}
          
          {/* ------- */}
        </div>
        <div className="flex flex-col md:flex-row text-center  justify-between w-[50vw] mx-auto  md:mx-0 pl-0 md:pl-20 mt-20 md:mt-10 ">
          <div>
            <div className="roslindale text-2xl md:text-3xl">Contact Us</div>
            techniche@iitg.ac.in <br />
            {/* -- */}
            
            <div className="image-container ml-[30px] md:ml-0">
            <a href="https://www.google.com/maps/d/u/0/viewer?mid=10kOD2TXBPY1qsMQfdF8AXlBxS0Q&hl=en_US&ll=26.192104000000025%2C91.69464100000002&z=17" >
                <img src={Loc} className="loc" />
                <span className="image-text">IIT GUWAHATI</span>
            </a>
            </div>
            <br />
        
          </div>
          <div className="roslindale text-2xl md:text-3xl" >
            Connect with us
            <br />
            <div className=" flex w-[50vw] md:w-[20vw] justify-center mt-4">
            <a href="https://www.instagram.com/techniche_iitguwahati/?hl=en" className="px-2 md:px-4">
                <img src={Insta} />
              </a>
              <a href="https://in.linkedin.com/company/techniche-iitg" className="px-2 md:px-4">
                <img src={Linkedin} />
              </a>
              <a href="https://twitter.com/Techniche_IITG" className="px-2 md:px-4">
                <img src={Twitter} />
              </a>
             
             
              <a href="https://www.youtube.com/c/techniche" className="px-2 md:px-4">
                <img src={Youtube} />
              </a>
              <a href="https://media-techniche.medium.com/" className="px-2 md:px-4">
                <img src={Medium} />
              </a>
              {/* <a href="/meet-the-team" className="meet-team-button">
                Meet Our Team
              </a> */}
              
            </div>
        
            <div><Link to="/team" className="meet-team-button ">
                Meet Our Team 
                <span className="arrow-icon"> →</span>
              
              </Link></div>
          </div>
          
        </div>
        <div className="credits-container flex justify-center" >
      
        <div className="privacy text-sm font-bold -mb-2">
          <a href="/privacylink"  className="italic">Privacy policy  /  Terms of Services</a>
        </div>
      </div>
      <div className="credits-container flex justify-center " >
      
        <div className="credits-item mx-2" >
          Developed by WebOps
        </div>

        <div className="credits-item mx-2">
          Designed by Creatives
        </div>
      </div>
        <button
          className="scroll-up-button my-[50px]"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          &#9650; Go up
        </button>
      </div>
    </div>
  );
}


export default footer;
