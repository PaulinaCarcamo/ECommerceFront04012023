// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import './paypalCheckout.css';

// const PaypalCheckout = (props) => {
//     const { product } = props
//     const [paidFor, setPaidFor] = useState(false)
//     const [error, setError] = useState(null)
//     const navigate = useNavigate()



//     // CALL BACKEND FUNCTION TO FULFILL ORDER
//     const handleApprove = (orderID) => {
//         setPaidFor(true);
//     }

//     if (paidFor) {
//         navigate("/success", { replace: true })
//     }

//     if (error)
//         alert(error)

//     return (
//         <PayPalScriptProvider options={{
//             "client-id": 'Aa7XBjPY3TRPCsKfu_Wzam9g06BfA2IfqR6WtAtvXfHtgyMvA-WDyzzzCqqXpplGs-JHV6dq8kegaq9J',
//             //DISABLE CREDIT CARD PAYMENT OPTION: 'disable-funding': 'card'
//         }}
//         >
//             <PayPalButtons
//                 // style={{
//                 //     layout: 'horizontal',
//                 //     color: 'black'
//                 // }}
//                 createOrder={(data, actions) => {
//                     return actions.order.create({
//                         purchase_units: [
//                             {
//                                 amount: {
//                                     value: product
//                                 }
//                             }
//                         ]
//                     })
//                 }}
//                 onApprove={async (data, actions) => {
//                     const order = await actions.order.capture()
//                     console.log("order", order);
//                     handleApprove(data.orderID)
//                 }}

//                 onError={(err) => {
//                     setError(err)
//                     console.log("Paypal checkout onError", err);
//                 }}
//             />
//         </PayPalScriptProvider>
//     )
// };

// export default PaypalCheckout;

import { Close } from '@mui/icons-material';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './paypalCheckout.css';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

const PaypalCheckout = (props) => {

    const { product } = props
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)
    // const navigate = useNavigate()

    const [open, setOpen] = useState(false);

   

    // CALL BACKEND FUNCTION TO FULFILL ORDER
    const handleApprove = (orderID) => {
        setPaidFor(true);
    }

    // if (paidFor) {
    //     navigate("/success", { replace: true })
    //         }

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

                    const order = await actions.order.capture();
                    console.log("order", order);
                    openSnackbar();

                    const payer = order.payer.name.given_name;
                    const surname = order.payer.name.surname;
                    const status = order.status;
                    const orderid = order.id;
                    const purchase = JSON.stringify(order.purchase_units);
                    const purchase_units = JSON.parse(purchase);

                    // alert(
                    //     "Thank you for your purchase " + `${payer}` + " " + `${surname}` + " "
                    //     + "Your order has been: " + `${status}` + " "
                    //     + "This is your purchase " + " " + `${orderid}`
                    //     + "TOTAL PRICE: " + " " + `${purchase_units[0].amount.value}` + " "
                    //     + "SENDING PRODUCTS TO: " + `${purchase_units[0].shipping.address.address_line_1}`
                    // )

                    // <Box
                    //     sx={{
                    //         height: 100,
                    //         flexGrow: 1,
                    //         minWidth: 300,
                    //         transform: 'translateZ(1)',
                    //         '@media all and (-ms-high-contrast: none)': {
                    //             display: 'none',
                    //         },
                    //     }}
                    //     ref={rootRef}
                    // >
                    //     <Modal
                    //         disablePortal
                    //         disableEnforceFocus
                    //         disableAutoFocus
                    //         open
                    //         aria-labelledby="server-modal-title"
                    //         aria-describedby="server-modal-description"
                    //         sx={{
                    //             display: 'flex',
                    //             p: 1,
                    //             alignItems: 'center',
                    //             justifyContent: 'center',
                    //         }}
                    //         container={() => rootRef.current}
                    //     >
                    //         <Box
                    //             sx={{
                    //                 position: 'relative',
                    //                 width: 400,
                    //                 bgcolor: 'background.paper',
                    //                 border: '2px solid #000',
                    //                 boxShadow: (theme) => theme.shadows[5],
                    //                 p: 4,
                    //             }}
                    //         >
                    //             <div className='modal-desc'>
                    //                 <div>
                    //                     <Typography id="server-modal-title" variant="h6" component="h2">
                    //                         Thank you for your purchase!
                    //                     </Typography>

                    //                     <Typography id="server-modal-description" sx={{ pt: 2 }}>
                    //                         Click on the options in this menu to stay in our website.
                    //                     </Typography>
                    //                 </div>
                    //                 <div className='actions-links'>
                    //                     <Link to='/' className='txt-flex'>
                    //                         <HomeOutlined />
                    //                         TO HOME PAGE
                    //                     </Link>
                    //                     <Link to='/allproducts' className='txt-flex'>
                    //                         <ShoppingBagOutlined />
                    //                         KEEP SHOPPING
                    //                     </Link>

                    //                     <Link to='/cart' className='txt-flex'>
                    //                         <ShoppingCartOutlined />
                    //                         CHECK OUT CART
                    //                     </Link>
                    //                     <Link to='/' className='txt-flex'>
                    //                         <VpnKeyOutlined />
                    //                         GO TO LOGIN
                    //                     </Link>

                    //                     <div>

                    //                         <Typography id="server-modal-title" variant="h6" component="h2">
                    //                             This is your order
                    //                         </Typography>

                    //                         <Typography id="server-modal-description" sx={{ pt: 2 }}>

                    //                             Thank you for your purchase {payer} {surname}. Your order has been {status}.
                    //                             This is your purchase {orderid}. Total Price: {purchase_units[0].amount.value}.
                    //                             Sending to: {purchase_units[0].shipping.address.address_line_1}.

                    //                         </Typography>

                    //                     </div>
                    //                 </div>


                    //                 {/* const order = await actions.order.capture()
                    //         console.log("order", order);
                    //         handleApprove(data.orderID) */}


                    //             </div>
                    //         </Box>
                    //     </Modal>
                    // </Box>
                }}

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
            autoHideDuration={3000}
            message={(
                // "Thank you for your purchase " + `${payer}` + " " + `${surname}` + " "
                // + "Your order has been: " + `${status}` + " "
                // + "This is your purchase " + " " + `${orderid}`
                // + "TOTAL PRICE: " + " " + `${purchase_units[0].amount.value}` + " "
                // + "SENDING PRODUCTS TO: " + `${purchase_units[0].shipping.address.address_line_1}`

                "PAID PURCHASE"

            )}
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