import React, { useState } from 'react';
import "./SignUp.css"
import leftHand from "../Login/images/Left_hand.png"
import rightHand from "../Login/images/Right_hand.png"
import plus from "../Login/images/plus.png"



const SignUpForm = () => {
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
    // Add your signup logic here
  }

  return (

    <div className='parent'>
      <img src={leftHand} className='fixed left-0 top-0 h-[60vh] '/>
        <img src={rightHand} className='fixed right-0 bottom-0 h-[60vh] '/>
        <img src={plus} className='fixed my-auto left-2'/>
        <img src={plus} className='fixed my-auto right-2'/>
        <div className="signup-form">
        <p className='heading text-6xl'>Create an account</p>

        <form onSubmit={handleSubmit}>
            <input type="text" name="full_name" placeholder="Full Name" value={full_name} onChange={handleInputChange}required/><br />
            <input type="text" name="email" placeholder="Email" value={email} onChange={handleInputChange} required /><br />
            <input type="text" name="contact" placeholder="Contact" value={contact} onChange={handleInputChange} required /><br />
            <input type="password" name="password" placeholder="Password" value={password} onChange={handleInputChange} required /><br />
            <input type="password" name="confirm_password" placeholder="Confirm Password" value={confirm_password} onChange={handleInputChange} required /><br />
            <button className='signup transition delay-150 duration-300 ease-in-out bg-gradient-to-r from-blue-500 to-violet-900  hover:from-violet-900 hover:to-blue-500 ' type="submit" >Signup</button><br />
            <a href="#"><button className='login bg-transparent'>Log into Existing Account</button></a>
        </form>
        </div>
    </div>

  );
}

export default SignUpForm;
