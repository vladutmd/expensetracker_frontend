const Transaction = ({ transaction: { id, amount, name, retailer, category, date, currency, type, recurring } }) => {
    return (
        <>
            <p>Transaction {id}:
            <span>{name} for {amount} {currency} @ {retailer}.</span>
                <span>{category}</span>
                <span>{date}</span>
                <span>{type}</span>
            </p>
        </>
    )
}

export default Transaction;
