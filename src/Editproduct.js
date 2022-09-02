import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup";
import { Card } from "@mui/material";
import { API } from "./global";



const formValidationSchema = yup.object({
  productname : yup.string().required("Movie name is required"),
  productprice : yup.number().required("Please add image "),
  quantity : yup.number().required("Please add quantity").max(50),
  vendor : yup.string().required("Please add vendor")
  
}
);



export  default function EditPoduct() {

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
      objectFit:"cover"}}>
    <form  onSubmit={handleSubmit}  style={{alignItems:"center",textAlign:"center",padding:10,color:"black"}}>
      
      <TextField 
       
      error={touched.productname && errors.productname}
      label="Name"
      
       variant="outlined"
         name="productname" 
         value={values.productname} 
         onChange={handleChange} 
         onBlur = {handleBlur}
         style={{padding:10,width:500}}
          
           helperText={touched.productname && errors.productname}/>
      {/* {touched.productname && errors.productname} */}

      


      <TextField
      error={touched.productprice && errors.productprice}
     
       label="Poster"
        variant="outlined"
         name="productprice" 
         value={values.productprice}
          onChange={handleChange}
        onBlur = {handleBlur} 
        style={{padding:10,width:500}}
        helperText={touched.productprice && errors.productprice}/>
      {/* {touched.productprice && errors.productprice} */}
      <TextField
      error={touched.quantity && errors.quantity}
      
       label="Quantity"
        variant="outlined" 
        className="qunatity input" 
         name="quantity" 
         value={values.quantity}
          onChange={handleChange} 
          onBlur = {handleBlur} 
         style={{padding:10,width:500}}
          helperText={touched.quantity && errors.quantity}/>
      
      <TextField 
      error={touched.vendor && errors.vendor}
      
      label="Summary" 
      variant="outlined"
       className="summary input"
        name="vendor" 
      value={values.vendor}
       onChange={handleChange}
        onBlur = {handleBlur} 
      style={{padding:10,width:500}}
       helperText={touched.vendor && errors.vendor} />
      
      
        <Button  type="submit">SAVE</Button>
      </form>
      </Card>
    );
  }
