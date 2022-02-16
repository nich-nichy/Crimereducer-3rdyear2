import React from 'react';
import './Chart.css';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['2018', '2019', '2020'],
  datasets: [
    {
      label: 'Crime on rape',
      data: [194, 199, 149, 10, 7, 3],
      backgroundColor: 'rgb(255,79,79)',
    },
    {
      label: 'Crime on murder',
      data: [108, 97, 115, 5, 1, 4],
      backgroundColor: 'rgb(255,133,133)',
    },
    {
      label: 'Crime on cheating',
      data: [758, 742, 355, 5, 22, 30],
      backgroundColor: 'rgb(255,43,107)',
    },
    {
      label: 'Crime on rather not say',
      data: [618, 697, 700, 5, 22, 30],
      backgroundColor: 'rgb(255,69,0)',
    },
  ],
};

const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
}

const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

const Chart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Yearly crimes based on women in india</h1>
    </div>
    <Bar data={data} options={options} config={config} />
  </>
);

export default Chart;