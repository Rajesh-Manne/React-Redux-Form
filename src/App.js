import React from 'react'
import {  Route, Routes } from "react-router-dom";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import Edit from "./components/EditContact";
import Add from "./components/AddContact.js";
import Home from "./components/Home"
import ReactDOM from 'react-dom';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <NavBar/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/edit/:id" element={<Edit/>}/>
        <Route  path="/add" element={<Add/>} />
      
      </Routes>
    </div>
  );
} 

export default App;





