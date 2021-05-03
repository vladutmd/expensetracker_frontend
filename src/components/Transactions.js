import Container from '@material-ui/core/Container'
import TextFieldWithLabel from './form_elements/controlled/TextField'
import { useStateOrLocalStorage } from './hooks'

import TransactionsTable from './TransactionsTable'

const Transactions = ({ transactions, loadingStatus, error }) => {
    const [searchTerm, setSearchTerm] = useStateOrLocalStorage(
        'search',
        ''
    )
    const filterTransactions = event => {
        setSearchTerm(event.target.value)
    };
    const filteredTransactions = transactions.filter(transaction => transaction.name.toLowerCase().includes(searchTerm))
    return (
        <>
            <Container maxWidth="md">
                <TextFieldWithLabel
                    id="transaction_search"
                    label="Search transactions"
                    value={searchTerm}
                    variant="outlined"
                    isFocused={false}
                    onChange={filterTransactions}
                >
                    <strong>Search:</strong>
                </TextFieldWithLabel>

                {searchTerm.length>0 && <p>The search term is currently: {searchTerm}</p>}


                {error && <p>Where's the money Sonny? Please refresh.</p>}
                {loadingStatus
                    ? (<p>Loading your money...</p>)
                    : (<TransactionsTable transactions={filteredTransactions} />)
                }

            </Container>
        </>

    )
};

export default Transactions;