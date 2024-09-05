import React from 'react';
import {Navigate,Route} from 'react-router';
const Protectedroute = ({auth,componennt:Component,...rest})=>{
    return (
        <div>
      <Navigate{...rest} render={(props)=>{
    if(auth)return <Component{...props}/>
    if(!auth) return <Navigate to ={{path : '/',state:{from : props.location}}}/>

}}/>
        </div>
    );
}

export default Protectedroute;