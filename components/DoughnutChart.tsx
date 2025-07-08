'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {


    const data = {
        labels: ['Bank A', 'Bank B', 'Bank C', 'Bank D'],
        datasets: [{
            label: 'Banks',
            data: [2500, 500, 1500, 1000],
            backgroundColor: [
                '#0179FE',
                '#4da1fe',
                '#80bcff',
                '#e6f2ff'
            ],
            borderWidth: 0,
        }]
    };

    return (
        <>
            <Doughnut data={data}
                options={{
                    cutout: '60%',
                    plugins: {
                        legend: {
                            display: false,
                        }
                    }
                }}
            />
        </>

    )
}

export default DoughnutChart