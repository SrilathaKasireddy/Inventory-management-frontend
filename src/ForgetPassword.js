import {
    Typography,
    Button,
    
  } from '@mui/material'
  
  import React from 'react'
  import { useFormik } from 'formik'
  import * as Yup from "yup";
  import {Link} from "react-router-dom"
  
  import TextField from '@mui/material/TextField'
  import { API } from './global.js';
  import { useState } from 'react';
  import Card from '@mui/material/Card'

  
  
  export function ForgetPassword() {
    const[errorMsg,setErrorMsg]=useState("");
  
    const forgetPassword =(emailDetail) => {
      fetch(`${API}/forgetPassword`,{
      method: "POST",
      body: JSON.stringify(emailDetail),
      headers: {
        "Content-Type" : "application/json",

      },
    }).then((data)=>data.json())
    .then((data1)=>{
            setErrorMsg(data1.message);
        }
    );
    

    };
    const initialValues = {
      Email: '',
    }
    const userValidationSchema = Yup.object({
      Email: Yup.string().email("Must be a valid email").required('Required'),
    })
    
    const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
      initialValues:initialValues,
      validationSchema:userValidationSchema ,
      onSubmit:(emailDetail)=>{
        console.log("onSubmit",emailDetail);
        forgetPassword(emailDetail);
      },
    });
    const style1=errorMsg==="User exists and password reset mail is sent"?
    {color:"green"}:{color:"red"}
    
    return <div className="add-user-container">
      <Card sx={{width:600,alignItems:"center",
      textAlign:"center",justifyContent:"center",marginTop:2,marginLeft:50,height:600,
      }}>
    <form  onSubmit={handleSubmit}  
    style={{alignItems:"center",textAlign:"center",padding:20}}>
      
      
    <TextField
    InputProps={{ style: { fontSize:15 } }}
    InputLabelProps={{ style: { fontSize:15} }}
      className="add-user-name"
      label="Enter Registered mail id"
      type="Email"
      value={values.Email} 
      name="Email"
      style={{ padding: 5 }}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.Email&&errors.Email?true:false}
      helperText={touched.Email&&errors.Email?errors.Email:""}
      variant="filled"
      />
      <br></br>
      <br></br>
      <button type="submit" 
        className="btn btn-info" style={{height:40,width:60,fontSize:15}}>Submit</button>
      <div className="text-center" >
    {errorMsg}
    </div>
    <br></br>
    <br></br>
      <div className="text-center" style={{color:"blue"}}>
      <h4>Don't have an account?  <Link to="/Register" ><button type="submit" 
        className="btn btn-info" style={{height:40,width:60,fontSize:15}}>Signup</button></Link></h4>
      
      <br></br>
      <br></br>
      <br></br>
     <Link to="/Login"><button type="submit" 
        className="btn btn-info" style={{height:40,width:250,fontSize:15}}>I can remember my password now</button></Link>
    </div>
   </form> 
   </Card>
  </div>;
  
  }
  
  