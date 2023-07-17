import React, { useState } from 'react';
import "./Login.css"

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
    // Add your login logic here
  }

  return (
    <div className='parent'>
        <div className="login-form">
        <p className='heading text-3xl'>Welcome Back!</p>
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
            <button type="submit" className='login'>Login</button><br />
            
            <a href="#"><button className='signup'>Not a member? Signup</button></a>
        </form>
        </div>
    </div>
  );
}

export default LoginForm;
