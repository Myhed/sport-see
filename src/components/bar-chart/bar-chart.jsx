import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import './style/bar-chart.style.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const BarChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Poids (kg)',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1,
            },
            {
                label: 'Calories brûlées',
                data: [2800, 2300, 2700, 2200, 2500, 2100, 1900],
                backgroundColor: 'rgba(255, 0, 0, 0.8)',
                borderColor: 'rgba(255, 0, 0, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Graphique des Poids et Calories Brûlées',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <div className="legend-container">
                <p>Activite quotidienne</p>
                <div class="legend">
                    <div className="legend-item">
                        <div
                            className="legend-box"
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                        ></div>
                        <span className="legend-text">Poids (kg)</span>
                    </div>
                    <div className="legend-item">
                        <div
                            className="legend-box"
                            style={{ backgroundColor: 'rgba(255, 0, 0, 0.8)' }}
                        ></div>
                        <span className="legend-text">Calories brûlées</span>
                    </div>
                </div>
            </div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
