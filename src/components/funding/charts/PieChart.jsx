import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    datasets: [
      {
        label: '# of Votes',
        data: [2100000, 1900000],
        backgroundColor: [
          'rgba(254,170,0,255)',
          'rgba(229,229,228,255)',
        ],
        borderColor: [
          'rgba(254,170,0,255)',
          'rgba(229,229,228,255)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='pie'>
      <div className='title'>
        <h3 className='textbold'>Diaspora SME Loan</h3>
        <p className='para'>Active</p>
      </div>
      <Pie data={data} />

      <div className='piedescription amount'><h5>KES 1,900,000</h5></div>
      <div className='piedescription loan'><h5>KES 2,100,000</h5></div>
      <div className='piefooter'>
        <div className='loanBalance'>
          <div className='cirlceCygan'></div>
          <p>Loan balance</p>
        </div>
        <div className='loanBalance'>
          <div className='circle'></div>
          <p>Amount repaid</p>
        </div>
      </div>
    </div>
  )
}

export default PieChart