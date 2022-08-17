import "./App.css";
import Header from "../components/Header/Header";
import Expenses from "../components/Expenses/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense/NewExpense";

function App() {
  return (
    <div className="App">
      <Header />
      <Expenses />
    </div>
  );
}

export default App;
