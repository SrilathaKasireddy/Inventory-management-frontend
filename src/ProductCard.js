import React from "react";
import { Card, Table } from "react-bootstrap";
import EditIcon from '@mui/icons-material/Edit';
import { EditProduct } from "./Editproduct";
import {useNavigate} from "react-router-dom"
import {API} from "./global";
import IconButton from '@mui/material/IconButton';
export function ProductCard({productname,productprice,vendor,quantity,contentt ,id}){
  const navigate =useNavigate();
  return (
<div style={{backgroundColor:"whitesmoke",
fontSize:8}} > 
      
        {/* <Card.Title>Product</Card.Title> */}
      
        <Table style={{
fontSize:15,width:500
}}  bordered  striped hover responsive variant="primary" >
          <thead>
            <tr>
              
              <th>Product Name</th>
              
              <th>Product Price</th>
              <th>Quantity</th>
              <th>Vendor</th>
              <th>Edit</th>
              {/* <th>Product Details</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>

              
              <td>{productname} </td>
              
              <td>{productprice} </td>
              <td>{quantity} </td>
              <td>{vendor} </td>
              <td><button><EditIcon onClick = {()=> 
              navigate(`/products/edit/${id}`)}/></button></td>
              <IconButton 
            aria-label="Movie Edit"
            style={{marginLeft:"auto"}}
            className = "editIcon"
            color = "secondary" onClick = {()=> 
              navigate(`/products/edit/${id}`)}>
            <EditIcon  />
            </IconButton>

              
              {/* <td>{contentt}</td> */}
            </tr>
            
          </tbody>
        </Table>
      
     </div>
)}

export default ProductCard;