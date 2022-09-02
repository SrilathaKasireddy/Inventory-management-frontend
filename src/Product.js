import { useEffect ,useState} from 'react';
import  {ProductCard } from './ProductCard';
import { API } from './global';

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
  );
}
