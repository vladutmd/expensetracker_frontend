import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const TransactionsTable = ({ transactions }) => {

    // TODO: extract the fields (of interest) so that only certain
    // fields are displayed in the table below
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Currency</TableCell>
                        <TableCell align="right">Retailer</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                            <TableCell component="th" scope="row">
                                {transaction.id}
                            </TableCell>
                            <TableCell align="right">{transaction.name}</TableCell>
                            <TableCell align="right">{transaction.amount}</TableCell>
                            <TableCell align="right">{transaction.currency}</TableCell>
                            <TableCell align="right">{transaction.retailer}</TableCell>
                            <TableCell align="right">{transaction.category}</TableCell>
                            <TableCell align="right">{transaction.date}</TableCell>
                            <TableCell align="right">{transaction.type}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default TransactionsTable;



