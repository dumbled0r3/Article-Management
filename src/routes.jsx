import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const RouteService = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/homepage' element={<homepage/>} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
        </Routes>
    </BrowserRouter>
  );
};

export default RouteService;
