import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { Close } from '@mui/icons-material';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './paypalCheckout.css';

const PaypalCheckout = (props) => {

    const { product } = props
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)
    // const navigate = useNavigate()

    const [open, setOpen] = useState(false);

    // CALL BACKEND FUNCTION TO FULFILL ORDER
    // const handleApprove = (orderID) => {
    //     setPaidFor(true);
    // }

    // if (paidFor) {
    //     navigate("/success", { replace: true })
    //         }

    const [data, setData] = useState()

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: product,
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            // const name = details.payer.name.given_name;
            const payer = details.payer.name.given_name;
            const surname = details.payer.name.surname;
            const status = details.status;
            const orderid = details.id;
            const purchase = JSON.stringify(details.purchase_units);
            const purchase_units = JSON.parse(purchase);
            console.log(details);

            alert(
                "Thank you for your purchase " + `${payer}` + " " + `${surname}` + " || "
                + "Your order has been: " + `${status}` + " || "
                + "This is your id purchase: " + " " + `${orderid}` + " || "
                + "TOTAL PRICE: " + " $ " + `${purchase_units[0].amount.value}` + " || "
                + "SENDING PRODUCTS TO: " + `${purchase_units[0].shipping.address.address_line_1}` + " || "
                + "REGION: " + `${purchase_units[0].shipping.address.admin_area_2}`
            );

            openSnackbar();
            // setData(purchase_units[0].shipping.name.full_name)
            setData(payer + " " + surname + " " + status)
            console.log(data);
        });
    }

    if (error)
        alert(error)

    const openSnackbar = () => {
        setOpen(true);
    };

    const closeSnackbar = (event, reason) => {
        if ("clickaway" === reason) return;
        setOpen(false);
    };

    return (
        <PayPalScriptProvider options={{
            "client-id": 'Aa7XBjPY3TRPCsKfu_Wzam9g06BfA2IfqR6WtAtvXfHtgyMvA-WDyzzzCqqXpplGs-JHV6dq8kegaq9J',
            //DISABLE CREDIT CARD PAYMENT OPTION: 'disable-funding': 'card'
        }}
        >
            <PayPalButtons
                // style={{
                //     layout: 'horizontal',
                //     color: 'black'
                // }}
                createOrder={(data, actions) => onCreateOrder(data, actions)}
                onApprove={(data, actions) => onApproveOrder(data, actions)}
                onError={(err) => {
                    setError(err)
                    console.log("Paypal checkout onError", err);
                }}
            />

            {!paidFor &&


                    <Snackbar
                        anchorOrigin={{
                            horizontal: "left",
                            vertical: "bottom",
                        }}
                        ContentProps={{
                            sx: {
                                background: "purple"
                            }
                        }}
                        open={open}
                        // autoHideDuration={5000}
                        message={("PURCHASE SUCCESSFULLY COMPLETED", `${data}`)}
                        onClose={closeSnackbar}
                        action={
                            <div>
                                <IconButton
                                    size="small"
                                    aria-label="close"
                                    color="inherit"
                                    onClick={closeSnackbar}
                                >
                                    <Close fontSize="small" />
                                </IconButton>
                            </div>
                        }
                    />

            }
        </PayPalScriptProvider>
    )
};

export default PaypalCheckout;