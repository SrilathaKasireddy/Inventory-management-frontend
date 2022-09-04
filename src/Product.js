import { useEffect ,useState} from 'react';
import  {ProductCard } from './ProductCard';
import { API } from './global';
import Card from "@mui/material/Card"
export function Product() {
  
  const[productInfo,setproductInfo]=useState([]);

  function getProductAPI(){
    fetch(`${API}/Products`)
    .then((data)=>data.json())
    .then((mvs)=>setproductInfo(mvs));
  }

  useEffect(()=>{
    getProductAPI();
  },[]);

  return (
    <Card sx={{width:500,alignItems:"center",
      textAlign:"center",justifyContent:"center",marginLeft:50}}
      >

<h1>Products Information</h1>
    <div className="equipList">
      {productInfo.map((value, index) => {
        return <ProductCard key={value._id} id={value._id} 
        quantity={value.quantity} productname ={value.productname} productprice={value.productprice}
        vendor ={value.vendor} contentt ={value.contentt}
        
                           
                          productInfo={productInfo} 
                          setproductInfo={setproductInfo} 
                          getProductAPI = {getProductAPI} />;
      })}
    </div>
    </Card>
  );
}
