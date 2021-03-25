// import Button from '@material-ui/core/Button';
import Transaction from './transaction'
// import AddTransaction from './AddTransaction'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField';
import { useState } from 'react'





// const Filter 

const App = () => {
  const transactions = [
    {
      id: 1,
      amount: 25.00,
      name: "Rent",
      retailer: "AWS",
      category: "Housing and Utilities",
      date: "2021-03-24 13:42:15",
      currency: "GBP",
      type: "expense",
      recurring: false
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
      recurring: false
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
      recurring: false
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
      recurring: true
    }
  ]
  const [searchTerm, setSearchTerm] = useState('')

  const filterTransactions = event => {
    setSearchTerm(event.target.value)
  };
  const filteredTransactions = transactions.filter(transaction => transaction.name.includes(searchTerm))

  return (
    <div className="App">
      <Container maxWidth="md">
      {/* <p>You spent too much already.</p> */}
      {/* <AddTransaction /> */}
      <form noValidate autoComplete="off">
      <TextField
       id="outlined-basic"
       label="Search transactions"
       variant="outlined"
       onChange={filterTransactions}
       />
      </form>
      <p>The search term is currently {searchTerm}</p>
      {filteredTransactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}

      </Container>
    </div>
  );
}

export default App;
