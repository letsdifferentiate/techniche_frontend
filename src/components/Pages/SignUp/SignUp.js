import React, { useState } from 'react';
import "./SignUp.css"

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
        <div className="signup-form">
        <h1>Create an account</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="full_name" placeholder="Full Name" value={full_name} onChange={handleInputChange}required/><br />
            <input type="text" name="email" placeholder="Email" value={email} onChange={handleInputChange} required /><br />
            <input type="text" name="contact" placeholder="Contact" value={contact} onChange={handleInputChange} required /><br />
            <input type="password" name="password" placeholder="Password" value={password} onChange={handleInputChange} required /><br />
            <input type="password" name="confirm_password" placeholder="Confirm Password" value={confirm_password} onChange={handleInputChange} required /><br />
            <button className='signup bg-gradient-to-r from-#FF0000 to-#00FF00' type="submit" >Signup</button><br />
            <a href="#"><button className='login'>Log into Existing Account</button></a>
        </form>
        </div>
    </div>

  );
}

export default SignUpForm;
