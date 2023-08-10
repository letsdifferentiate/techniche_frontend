import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Event_details from "./components/Pages/Events/Event_List/Technical"
// import Event_detail from "./components/Pages/Events/Event_details/Event_detail"
import LoginForm from './components/Pages/Login/Login';
import SignUpForm from './components/Pages/SignUp/SignUp'
import EventsTechnical from './components/Pages/Events/Event_List/Technical';
import EventsManagement from './components/Pages/Events/Event_List/Management';
import Initiatives from './components/Pages/Events/Event_List/Initiatives';
import Pronites from './components/Pages/Events/Event_List/Pronites';
import CompetitionsTechnical from './components/Pages/Competitions/Technical';
import CompetitionsManagement from './components/Pages/Competitions/Management';
import Team from './components/Pages/Team/Team';
import Home from './components/Pages/Home/Home';
import UserDashboard from './components/Pages/User/UserDashboard';
import Workshops from './components/Pages/Workshops/workshops';
import Nexus from './components/Pages/Events/Nexus/Nexus';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />

      <Route path="/events/technical" element={<EventsTechnical />} />
      <Route path="/events/management" element={<EventsManagement />} />
      <Route path="/events/initiatives" element={<Initiatives />} />
      <Route path="/events/pronites" element={<Pronites />} />
      <Route path="/competitions/technical" element={<CompetitionsTechnical />} />
      <Route path="/competitions/management" element={<CompetitionsManagement />} />
      <Route path="/workshops" element={<Workshops />} />
            {/* individual events */}
            {/* <Route path="/lecture_series" element={<Lecture_series />} /> */}
            <Route path="/nexus" element={<Nexus />} />
            {/* <Route path="/pronites" element={<Pronites/>} /> */}
            {/* <Route path="/ghm" element={<GHM/>} /> */}
            {/* <Route path="/funniche" element={<Funniche/>} /> */}
{/*  */}
{/*  */}
      {/* <Route path="/Management" element={<Management />} /> */}
            {/* individual Management */}
            {/* <Route path="/techexpo" element={<Techexpo />} /> */}
            {/* <Route path="/techolympics" element={<Techolympics />} /> */}
            {/* <Route path="/corporate" element={<Corporate />} /> */}
            {/* <Route path="/robotics" element={<Robotics />} /> */}
{/*  */}
{/*  */}
      {/* <Route path="/workshops" element={<Initiatives/>} /> */}
      {/* <Route path="/initiatives" element={<Initiatives/>} /> */}
{/*  */}
{/*  */}
{/*  */}
      {/* <Route path="/privacypolicy" element={<Privacy/>} /> */}
      <Route path="/user" element={<UserDashboard/> } />
      <Route path="/team" element={<Team/>} />
      {/* <Route path="/sponsors" element={<Sponsors/>} /> */}
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/signup" element={<SignUpForm/>} />
      
    </Routes>
  )
};

export default AppRoutes;