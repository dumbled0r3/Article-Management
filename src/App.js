import React, { useState } from "react"
import LoginForm from './components/LoginForm/LoginForm';
import RegisterFrom from './components/RegisterForm/RegisterForm'
import RouteService from "./routes";



function App() {
  // const [currentForm, setCurrentForm] = useState('LoginForm');

  // const toggleForm =(formName) => {
      //  setCurrentForm(formName) ;
  

  return (

    <div>
      {/* { */}
        {/* currentForm == "LoginForm" ? <LoginForm/>: <RegisterFrom/> */}

      {/* }   */}

      <RouteService/>
      
      
  
    </div>
     );
}

export default App;
