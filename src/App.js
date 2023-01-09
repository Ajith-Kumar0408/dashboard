
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard/>
       <SummaryBox/>
       <SummaryBox/>
       <SummaryBox/>
       <SummaryBox/>
    </div>
  );
}
function Dashboard() {
 return<h1>welcome</h1>;
}

function SummaryBox(){
  const dataList = [
    {
      number: 568,
      percent: 0.7,
      icon: faChartLine,
      text: "Number Of Sales",
      time: "Last Month",
      iconColor: "rgb(135, 96, 251)",
      performance: "up",
      type: "count"
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "#eb6f33",
      performance: "down",
      type: "money"
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "#03c895",
      performance: "down",
      type: "money"
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "#01b8ff",
      performance: "up",
      type: "money"
    }
  ];
  return <div className="summary-box-container">
    <div class="summary-box-spec">
      <p className="summary-box-text">{dataList.text}</p>
    </div>
    <h2 className="summary-box-number">{dataList.number}</h2>
    <div className="summary-box-time-container">
    <p>{dataList.time}</p>
    <p>{dataList.percent}</p>

    </div>
  </div>
}

export default App;
