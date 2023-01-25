import "./App.css";
import Expense from "./components/Expense";

function App() {
  const expanse = [
    { id: 1, title: "Maruti", price: "500", date: new Date("2022-02-28") },
    { id: 1, title: "TATA", price: "5500", date: new Date("2020-05-12") },
    { id: 1, title: "MG Hactor", price: "2500", date: new Date("1999-04-03") },
    { id: 1, title: "Mahindra", price: "1500", date: new Date("2000-02-24") }
  ];

  return (
    <div className="App">
      <h1>Let's Get Started</h1>
      <Expense item={expanse} />
    </div>
  );
}

export default App;
