import React,{useState} from "react";
import { Navigate, NavLink } from "react-router-dom";
import {useNavigate} from 'react-router';

const Login = () => {
    const navigate =useNavigate(); 
  const [user,setUser]=useState({
    email: '',
    password:''
  });
  //handle input
  const handleChange =(event)=>
  {
    let name=event.target.name
    let value =event.target.value

    setUser({...user,[name]:value})
  }
  //handle login
  const handleSubmit=async(event)=>
  {
    event.preventDefault();
    const {email,password}=user;
    try{
        const res = await fetch('/login',{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,password
            })
        });

        if(res.status === 40 || !res){
            window.alert("Invalid credentials")
        }else{
            window.alert("Login successfull")
            //navigate to overview page
            navigate('/about');
            window.location.reload();
            //navigate('/overview');

            //token is generated when we logged in 
        }

    }catch(error){
        console.log(error);
    }
  }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center 
                    text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder">Welcome back</h1>
                        <p className="lead text-center">Enter your credentials to login</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/register"className="btn btn-light me-4 rounded-pill px-4 py-2">Register</NavLink>
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-6 fw-bolder mb-5">
                            LOGIN
                        </h1>
                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}/>
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                </div>
                                <button type="submit" class="btn btn-primary w-40 rounded-pill mt-4">Login</button>
                                <br></br>
                                <button type="submit" class="btn btn-primary w-40 rounded-pill mt-4">Forgot Password</button>
                            </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;