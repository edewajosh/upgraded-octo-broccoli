import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
const BarChart = () => {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const data = {
        labels,
        datasets: [
          {
            label: 'KES 640,000',
            data:  [100, 100, 100, 100, 50, 70, 45, 70, 100, 100, 100, 100],
            backgroundColor: ['#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#ffaa03', '#ffaa03',
                                '#ffaa03', '#ffaa03', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7'],
          }
        ],
      };

    const options = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            }
        },
        scales: {
            xAxis: {
                grid: {
                  display: false
                }
            },
            yAxis: {
                grid: {
                  display: false
                },
                display: false
            }
        }

    };
    return (
        <div className="barchart">
            <h3>Loan History</h3>
            <Bar options={options} data={data} />
        </div>
    )
}

export default BarChart