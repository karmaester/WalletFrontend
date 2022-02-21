import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import { getUserState } from "../../redux/User/user.selectors";

const TransactionForm = ({ price }) => {
    const user = useSelector(getUserState);
    const [toCurrency, setToCurrency] = useState("Bitcoin");
    const [amount, setAmount] = useState(0);
    const [numberedPrice, setNumberedPrice] = useState(0);
    const [transactionsPrice, setTransactionsPrice] = useState(0);
    const [error, setError] = useState(false);

    if (price !== undefined && numberedPrice === 0) {
        setNumberedPrice(parseFloat(price.replace(/,/g, '')))
    }

    const calculateTransactionPrice = (toCurrency, amount, numberedPrice) => {
        if (toCurrency === "Bitcoin") {
            console.log("calculateTransactionPrice: " + amount * numberedPrice);
            setTransactionsPrice(amount * numberedPrice);
        } else {
            console.log("calculateTransactionPrice: " + amount / numberedPrice);
            setTransactionsPrice(amount / numberedPrice);
        }
    };

    const validateTransaction = (transactionsPrice, toCurrency) => {
        const mapper = {
            "Bitcoin": "dollar_balance",
            "Dollar": "bitcoin_balance",
        }
        console.log("User balance for transaction is: ")
        console.log(parseFloat(user.user[mapper[toCurrency]]));
        console.log("Price for transaction is: ", transactionsPrice);
        user.user[mapper[toCurrency]] >= transactionsPrice ? setError(false) : setError(true);
    };

    useEffect(() => {
        calculateTransactionPrice(toCurrency, amount, numberedPrice);
    }, [toCurrency, amount, numberedPrice, error]);

    useEffect(() => {
        validateTransaction(transactionsPrice, toCurrency);
    }, [transactionsPrice, toCurrency]);



    const handleSubmit = (event) => {
        event.preventDefault();
        if (error) {
            alert("Insufficient funds");
            return;
        }
        axios
            .post(
                "http://localhost:3001/transactions",
                {
                    transaction: {
                        user_id: user.user.id.toString(),
                        to_currency: "Dollar",
                        sending_amount: 0.001,
                        receiving_amount: 10
                    },
                }
            )
            .then((response) => {
                if (response.data.status === "created") {
                    console.log("transaction created");
                    alert("Transaction created");
                    setAmount(0);
                }
            })
            .catch((err) => {
                console.log("registration error", err);
            });
    }

    return (
        <div>
            <form className="">
                <label for="currency">Moneda a comprar</label>
                <select name="currency" id="currency" onChange={(e) => setToCurrency(e.target.value)}>
                    <option value="Bitcoin">BTC</option>
                    <option value="Dollar">USD</option>
                </select>
                <input
                    label="Comprar"
                    name="amount"
                    type="number"
                    placeholder="Monto a comprar"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <br />
                <button onClick={handleSubmit}>
                    Comprar
                </button>
            </form>
        </div>
    )
}

export default TransactionForm