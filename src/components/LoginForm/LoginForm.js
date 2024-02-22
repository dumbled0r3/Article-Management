// import React from 'react';
import { useState } from "react";
import "../LoginForm/LoginForm.css";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "../../lib/axios";
// import { Interface } from 'node:readline/promises';
// import { useForm } from 'react-hook-form';
// import { ErrorProps, useState } from "react";
// import React, { useState, useEffect } from 'react';

const LoginForm = () => {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: ''
  // });

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(email + ", " + password);

      const formData = {
        email,
        password
      }
      const response = await axios.post('/api/auth/login.json', formData);
      const accessToken = response.data.token;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", response.data.data.email);
      localStorage.setItem("userId", response.data.data.id);
      console.log('Registration successful:', response.data);

    } catch (err) {
      setError(err)
      console.error('Registration failed:', err.response)
    }
  };


  //  
  return (
    <div className="Wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Log-In</h1>

        <div className="input-box">
          <input type="text" placeholder="Username" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <FaUserCircle className="icon" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <RiLockPasswordFill className="icon" />
        </div>

        <div className="remember-forgot ">
          <label>
            <input type="checkbox" />
            Remember
          </label>
          {/* <a href="#">Forgot Password?</a> */}
        </div>

        <input type="submit" />

        <div className="register-link">
          <p>
            Don't have an account?<a href="/register">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
