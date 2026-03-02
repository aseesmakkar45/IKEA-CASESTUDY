import { useState, useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import AnimatedElement from '../components/AnimatedElement';
import { revenueData } from '../data/ikeaData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function RevenueChart() {
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            x: {
                grid: { color: 'rgba(128,128,128,0.1)' },
                ticks: { font: { family: 'Inter', size: 11 }, color: '#888' },
            },
            y: {
                grid: { color: 'rgba(128,128,128,0.1)' },
                ticks: {
                    font: { family: 'Inter', size: 11 },
                    color: '#888',
                    callback: (v) => `€${v}B`
                },
                beginAtZero: false,
                min: 20,
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#003399',
                titleFont: { family: 'Inter' },
                bodyFont: { family: 'Inter' },
                padding: 12,
                cornerRadius: 8,
                callbacks: {
                    label: (ctx) => `Revenue: €${ctx.raw}B`
                }
            }
        },
        elements: {
            line: { borderWidth: 3 },
        }
    };

    return (
        <AnimatedElement variant="scaleIn">
            <div className="card">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">IKEA Group Revenue Trend (2010–2023)</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Source: Inter IKEA Group annual reports. Revenue in billions of euros.</p>
                <Line data={revenueData} options={options} />
            </div>
        </AnimatedElement>
    );
}
