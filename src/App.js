import Expenses from './components/Expenses/Expenses';
import './App.css';

const App = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Car', amount: 3123.67, date: new Date(2021, 2, 28) },
    { title: 'Burger', amount: 24.67, date: new Date(2021, 2, 1) },
    { title: 'Books', amount: 200.67, date: new Date(2021, 1, 13) },
  ];

  return <Expenses items={expenses} />;
};

export default App;
