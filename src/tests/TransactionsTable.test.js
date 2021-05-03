import { render, screen } from '@testing-library/react';
import TransactionsTable from '../components/TransactionsTable';
import sampleTransactions from './sampletransactions';


describe('TransactionsTable component', () => {
  test('Tests that the transactions appear in the table.', () => {
    const transactions = sampleTransactions;
    render(<TransactionsTable transactions={transactions}/>);
    // check if you can see the initial transactions
    const realTransactionRow = screen.getByText(/Housing/i);
    expect(realTransactionRow).toBeInTheDocument();
    const fakeTransactionRow = screen.queryByText(/MJ/i)
    expect(fakeTransactionRow).not.toBeInTheDocument();
  });
})



  