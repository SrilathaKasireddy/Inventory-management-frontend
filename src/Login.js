import { Typography, Button, } from '@mui/material'

import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import Card from "@mui/material/Card"
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import { API } from './global.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export function Login() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const entry = () => navigate("/Home");

  const loginUser = (userDetail) => {
    fetch(`${API}/login`, {
      method: "POST",
      body: JSON.stringify(userDetail),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json())
      .then((data1) => {
        if (data1.message === "successful login") {
          entry();
        }
        else {
          setErrorMsg(data1.message);
        }
      });


  };
  const initialValues = {
    UserName: '',
    Password: '',
  }
  const userValidationSchema = Yup.object({
    UserName: Yup.string().required('Required'),
    Password: Yup.string().required('Required'),
  })

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: userValidationSchema,
    onSubmit: (userDetail) => {
      console.log("onSubmit", userDetail);
      loginUser(userDetail);
    },
  });

  return <div className="add-user-container"  >
    <Card sx={{width:600,alignItems:"center",
      textAlign:"center",justifyContent:"center",marginTop:2,marginLeft:50,height:600,
      }}>
    <form  onSubmit={handleSubmit}  
    style={{alignItems:"center",textAlign:"center",padding:20}}>

      <TextField
        className="username"
        InputProps={{ style: { fontSize:15 } }}
        InputLabelProps={{ style: { fontSize:15} }}
        label="User Name"
        type="text"
        value={values.UserName}
        name="UserName"
        style={{ padding: 5 }}
        variant="filled"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.UserName && errors.UserName ? true : false}
        helperText={touched.UserName && errors.UserName ? errors.UserName : ""}
      />
      <br></br>
      
      <TextField
      InputProps={{ style: { fontSize:15 } }}
      InputLabelProps={{ style: { fontSize:15} }}
        className="password"
        label="Password"
        type="password"
        variant="filled"
        value={values.Password}
        name="Password"
        style={{ padding: 5 }}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.Password && errors.Password ? true : false}
        helperText={touched.Password && errors.Password ? errors.Password : ""}
      />
      
      {/* <Button className="add-user-btn"
        color="info"
        type="submit"
        variant="contained">Login</Button> 
        */}
        <br></br>
        <br></br>
      <button type="submit"
        className="btn btn-info" style={{height:40,width:60,fontSize:15}}>Login</button>
        <br></br>
        <br></br>
      <div className="text-center" style={{ color: "red" }}>
        {errorMsg}
      </div>
      <div className="text-center" style={{ color: "blue" ,padding: 5}} >
        <h4>Don't have an account? <Link to="/Register"><button type="submit"
        className="btn btn-info" style={{height:40,width:60,fontSize:15}}>Signup</button></Link></h4>
        <br></br>
        <br></br>
        <Link to="/ForgetPassword"><button type="submit"
        className="btn btn-info" style={{height:40,width:200,fontSize:15}}>Forgotten your password?</button></Link>
      </div>
    </form>
    </Card >
  </div>;
}

