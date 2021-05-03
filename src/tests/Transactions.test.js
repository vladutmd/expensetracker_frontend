import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import sampleTransactions from './sampletransactions';
import Transactions from '../components/Transactions';

describe('Transactions component', () => {
    test('Tests if while loading no transactions show.', () => {
        const transactions = sampleTransactions;
        const loadingStatus = true;
        const error = null;
        render(<Transactions transactions={transactions} loadingStatus={loadingStatus} error={error} />);
        // since the loading status is on, it should have the searchfield, the <p> with search term
        // and the Loading your money... loadingStatus
        const searchField = screen.getByLabelText('Search transactions');
        expect(searchField).toBeInTheDocument();
        const youBetterHaveMyMoney = screen.queryByText(/Loading your/i);
        expect(youBetterHaveMyMoney).toBeInTheDocument();
        const noTransactions = screen.queryByText(/Salary/i);
        expect(noTransactions).not.toBeInTheDocument();
        const searchTermContent = screen.queryByText(/The search term is currently/i);
        expect(searchTermContent).not.toBeInTheDocument();
    });
    test('Tests if there is an error no transactions show.', () => {
        const transactions = sampleTransactions;
        const loadingStatus = true;
        const error = true;
        render(<Transactions transactions={transactions} loadingStatus={loadingStatus} error={error} />);
        // since there is an error, we should see <p>There has been a problem.
        const wheresTheMoneySonny = screen.queryByText(/Where's the money Sonny\?/i);
        expect(wheresTheMoneySonny).toBeInTheDocument();
    });
    test('Tests if typing in the search field causes the search term to update.', () => {
        const transactions = sampleTransactions;
        const loadingStatus = false;
        const error = null;
        render(<Transactions transactions={transactions} loadingStatus={loadingStatus} error={error} />);
        // the search field is currently empty
        const searchInput = screen.getByLabelText("Search transactions");
        expect(searchInput).toBeInTheDocument();
        const searchTermContent = screen.queryByText(/The search term is currently/i);
        expect(searchTermContent).not.toBeInTheDocument();

        // there should be 3 expenses and 1 income
        const expenses = screen.queryAllByText(/expense/i);
        expect(expenses.length).toEqual(3);
        const incomes = screen.queryAllByText(/income/);
        expect(incomes.length).toEqual(1);

        userEvent.type(searchInput, "hi");
        const searchTermHi = screen.queryByText(/The search term is currently: hi/i);
        expect(searchTermHi).toBeInTheDocument();
        // check that no transactions are shown, i.e. 0 expenses, 0 incomes
        const newExpenses = screen.queryAllByText(/expense/i);
        expect(newExpenses.length).toEqual(0);
        const newIncomes = screen.queryAllByText(/income/);
        expect(newIncomes.length).toEqual(0);
    });
})

