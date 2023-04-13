import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/transactions/TransactionList";
import { TransactionForm } from "./components/transactions/TransactionForm";
import Dollar from './assets/unnamed.png'

function App() {
  return (
    <GlobalProvider>
      <div className="bg-[#1a1919] text-white h-screen flex justify-center items-center">
        <div className="container mx-auto flex justify-center items-center">
          <div className="bg-[#727081] p-10 rounded-lg flex flex-col md:flex-row justify-between">
            <div className="flex-1">
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex-1 flex flex-col">
              <img src={Dollar} alt="money" />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
