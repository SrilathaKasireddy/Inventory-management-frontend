import React from 'react';
import { Pie } from "react-chartjs-2";


export function Home({chartData}) {
  
  return (
    <div className="homeList">
      <h1>Inventory Management</h1>
      
         <Pie data={chartData} />;;
     
    </div>
  );}

export default Home;

