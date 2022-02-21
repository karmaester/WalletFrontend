import React from 'react';
import { useState } from 'react';
import axios from "axios";

const TransactionForm = (props) => {
    const [amount, setAmount] = useState(0);
    console.log(props.user.user.id.toString());
    const handleSubmit = (event) => {
        axios
            .post(
                "http://localhost:3001/transactions",
                {
                    transaction: {
                        user_id: props.user.user.id.toString(),
                        from_currency: "Bitcoin",
                        to_currency: "Dollar",
                        sending_amount: 0.001,
                        receiving_amount: 10
                    },
                }
            )
            .then((response) => {
                if (response.data.status === "created") {
                    // props.setUser(response.data.user.user)
                    console.log("transaction created");
                }
            })
            .catch((err) => {
                console.log("registration error", err);
            });
        event.preventDefault();
    }

    return (
        <div>
            <form className="">
                <label for="currency">Moneda a comprar</label>
                <select name="currency" id="currency">
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