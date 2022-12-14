import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup";
import  Card from "@mui/material/Card";
import { API } from "./global";



const formValidationSchema = yup.object({
  productname : yup.string().required("Product name is required"),
  productprice : yup.number().required("Please add price "),
  quantity : yup.number().required("Please add quantity").max(20),
  vendor : yup.string().required("Please add vendor")
  
}
);



export  default function EditProduct() {

  const[product,setProduct]=useState(null);
  const { id } = useParams();
  
  function getProductAPI(){
    fetch(`${API}/products/${id}`)
    .then((data)=>data.json())
    .then((mvs)=>setProduct(mvs));
  }

  useEffect(()=>{
    getProductAPI();
  },[]);






  return(
    product ? <ProductEditCore product={product}/> : "Loading..."
  )

}



  function ProductEditCore({product}){
    

    const {handleBlur,handleChange,handleSubmit,values,touched,errors} = useFormik({
      initialValues : {
                        productname: product.productname,
                        productprice: product.productprice,
                        quantity: product.quantity,
                        vendor: product.vendor
                        
                      },
      validationSchema : formValidationSchema,
      onSubmit : (values)=>editProductAPI(product,values)
    })

    



    const navigate = useNavigate();

    function editProductAPI(product,values){
      fetch(`${API}/products/${product._id}`,
        {
          method:"PUT",
          body : JSON.stringify(values),
          headers : {"Content-Type":"application/json"}
        }
      ).then(()=>navigate("/products"))
    }
    return (
      <Card sx={{width:600,alignItems:"center",
      textAlign:"center",justifyContent:"center",marginTop:2,marginLeft:50,height:600,
      }}>
    <form  onSubmit={handleSubmit}  
    style={{alignItems:"center",textAlign:"center",padding:20}}>
     
      <TextField 
       
      error={touched.productname && errors.productname}
      label="Name"
      
      InputProps={{ style: { fontSize:15 } }}
        InputLabelProps={{ style: { fontSize:15} }}
       variant="filled"
       
         name="productname" 
         value={values.productname} 
         onChange={handleChange} 
         onBlur = {handleBlur}
         style={{padding:5}}
         
           helperText={touched.productname && errors.productname}/>
      {/* {touched.productname && errors.productname} */}

      <br></br>
       <br></br>


      <TextField
      error={touched.productprice && errors.productprice}
      InputProps={{ style: { fontSize:15 } }}
      InputLabelProps={{ style: { fontSize:15} }}
       label="Price"
        variant="filled"
         name="productprice" 
         value={values.productprice}
          onChange={handleChange}
        onBlur = {handleBlur} 
        style={{padding:5}}
        
        helperText={touched.productprice && errors.productprice}/>
        <br></br>
       <br></br>
      {/* {touched.productprice && errors.productprice} */}
      <TextField
      error={touched.quantity && errors.quantity}
      InputProps={{ style: { fontSize:15 } }}
        InputLabelProps={{ style: { fontSize:15} }}
       label="Quantity"
        variant="filled" 
        className="qunatity input" 
         name="quantity" 
         value={values.quantity}
          onChange={handleChange} 
          onBlur = {handleBlur} 
          style={{padding:5}}
         
          helperText={touched.quantity && errors.quantity}/>
          <br></br>
       <br></br>
      
      <TextField 
      error={touched.vendor && errors.vendor}
      InputProps={{ style: { fontSize:15 } }}
        InputLabelProps={{ style: { fontSize:15} }}
      label="vendor" 
      variant="filled"
       className="vendor input"
        name="vendor" 
      value={values.vendor}
       onChange={handleChange}
        onBlur = {handleBlur} 
        style={{padding:5}}
      
       helperText={touched.vendor && errors.vendor} />
       <br></br>
       <br></br>
      
      <button type="submit" 
        className="btn btn-info" style={{height:40,width:60,fontSize:15}}>Save</button>
        
      </form>
      </Card>
    );
  }
