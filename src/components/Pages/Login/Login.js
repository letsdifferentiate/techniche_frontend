import React, { useState } from 'react';
import "./Login.css"
import AuthService from '../../../services/auth.service';
import leftHand from "./images/Left_hand.png"
import rightHand from "./images/Right_hand.png"
import plus from ".//images/plus.png"


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello in react")
    
    try {
      localStorage.setItem("handlesubmit", "dsf")
        AuthService.login(email, password).then(
        () => {
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }

    
  };

  return (
    <div className='parent relative'>
        <img src={leftHand} className='hover fixed left-0 top-0 h-[60vh] '/>
        <img src={rightHand} className='hover fixed right-0 bottom-0 h-[60vh] '/>
        <img src={plus} className='fixed my-auto left-2'/>
        <img src={plus} className='fixed my-auto right-2'/>


        <div className="login-form">
        <p className='heading text-6xl'>Welcome Back!</p>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
            required
            /><br />
            <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
            required
            /><br />
            <a href="#" className='forgot-password'>Forgot password?</a><br />
            <button type="submit" className='loginx  bg-gradient-to-r from-blue-500 to-violet-900' onClick={handleSubmit}>Login</button><br />
            
            <a href="#"><button className='w-[60%] p-2 mt-6 rounded-full bg-transparent border-2 border-gray-400 mb-3'>Not a member? Signup</button></a>
        </form>
        </div>
    </div>
  );
}

export default LoginForm;
