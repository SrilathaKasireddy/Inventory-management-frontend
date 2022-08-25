import React from 'react';
import PieChart from "./Home";


function Products() {
  return (
    <div className='products'>
      <h1>Products</h1>
      <PieChart chartData={userData} />
      
    </div>
  );
}

export default Products;