import React from 'react-router-dom';

import {Card} from '@material-ui/core'
import { useState } from 'react';

import { Redirect } from "react-router-dom";

function Home (props) {

    let defaultState ={
        userName:'',
        password:'',
         

    } 

    const [state, setState] = useState(defaultState);

    const [isLogin, SetLogin] = useState("false");


    const handleUserName = (event) => {
        let temp = { ...state };
        temp.userName = event.target.value;
        setState(temp);
      };
      const handlePassword= (event) => {
        let temp = { ...state };
        temp.password = event.target.value;
        setState(temp);
      };


      const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(state, "userNa")

        if(state.userName =="Admin" && state.password == "1234"){
            
            SetLogin('true')

        }else{
            SetLogin('false')

        }
    }

    console.log(props)

    return(

        <div style={{display:"flex", justifyContent:"center", marginTop:"100px"}}>
    
            <form onSubmit={handleSubmit} >
        <Card style={{height:"300px", width:"400px"  }} >
            <h1 style={{marginLeft:"35%"}}>LOGIN</h1>
            <input type="text" name="username" placeholder="Username" required  onChange={handleUserName}/>
             <input type="password" name="password" placeholder="Password" required onChange={handlePassword} />
                <input type="submit" value="Login" />



        </Card>
        </form>

        {isLogin == "true" ? <Redirect to="/login" /> : null}
        </div>
    )
}

export default Home