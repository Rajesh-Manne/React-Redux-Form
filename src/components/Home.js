import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
export default function Home() {
  const dispatch = useDispatch();

  const contacts = useSelector((contacts)=>contacts);

const deleteHandler = (id)=> {


  dispatch({type:"DELETE_USER",payload:id})
}
  return (

    <>
    <div class="d-flex  justify-content-end p-5">
    <Link to="/add">
    <button class="btn btn-primary">Add to Contact</button>
    </Link>
    </div>
    <h1>Welcome to React Redux contact book</h1>


    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Number</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
  <tbody>
    {
      contacts.map((user,id) =>
    <tr key={id}>
      <th scope="row">{id+1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.number}</td>
      <td><div><Link to={`/edit/${user.id}`}><button class="btn btn-primary">Edit</button></Link><button class="btn btn-danger mx-2" onClick={()=>deleteHandler(user.id)}>Delete</button></div></td>
    </tr>
   )}
    </tbody>
    </table>
    </>
  )
}
