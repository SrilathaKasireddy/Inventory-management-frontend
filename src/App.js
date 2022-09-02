import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route ,Navigate } from 'react-router-dom';
import {Product} from './Product';
import Vendors from './Vendors';
import EditProduct from './Editproduct'
import './App.css';
import { Register } from './Register';
import { Login } from './Login';
import NotFound  from './NotFound';
import { ForgetPassword } from './ForgetPassword';
import { ChangePassword } from './ChangePassword';
import { PasswordUpdated } from './PasswordUpdated';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/Register" element={<Register/>}/>  
      <Route path="/Login" element={<Login/>}/>
      <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
      <Route path="/PasswordUpdated" element={<PasswordUpdated/>}/>
      <Route path="/" element={<Navigate replace to="/Login"/>}/>
      <Route path="/404-Page" element={<NotFound/>}/>
      <Route path="/movies/edit/:id"  element={<EditProduct />} />
      <Route path="*" element={<Navigate replace to="/404-Page"/>}/>
      <Route path="/reset-password/:id/:token" element={<ChangePassword/>} />
      <Route path='/Product' element={<Product/>} />
      <Route path='/Vendors' element={<Vendors/>} />
      <Route path ="*" element={<NotFound/>}/>
        </Routes>
    
      
    </div>
  );
}

export default App;

