import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Inco_Expense from './components/in_expense/inco_expense';
import Transaction from './components/Transactions/transaction';
import Transactions_History from './components/Record/transaction_record';
import { ToastContainer, toast } from 'react-toastify';
import Store from './store/store';
import { Provider } from 'react-redux';
  import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className="App">
      <Provider store={Store}>
      <Header/>
      <Inco_Expense/>
      <Transactions_History />
      <Transaction/>
      </Provider>
      <ToastContainer/>
    </div>
  );
}

export default App;
