import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Testing DataSet',
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
            ],
            data: [10, 20, 30, 40, 50],
        },
    ],
};

const PieChart = () => {
    return (
        <div>
            <Pie data={data} />
        </div>
    );
};

export default PieChart;
