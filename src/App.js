import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

const INITIAL_EXPENSES = [
  {
    id: 0,
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  { id: 1, title: 'Car', amount: 3123.67, date: new Date(2021, 2, 28) },
  { id: 2, title: 'Burger', amount: 24.67, date: new Date(2021, 2, 1) },
  { id: 3, title: 'Books', amount: 200.67, date: new Date(2021, 1, 13) },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} id={expenses[expenses.length - 1].id} />;
    </div>
  );
};

export default App;
