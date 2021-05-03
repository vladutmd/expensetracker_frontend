import Transactions from './Transactions';
import { useEffect, useState } from 'react'

const initialTransactions = [
  {
    id: 1,
    amount: 25.00,
    name: "Rent",
    retailer: "AWS",
    category: "Housing and Utilities",
    date: "2021-03-24 13:42:15",
    currency: "GBP",
    type: "expense",
    recurring: false,
    user: "Vlad"
  },
  {
    id: 2,
    amount: 50.00,
    name: "Celery",
    retailer: "Alphabet",
    category: "Groceries",
    date: "2021-03-23 13:42:15",
    currency: "GBP",
    type: "expense",
    recurring: false,
    user: "Vlad"
  },
  {
    id: 3,
    amount: 75.00,
    name: "PI services",
    retailer: "Nosebook",
    category: "Work",
    date: "2021-03-22 13:42:15",
    currency: "GBP",
    type: "expense",
    recurring: false,
    user: "Vlad"
  },
  {
    id: 4,
    amount: 150.00,
    name: "Salary",
    retailer: "Banana",
    category: "Passive Income",
    date: "2021-03-21 13:42:15",
    currency: "GBP",
    type: "income",
    recurring: true,
    user: "Vlad"
  }
]

// unused currently
// const transactionFields = [
//   'id', 'name',
//   'amount', 'currency',
//   'retailer', 'category',
//   'date', 'type',
//   'recurring', 'user'
// ]

const getAsyncTransactions = () => (
  new Promise(resolve =>
    setTimeout(
      () => resolve({
        data: {
          transactions: initialTransactions,
        }
      }),
      200
    )
  ));



const App = () => {

  const [transactions, setTransactions] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAsyncTransactions().then(result => {
      setTransactions(result.data.transactions)
      setIsLoading(false);
    })
      .catch(() => setIsError(true));
  }, []);

  return (
    <Transactions transactions={transactions} loadingStatus={isLoading} error={isError} />
  )

};

export default App;
