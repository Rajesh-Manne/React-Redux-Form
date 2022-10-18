import React ,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  Link, useParams,useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
export default function Edit() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [number,setNumber] = useState("");
  const {id} = useParams();
  console.log("id"+id);
  const navigate = useNavigate();

  const contacts = useSelector(contacts => contacts);
  const dispatch = useDispatch(); 

   const currentContact = contacts.find( contact=> contact.id == parseInt(id));

    useEffect(()=> {

      if(currentContact){
        setEmail(currentContact.email);
        setPassword(currentContact.password);
        setNumber(currentContact.number);
      }
    },[currentContact])
 

    const submitHandler = (e)=> {
      e.preventDefault();

       const data ={
        id,
        email,
        password,
        number
       }

       dispatch({type:"EDIT_CONTACT", payload:data})
       navigate("/");
       toast.success("user updated successfully")
    }
  return (
    currentContact ? (
    <form className='col-xlg-6'>
      <h1>Edit Student {id}</h1>
    <div class="form-group" >
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <div class="form-group">
      <label for="examplePhoneNumber1">Phone Number</label> 
      <input type="Number" class="form-control" id="examplePhoneNumber1" placeholder="PhoneNumber" value={number} onChange={(e)=>setNumber(e.target.value)}/>
    </div>
    <button type="submit" class="btn btn-primary m-6" onClick={submitHandler}>Update Student</button>
   <Link to="/" class="btn btn-danger m-4">Cancel </Link>
  </form>
    ) : <h1>contact with id {`${id}`} does not exists</h1>
  )
}
