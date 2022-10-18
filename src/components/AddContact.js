import React,{useState,useCallback} from 'react';
import { useNavigate  } from "react-router-dom";
import {toast} from "react-toastify"

import contactReducer from '../redux/reducers/contactReducer';
import { useDispatch, useSelector } from 'react-redux';
export default function Add() {
// const ADD_CONTACT= "ADD_CONTACT";
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [number,setNumber] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate ();
const contacts = useSelector((contacts)=>contacts);

const handleSubmit=(e)=> {
    e.preventDefault();

    const checkEmail = contacts.find((user)=>user.email == email) ;
    const checkNumber = contacts.find((user)=>user.number == parseInt(number));
      if(!email || !password || !number){

        return toast.warning("Please fill all the fields")
      } 

      if (checkEmail){
        console.log(checkEmail);
        return toast.warning("email already exists")
      }


      if(checkNumber){
        console.log(typeof number);
        return toast.warning("Number already exists");
    }

    const data = {
      id: contacts[contacts.length -1].id + 1,
      email:email,
      password:password,
      number:number
    }
    

    dispatch({type:"ADD_CONTACT",payload:data});

 toast.success("user added successfully")
 navigate("/");
} 




  return (
      <form className='col-md-6 mx-auto'>
        <h1>Add User Form</h1>
        <div class="form-group m-2" >
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group m-2">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div class="form-group m-2">
          <label for="examplePhoneNumber1">PhoneNumber</label>
          <input type="Number" class="form-control" id="examplePhoneNumber1" placeholder="PhoneNumber" value={number} onChange={(e)=>setNumber(e.target.value)}/>
        </div >
        <button type="submit" class="btn btn-primary m-3" onClick={handleSubmit}>Add Student</button>
      </form>
  )
}
