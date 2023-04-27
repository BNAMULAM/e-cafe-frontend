import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/Home";
import Login from "./components/Login";
import CustomerHome from "./components/CustomerHome";
import ManagerHome from "./components/ManagerHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/customerLogin" element={<Login role= {"CUSTOMER"} />} />
		<Route path="/memberLogin" element={<Login role= {"MANAGER"}/>} />
		<Route path="/customerHome" element={<CustomerHome />} />
		<Route path="/managerHome" element={<ManagerHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
