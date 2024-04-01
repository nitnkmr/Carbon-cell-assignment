// BarChart.js
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
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
                backgroundColor: ['#77f534',"#1b9a59","#03c3ff","#9fff9d","#eed70a"],
                borderColor: "black",
                type: 'doughnut',
                cutOut: "100%",
                
            },
        ],
    };


    const options = {
        layout: {
          borderRadius : [50,0,0,0]
        },
    };

    return <Pie data={data} options={options} />;
}

export default Linechart;
