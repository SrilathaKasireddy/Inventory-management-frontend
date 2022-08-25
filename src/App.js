import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vendors from './pages/Vendors';
import Products from './pages/Products';
import NotFound from './NotFound';

function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Vendors' element={<Vendors/>} />
          <Route path='/products' element={<Products/>} />
          <Route path ="*" element={<NotFound/>}/>
        </Routes>
     
    </>
  );
}

export default App;