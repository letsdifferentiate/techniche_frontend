import React, {useEffect, useState} from 'react'
import "./header.css"
import logo  from "./logo.svg"
import { Link } from 'react-router-dom'


function Header() {
  const [eventsText, setEventsText] = useState('Events');
  const [competitionText, setCompetitionText] = useState('Competitions');
  const [workshopsText, setWorkshopsText] = useState('Workshops');
  const [ambassadorText, setAmbassadorText] = useState('Campus Ambassdor');

/////////////////////////////////////////////////////
  useEffect(() => {
    let timeoutId;
    const changeEventText = () => {
      setEventsText('Eve^<!');
      timeoutId = setTimeout(() => {
        setEventsText('Ev~1>>');
        timeoutId = setTimeout(() => {
          setEventsText('Eve!!>');
          timeoutId = setTimeout(() => {
            setEventsText('EVENTS');
          },150)
        }, 150);
      }, 150);
    };

    const stopEventText = () => {
      clearTimeout(timeoutId);
      setEventsText('Events');
    };
//////////////////////////////////////////////////////////
    const changeCompetitionText = () => {
      setCompetitionText('Compet>>>!!');
      timeoutId = setTimeout(() => {
        setCompetitionText('Compet<<!!>');
        timeoutId = setTimeout(() => {
          setCompetitionText('Compet^^^><');
          timeoutId = setTimeout(() => {
            setCompetitionText('COMPETITIONS');
          },150)
        }, 150);
      }, 150);
    };

    const stopCompetitionText = () => {
      clearTimeout(timeoutId);
      setCompetitionText('Competitions');
    };
//////////////////////////////////////////////
    const changeWorkshopText = () => {
      setWorkshopsText('Work<>^<>');
      timeoutId = setTimeout(() => {
        setWorkshopsText('Wor..|..');
        timeoutId = setTimeout(() => {
          setWorkshopsText('Wo><.?|');
          timeoutId = setTimeout(() => {
            setWorkshopsText('WORKSHOPS');
          },150)
        }, 150);
      }, 150);
    };

    const stopWorkshopText = () => {
      clearTimeout(timeoutId);
      setWorkshopsText('Workshops');
    };
//////////////////////////////////////////////
const changeAmbassdorText = () => {
  setAmbassadorText('Campus ........');
  timeoutId = setTimeout(() => {
    setAmbassadorText('Campus >>>>>>>');
    timeoutId = setTimeout(() => {
      setAmbassadorText('Campus <<<<<<<');
      timeoutId = setTimeout(() => {
        setAmbassadorText('CAMPUS AMBASSDOR');
      },150)
    }, 150);
  }, 150);
};

const stopAmbassdorText = () => {
  clearTimeout(timeoutId);
  setAmbassadorText('Campus Ambassdor');
};
//////////////////////////////////////////////

    const eventsElement = document.getElementById('events');
    eventsElement.addEventListener('mouseenter', changeEventText);
    eventsElement.addEventListener('mouseleave', stopEventText);
    


    const competitionsElement = document.getElementById('competitions');
    competitionsElement.addEventListener('mouseenter', changeCompetitionText);
    competitionsElement.addEventListener('mouseleave', stopCompetitionText);
    

    const workshopElement = document.getElementById('workshops');
    workshopElement.addEventListener('mouseenter', changeWorkshopText);
    workshopElement.addEventListener('mouseleave', stopWorkshopText);
   

    const ambassdorElement = document.getElementById('ambassdor');
    ambassdorElement.addEventListener('mouseenter', changeAmbassdorText);
    ambassdorElement.addEventListener('mouseleave', stopAmbassdorText);
    return () => {
      ambassdorElement.removeEventListener('mouseenter', changeCompetitionText);
      ambassdorElement.removeEventListener('mouseleave', stopCompetitionText);
    };
    return () => {
      eventsElement.removeEventListener('mouseenter', changeEventText);
      eventsElement.removeEventListener('mouseleave', stopEventText);
    };
    return () => {
      workshopElement.removeEventListener('mouseenter', changeWorkshopText);
      workshopElement.removeEventListener('mouseleave', stopWorkshopText);
    };
    return () => {
      competitionsElement.removeEventListener('mouseenter', changeAmbassdorText);
      competitionsElement.removeEventListener('mouseleave', stopAmbassdorText);
    };
  }, []);










  return (
    <div className='fixed top-0 w-[100vw] z-50'>

            <nav className="navbar">
            <div className="navbar-logo">
              <Link to="/">  <img src={logo} alt="Logo"/> </Link>
            </div>
            <ul className="navbar-links">
                <li id="events"><Link to="/events/technical">{eventsText}</Link></li>
                <li id="competitions"><Link to="/competitions/technical">{competitionText}</Link></li>
                <li id="workshops"><Link to="/workshops">{workshopsText}</Link></li>
                <li id="ambassdor"><Link to="/pr_intern">{ambassadorText}</Link></li>
            </ul>
            <div className="navbar-auth">
                <Link to="/login">Login/SignUp</Link>
                <Link to="/signup"><button className='register-button'>Register</button> </Link>
            </div>
            </nav>


    </div>
  )
}

export default Header