import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './paypalCheckout.css';

const PaypalCheckout = (props) => {
    const { product } = props
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    // CALL BACKEND FUNCTION TO FULFILL ORDER
    const handleApprove = (orderID) => {
        setPaidFor(true)
    }

    if (paidFor) {
        navigate("/success", { replace: true })
    }

    if (error)
        alert(error)


    return (
        <PayPalScriptProvider options={{
            "client-id": 'Aa7XBjPY3TRPCsKfu_Wzam9g06BfA2IfqR6WtAtvXfHtgyMvA-WDyzzzCqqXpplGs-JHV6dq8kegaq9J',
            //DISABLE CREDIT CARD PAYMENT OPTION: 'disable-funding': 'card'
        }}
        >
            <PayPalButtons
                style={{
                    layout: 'horizontal',
                }}

                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: product
                                }
                            }
                        ]
                    })
                }}
                onApprove={async (data, actions) => {
                    const order = await actions.order.capture()

                    console.log("order", order);
                    handleApprove(data.orderID)
                }}
                onError={(err) => {
                    setError(err)
                    console.log("Paypal checkout onError", err);
                }}
            />
        </PayPalScriptProvider>
    )
};

export default PaypalCheckout;