'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTheme } from 'next-themes';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const { theme } = useTheme();

    const borderColor = theme === 'dark'
        ? ['#000']
        : ['#fff'];

    const data = {
        labels: ['Bank A', 'Bank B', 'Bank C'],
        datasets: [{
            label: 'Banks',
            data: [10000, 1500, 2000],
            backgroundColor: [
                '#0179FE',
                '#85B7FF',
                '#BED9FF',
            ],
            borderColor,
            borderWidth: 3,
        }]
    };

    return (
        <Doughnut data={data} 
        options={{
            cutout: '60%',
            plugins:{
                legend:{
                    display:false,
                }
            }
        }}
        />
    )
}

export default DoughnutChart