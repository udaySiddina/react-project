import React from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router'

const Logout = () =>{
    const navigate =useNavigate(); 
    const logout =async()=>{
        try{
              const res =await fetch('/logout',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-type" : "application/json"
                },
                credentials:"include"
              });
              if(res.status=== 401 || !res){
                window.alert("please logout later");
              }else{
                navigate('/');
                window.location.reload()
              }
        }catch(error){
            console.log(error)
        } 
    }
    useEffect(() =>{
        logout();
    },[]);
    return (
        <div>

        </div>
    );
}
export default Logout;