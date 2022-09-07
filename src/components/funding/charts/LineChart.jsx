import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      yAxis: {
        grid: {
          display: false
        }
      }
    },
  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [25, 20, 25, 15, 30, 20, ],
        borderColor: 'rgba(254,170,0,255)',
        backgroundColor: 'rgba(254,170,0,255)',
        lineTension: 0.6,
        pointBackgroundColor: "transparent",
        pointBorderColor:  "transparent",
      }
    ],
  };
  return (
    <div>
      <h3>Current Loans</h3>
      <Line options={options} data={data}/>
    </div>
  )
}

export default LineChart