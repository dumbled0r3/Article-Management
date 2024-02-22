// import React from 'react';
import "../LoginForm/LoginForm.css";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
// import { Interface } from 'node:readline/promises';
// import { useForm } from 'react-hook-form';
// import { ErrorProps, useState } from "react";
// import React, { useState, useEffect } from 'react';

 const LoginForm = () => {


    // function App() {
    //   const [data, setData] = useState([]);
    //   const [loading, setLoading] = useState(true);
    //   const [error, setError] = useState(null);
    
    //   useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         const result = await response.json();
    //         setData(result);
    //       } catch (error) {
    //         setError(error);
    //       } finally {
    //         setLoading(false);
    //       }
    //     };
    
    //     fetchData();
    //   }, []); // Empty dependency array ensures the effect runs only once after the initial render
    
    //   if (loading) {
    //     return <div>Loading...</div>;
    //   }
    
    //   if (error) {
    //     return <div>Error: {error.message}</div>;
    //   }
    // }
     return (


    <div className='Wrapper'>
        <form action="">
            <h1>Log-In</h1>

            <div className="input-box">
                <input type="text" placeholder='Username' required />
                <FaUserCircle className='icon' />
            </div>

            <div className="input-box">
                <input type="password" placeholder='Password'  required />
                <RiLockPasswordFill className='icon'/>
            </div>

            <div className="remember-forgot ">
                <label><input type="checkbox" />Remember</label>
                <a href="#">Forgot Password?</a>  
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
                <p>Don't have an account?<a href='/register'>Register</a></p>    
            </div>

                 
        </form>

    </div>
  );
};


 export default LoginForm; 
