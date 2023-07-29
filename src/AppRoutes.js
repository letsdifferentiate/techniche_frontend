import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Event_details from "./components/Pages/Events/Event_List/Event_list"
import Event_detail from "./components/Pages/Events/Event_details/Event_detail"
import LoginForm from './components/Pages/Login/Login';
import SignUpForm from './components/Pages/SignUp/SignUp'
import EventList from './components/Pages/Events/Event_List/Event_list';
import Card from './components/Pages/Events/Event_List/components_and_images/card';
import Team from './components/Pages/Team/Team';
import Home from './components/Pages/Home/Home';
import UserDashboard from './components/Pages/User/UserDashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />

      <Route path="/events" element={<EventList />} />
            {/* individual events */}
            {/* <Route path="/lecture_series" element={<Lecture_series />} /> */}
            <Route path="/nexus" element={<Event_detail />} />
            {/* <Route path="/pronites" element={<Pronites/>} /> */}
            {/* <Route path="/ghm" element={<GHM/>} /> */}
            {/* <Route path="/funniche" element={<Funniche/>} /> */}
{/*  */}
{/*  */}
      {/* <Route path="/competitions" element={<Competitions />} /> */}
            {/* individual competitions */}
            {/* <Route path="/techexpo" element={<Techexpo />} /> */}
            {/* <Route path="/techolympics" element={<Techolympics />} /> */}
            {/* <Route path="/corporate" element={<Corporate />} /> */}
            {/* <Route path="/robotics" element={<Robotics />} /> */}
{/*  */}
{/*  */}
      {/* <Route path="/workshops" element={<Workshops/>} /> */}
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