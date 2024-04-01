// BarChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

function Linechart() {
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
          .then((response) => response.json())
          .then((data) => {
            
            setList(data.data.sort((a,b)=>a.Year-b.Year));
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
    const data = {
        labels: list.map((data) => data.Year),

        datasets: [
            {
                label: 'Population',
                data: list.map((data) => data.Population),
                backgroundColor: ['#77f534',"#1b9a59"],
                borderColor: "#77f534",
                tension: 0.4,
             
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                min: 300000000,
                gridLines: {
                    color: '#fffff', // Light gray for X-axis grid lines
                    lineWidth: 1, // Optional: Adjust grid line thickness
                    borderDash: [4, 4] // Optional: Dashed grid lines
                  }
            },
            x: { gridLines: {
                color: 'lightgray', // Set the desired color
                lineWidth: 1, // Adjust line thickness (optional)
                borderDash: [5, 5], // Create a dashed line (optional)
                // ... other grid line options
              }
            }
        },
    };

    return <Line data={data} options={options}/>;
}

export default Linechart;
