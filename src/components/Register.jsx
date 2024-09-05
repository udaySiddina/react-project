import React ,{useState} from "react";
import { NavLink } from "react-router-dom";
import {useNavigate} from 'react-router';


const Register = () => {
   
   const navigate =useNavigate(); 

   const [user,setUser] =useState({
    username: "",
    email : "",
    password : ""
   });
   //handle inputs
   const handleInput = (event)=>{
    let name = event.target.name;
    let value = event.target.value;

    setUser({...user,[name]:value});
   }

   //handlesubmit
   const handleSubmit=async(event)=>{
    event.preventDefault();
    //object destructuring
    //store object data into variables
    const {username,email,password}=user;
    try{
        //it is submitted on port 3000 by default which is front end 
        //submit on backend which is on port 3001
        const res=await fetch('/register',{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                username,email,password
            })
        })
        if(res.status===400 || !res){
            window.alert("Already used details")
        }else{
            window.alert("registered successfully");
            navigate('/login')
        }
    }catch(error){
        console.log(error);
    }
   }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center 
                    text-white justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder">Hello, User</h1>
                        <p className="lead text-center">Enter your Details to Register</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/login"className="btn btn-light me-4 rounded-pill px-4 py-2">Login</NavLink>
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-6 fw-bolder mb-5">
                            Register
                        </h1>
                            <form onSubmit={handleSubmit} method="POST">
                            <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">User Name</label>
                                    <input type="text" class="form-control" id="name" 
                                    name="username"
                                    value={user.username}
                                    onChange={handleInput}/>
                                        
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInput}/>
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"
                                    name="password"
                                    value={user.password}
                                    onChange={handleInput}/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label" for="exampleCheck1">I agree Term and Conditions </label>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mt-4 rounded-pill">Register</button>
                            </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;