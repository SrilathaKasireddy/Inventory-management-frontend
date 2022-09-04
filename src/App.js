import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Product } from './Product';
import EditProduct from './Editproduct'
import './App.css';
import { Register } from './Register';
import { Login } from './Login';
import NotFound from './NotFound';
import AddProduct from "./AddProduct"
import { ForgetPassword } from './ForgetPassword';
import { ChangePassword } from './ChangePassword';
import { PasswordUpdated } from './PasswordUpdated';
import Home from "./Home"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/PasswordUpdated" element={<PasswordUpdated />} />
        <Route path="/" element={<Navigate replace to="/Login" />} />

        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/AddProduct" element={<AddProduct />} />

        <Route path="/reset-password/:id/:token" element={<ChangePassword />} />
        <Route path='/products' element={<Product />} />

        <Route path="*" element={<NotFound />} />
      </Routes>


    </div>
  );
}

export default App;

