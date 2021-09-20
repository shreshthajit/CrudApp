import  React,{useState,useEffect} from  "react";
import axios from "axios";
import {Link} from 'react-router-dom';
const Home=()=>{
    const [users,SetUser]=useState([]);//this is an array

    useEffect(()=>{
       loadUsers();
    },[]);

const loadUsers=async ()=>{
    const result=await axios.get("http://localhost:3003/users"); 
    console.log(result);
    SetUser(result.data);
};




    return(
    <div className="container">
        <div calssName="py-4">
            <h1> Home Page</h1>


<table class="table table-light">
  <thead class="thead thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
            <th scope="row"> {index + 1} </th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link class="btn  btn-primary mr-2">View</Link>
                <Link class="btn btn-outline-primary mr-2" to={'/users/edit/${user.id}'}>Edit</Link>
                <Link class="btn btn-danger">Delete</Link>
            </td>
            </tr>


        ))
    }
  
  </tbody>
</table>


        </div>

    </div>
    )
}
export default Home;