import React, { useState } from 'react';
import "./EventForm.css";



const EventForm = () => {
  const [full_name, setFull_name] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'full_name') {
      setFull_name(value);
    } else if (name === 'contact') {
      setContact(value);
    } else if (name === 'confirm_password') {
      setConfirmPassword(value);
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submit logic here
  }

  return (

    <div className='parent'>
        <div className="signup-form">
        <p className='heading text-6xl'>Enter Details</p>

        <form onSubmit={handleSubmit}>
            <input type="text" name="full_name" placeholder="Full Name" value={full_name} onChange={handleInputChange}required/><br />
            <input type="text" name="email" placeholder="Email" value={email} onChange={handleInputChange} required /><br />
            <input type="text" name="contact" placeholder="Contact" value={contact} onChange={handleInputChange} required /><br />
            <input type="password" name="password" placeholder="Password" value={password} onChange={handleInputChange} required /><br />
            <input type="password" name="confirm_password" placeholder="Confirm Password" value={confirm_password} onChange={handleInputChange} required /><br />
            <button className='event w-[60%] rounded-full py-3 text-2xl transition delay-150 duration-300 ease-in-out bg-gradient-to-r from-blue-500 to-violet-900  hover:from-violet-900 hover:to-blue-500 ' type="submit">Register</button><br />
    
        </form>
        </div>
    </div>

  );
}

export default EventForm;
