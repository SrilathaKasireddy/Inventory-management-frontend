import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie} from 'react-chartjs-2';
import {Card} from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

 const data = {
  labels: ['Aloe Vera', 'Dragon Tree', 'Ficus Tree', 'Flamingo Lily', 'Lady Palm', 'Mass Cane Corn Plant', 'parlor palm', 'Peace Lily', 'Philodendron', 'Spider Plant'],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 1, 5, 6, 15, 15, 11, 10, 5, 15],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth:3,
    
      
      
    },
  ],
};

export  default function Home() {
  return <div >
    <Card sx={{width:500,alignItems:"center",
      textAlign:"center",padding:2,justifyContent:"center",marginTop:2,marginLeft:50,marginRight:50}}
      >
        <h1>Available Stock </h1>
  <Pie data={data} />
  </Card>
</div>
}
