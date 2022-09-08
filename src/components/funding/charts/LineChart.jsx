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

import { AiFillEye } from 'react-icons/ai';

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
        display: false
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
        label: false,
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
    <div className="lineChart">
      <div className="lineChartTitle">
        <p className="currentLoan">Current Loans</p>
        <p className="privateEquity">Current Private equity</p>
      </div>
      <div className="lineChartAmount">
        <p className="mbecha">KES 3,000,000 <span><AiFillEye /></span></p>
        <p className="deni">Borrowed loan</p>
      </div>
      <Line options={options} data={data}/>
    </div>
  )
}

export default LineChart