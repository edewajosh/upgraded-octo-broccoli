import { FiArrowUpRight } from 'react-icons/fi'
import BarChart from './charts/BarChart'

const LeftContent = () => {
  return (
    <div className="leftContent">
        <div className="container">
            <div className="firstcontainer">
                <h2>Get more for funding today!</h2>
                <p>What Kind of funding would you like to get for your business?</p>
                <div className="services">
                    <div className="loan">
                        <h3>Get A Loan</h3>
                        <p className='arrowRight'><FiArrowUpRight/></p>
                    </div>
                    <div className="capital">
                        <h3>Get Private Capital</h3>
                        <p className='arrowRight'><FiArrowUpRight/></p>
                    </div>
                </div>
            </div>
            <div className="secondcontainer">
                <p>Funds statistics</p>
                <div className="privatecapital">
                    <h4>KES 6,690,900</h4>
                    <h5>Total private Capital</h5>
                </div>
                <div className="loanborrowed">
                    <h4>KES 6,690,900</h4>
                    <h5>Total loan borrowed</h5>
                </div>
            </div>
        </div>
        <div className='bar'>
            <BarChart />
        </div>
    </div>
  )
}

export default LeftContent