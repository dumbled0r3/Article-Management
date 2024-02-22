import React from 'react';
import "../RegisterForm/RegisterForm.css";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


 const RegisterForm = () => {
    return (

    <div className='Wrapper'>
        <form action="">
            <h1>Register</h1>
            <div className="input-boxv2">
                <input type="text" placeholder='Firstname' required />
            </div>

            <div className="input-boxv2">
                <input type="text" placeholder='Lastname' required />
            </div>

            <div className="input-boxv2">
                <input type="text" placeholder='Middlename' />
            </div>

            <div className="input-boxv2">
                <input type="text" placeholder='Username' required />
                <FaUserCircle className='icon' />
            </div>

            <div className="input-boxv2">
                <input type="text" placeholder='Email' required />
                <MdEmail className='icon'/>
            </div>

            <div className="input-boxv2">
                <input type="password" placeholder='Password' required />
                <RiLockPasswordFill className='icon'/>
            </div>

            <button type="submit">Register</button>

                
                
        </form>

    </div>
  );
};

 export default RegisterForm;
