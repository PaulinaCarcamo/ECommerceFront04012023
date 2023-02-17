import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState } from 'react';
import { CheckCircleOutlineOutlined, Home, ShoppingBag, ShoppingCart, VpnKey } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

// import { resetCart } from '../redux/cartRedux.js';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import './paypalCheckout.css';

const PaypalCheckout = (props) => {

    const { product } = props
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)
    const [open, setOpen] = useState(false);
    const [data, setData] = useState()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const navigate = useNavigate()
    // const dispatch = useDispatch();

    // const [open, setOpen] = useState(false);

    // CALL BACKEND FUNCTION TO FULFILL ORDER
    // const handleApprove = (orderID) => {
    //     setPaidFor(true);
    // }

    // if (paidFor) {
    //     navigate("/success", { replace: true })
    //         }

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
            const payer = details.payer.name.given_name;
            const surname = details.payer.name.surname;
            const status = details.status;
            const orderid = details.id;
            const purchase = JSON.stringify(details.purchase_units);
            const purchase_units = JSON.parse(purchase);
            console.log(details);

            handleOpen();
            // setData(purchase_units[0].shipping.name.full_name)
            // setData(details)
            setData(
                "Thank you for your purchase " + payer + " " + surname + ". "
                + "Your order has been " + status + ". "
                + "Order ID: " + orderid + ". "
                + "Total price: $" + purchase_units[0].amount.value + ". "
                + "Address: " + purchase_units[0].shipping.address.address_line_1 + ", "
                + purchase_units[0].shipping.address.admin_area_2
            )
            console.log(data);
        });
    }

    if (error)
        alert(error)

    return (
        <PayPalScriptProvider options={{
            "client-id": 'Aa7XBjPY3TRPCsKfu_Wzam9g06BfA2IfqR6WtAtvXfHtgyMvA-WDyzzzCqqXpplGs-JHV6dq8kegaq9J',
            //DISABLE CREDIT CARD PAYMENT OPTION: 'disable-funding': 'card'
        }}>
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
                }} />

            {!paidFor &&
                <div>
                    {/* <Link onClick={handleOpen} classname='link'>RESET CART</Link> */}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className='box'>
                            <div>

                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    DONE <CheckCircleOutlineOutlined style={{ color: "green" }} />
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    {data}
                                </Typography>
                            </div>
                            <div className='checkout-icons'>

                                <Link to='/' className='checkout-icon'>
                                    <Home />
                                    Home
                                </Link>
                                <Link to='/allproducts' className='checkout-icon' >
                                    <ShoppingBag />
                                    Shop
                                </Link>
                                <Link onClick={handleClose} className='checkout-icon'>
                                    <ShoppingCart />
                                    Cart
                                </Link>
                                <Link to='/' className='checkout-icon'>
                                    <VpnKey />
                                    Login
                                </Link>
                            </div>
                        </Box>
                    </Modal>
                </div>
            }
        </PayPalScriptProvider>
    )
};

export default PaypalCheckout;