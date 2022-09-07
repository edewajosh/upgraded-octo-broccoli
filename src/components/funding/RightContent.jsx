import LineChart from "./charts/LineChart"
import PieChart from "./charts/PieChart"

const RightContent = () => {
  return (
    <div className="rightContent">
      <LineChart />
      <PieChart /> 
    </div>
  )
}

export default RightContent