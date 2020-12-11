import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import Card from '@material-ui/core/Card';

import {Link} from 'react-router-dom'


const Frontform = () => {
    let defaultState ={
        title:'',
        body:'',
         

    } 
    const [state, setState] = useState(defaultState);
    
    const [myFile, setMyFile] = useState(null);
    


  const handleTitle = (event) => {
    let temp = { ...state };
    temp.title = event.target.value;
    setState(temp);
  };
  const handleBody = (event) => {
    let temp = { ...state };
    temp.body = event.target.value;
    setState(temp);
  };
  
  const fileHandler = (e) =>{
  
    setMyFile( e.target.files[0]);

  }

 const submit =(event)=>
 {
   event.preventDefault();
  
   const payload = new FormData() 
   payload.append('Content-Type', 'multipart/form-data')
   payload.append('myFile', myFile)
   payload.append('title',state.title)
   payload.append('body',state.body)
  

axios.post( "https://serverhhhhhhhhh.herokuapp.com/api/single", payload)
.then((res)=>{
          console.log(res.statusText)

          
         setState(defaultState)
         setMyFile('')
         
         console.log('the data has sent to the server')

})
.catch((err)=>{
  console.log(err)
})
 


 }
console.log(state,"rahul")
  return (
    <Card style={{height:"400px", width:"700px",marginLeft:"30%" }} >
    <div className="App" style={{backgroundColor:"red"}} style={{display:"flex", justifyContent:"center"}}>
        <form onSubmit={submit} encType="multipart/form-data" >
        <h1 style={{marginLeft:"30%"}}>welcome</h1>
      <Grid container direction="row" justify="center" alignItems="center" className="form-input" spacing={2}>
        
        <Grid item xs={6} sm={2}>
          title
        </Grid>
        <Grid item xs={6} sm={2}>
          <input  type="text" name="title" value={state.title} style={{border:"1px solid black", width:"150px"}} onChange={handleTitle}/>
        </Grid>
      </Grid>
      <br />
      <Grid container direction="row" justify="center" alignItems="center" style={{marginLeft:"9px"}} className="form-input">
        <Grid item xs={6} sm={2}>
          body
        </Grid>
        <Grid item xs={6} sm={2}>
        <input  type="text"  name="body" value={state.body} style={{border:"1px solid black", width:"150px"}} onChange={handleBody}/>
        </Grid>
        
      </Grid>

      <br/> 
      <Grid container direction="row" justify="center" alignItems="center" className="form-input">
        <Grid item xs={6} sm={3}>
          File Upload
        </Grid>
        <Grid item xs={6} sm={6}>
        <input  type="file" name="myFile" onChange={fileHandler} placeholder="File upload"/>
        </Grid>
        
      </Grid>

      <br />
<div style={{marginLeft:"30%"}}>
      <button style={{marginLeft:"20px"}}>submit</button>

      <Link to="/formData">
      <Button style={{backgroundColor:"#67BB6B", marginLeft:"20px"}}>Display Data</Button>
      </Link>
      </div>
      </form>



    </div>
    </Card>
  );
};

export default Frontform;
