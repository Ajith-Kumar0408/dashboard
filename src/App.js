import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <SummaryBox/>
       
    </div>
  );
}
function Dashboard() {
 return<h1>welcome</h1>;
}

function SummaryBox(){
  const data = {
      number: 568,
      percent: 0.7,
      icon: faChartLine,
      text: "Number Of Sales",
      time: "Last Month",
      iconColor: "rgb(135, 96, 251)",
      performance: "up",
      type: "count"
    };
  return ( 
  <div className="summary-box-container">
    <div class="summary-box-spec">
      <p className="summary-box-text">{data.text}</p>
      <p className='summary-box-icon'><FontAwesomeIcon icon= {data.icon}/></p>
    </div>
    <h2 className="summary-box-number">{data.number}</h2>
    <div className="summary-box-time-container">
    <p>{data.time}</p>
    <p>{data.percent}%</p>
    </div>
  </div>
  );
}

export default App;
