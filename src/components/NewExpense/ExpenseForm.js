import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isAmountValid, setIsAmountValid] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [isAmountTouched, setIsAmountTouched] = useState(false);
  const [isDateTouched, setIsDateTouched] = useState(false);

  const inputChangeHandler = (key, value) => {
    if (key === 'title') {
      setIsTitleTouched(true);
      if (value === '') {
        setIsTitleValid(false);
      } else {
        setIsTitleValid(true);
      }
      setEnteredTitle(value);
    } else if (key === 'amount') {
      setIsAmountTouched(true);
      if (value === '') {
        setIsAmountValid(false);
      } else {
        setIsAmountValid(true);
      }
      setEnteredAmount(value);
    } else {
      setIsDateTouched(true);
      if (!value) {
        setIsDateValid(false);
      } else {
        setIsDateValid(true);
      }
      setEnteredDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setIsTitleTouched(true);
    setIsAmountTouched(true);
    setIsDateTouched(true);

    if (enteredTitle !== '' && enteredAmount !== '' && enteredDate !== '') {
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };

      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    }
  };

  const showTitleError = !isTitleValid && isTitleTouched;
  const showAmountError = !isAmountValid && isAmountTouched;
  const showDateError = !isDateValid && isDateTouched;

  const invInput = 'new-expense__invalid-input';

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            className={
              showTitleError
                ? 'new-expense__invalid-input'
                : 'new-expense__input'
            }
            type='text'
            value={enteredTitle}
            onChange={(event) =>
              inputChangeHandler('title', event.target.value)
            }
          />
          {showTitleError && (
            <label className='new-expense__invalid-input__feedback'>
              Title is not valid!
            </label>
          )}
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            className={
              showAmountError
                ? 'new-expense__invalid-input'
                : 'new-expense__input'
            }
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={(event) =>
              inputChangeHandler('amount', event.target.value)
            }
          />
          {showAmountError && (
            <label className='new-expense__invalid-input__feedback'>
              Amount is not valid!
            </label>
          )}
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            className={
              showDateError
                ? 'new-expense__invalid-input'
                : 'new-expense__input'
            }
            type='date'
            min='2019-01-01'
            max='2023-12-31'
            value={enteredDate}
            onChange={(event) => inputChangeHandler('date', event.target.value)}
          />
          {showDateError && (
            <label className='new-expense__invalid-input__feedback'>
              Date is not valid!
            </label>
          )}
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
