import Button from '@material-ui/core/Button'

const AddTransaction = () => {
    return (
        <>
        <Button variant="contained" color="primary" onClick={() => { alert('clicked') }}>Add Transaction</Button>
        </>
    )
}

export default AddTransaction;
