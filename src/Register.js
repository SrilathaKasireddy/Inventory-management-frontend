import {
  Typography,
  Button,

} from '@mui/material'

import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import Card from "@mui/material/Card"

import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import { API } from './global.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export function Register() {

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const login = () => navigate("/Login");

  const regUser = (newUser) => {
    fetch(`${API}/signup`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json())
      .then((data1) => {
        if (data1.message === "successful Signup") {
          login();
        }
        else {
          setErrorMsg(data1.message);
        }
      });


  };
  const initialValues = {
    UserName: '',
    Email: '',
    Password: '',
  }
  const userValidationSchema = Yup.object({
    UserName: Yup.string().required('Required'),
    Email: Yup.string().email("Must be a valid email").required('Required'),
    Password: Yup.string().required('Required').min(8),
  })

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: userValidationSchema,
    onSubmit: (newUser) => {
      console.log("onSubmit", newUser);
      regUser(newUser);
    },
  });

  return <div className="add-user-container">

<Card sx={{width:600,alignItems:"center",
      textAlign:"center",justifyContent:"center",marginTop:2,marginLeft:50,height:600,
      }}>
      <form onSubmit={handleSubmit}
        style={{ alignItems: "center", textAlign: "center", padding: 20 }}>


        <TextField
          className="add-user-name"
          label="User Name"
          InputProps={{ style: { fontSize:15 } }}
        InputLabelProps={{ style: { fontSize:15} }}
          type="text"
          value={values.UserName}
          name="UserName"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.UserName && errors.UserName ? true : false}
          style={{ padding: 5 }}
          variant="filled"
          helperText={touched.UserName && errors.UserName ? errors.UserName : ""}
        />
        <br></br>
        <TextField
          className="add-user-name"
          InputProps={{ style: { fontSize:15 } }}
        InputLabelProps={{ style: { fontSize:15} }}
          label="Email ID"
          type="Email"
          variant="filled"
          value={values.Email}
          name="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.Email && errors.Email ? true : false}
          style={{ padding: 5 }}
          helperText={touched.Email && errors.Email ? errors.Email : ""}
        />
        <br></br>
        <TextField
          className="add-user-name"
          InputProps={{ style: { fontSize:15 } }}
        InputLabelProps={{ style: { fontSize:15} }}
          label="Password"
          style={{ padding: 5 }}
          type="password"
          variant="filled"
          value={values.Password}
          name="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.Password && errors.Password ? true : false}
          helperText={touched.Password && errors.Password ? errors.Password : ""}
        />
        <br></br>
        <br></br>
        <button type="submit" 
        className="btn btn-info" style={{height:40,width:60,fontSize:15}}>Signup</button>
        <div className="text-center" style={{ color: "red" }}>
          {errorMsg}
        </div>
        <br />
        <div className="text-center" style={{ color: "blue" }}>
         <h4>Already have an account? <Link to="/Login"><button type="submit" 
        className="btn btn-info" style={{height:40,width:60,fontSize:15}}>Login</button></Link></h4>
          <br />
          <br />
          <Link to="/ForgetPassword"><button type="submit" 
        className="btn btn-info" style={{height:40,width:200,fontSize:15}}>Forgotten your password?</button></Link>
        </div>

      </form>
    </Card>
  </div>;
}

