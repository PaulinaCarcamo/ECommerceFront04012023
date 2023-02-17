import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { HomeOutlined, ShoppingBagOutlined, ShoppingCartOutlined, VpnKeyOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import Ads from '../components/Ads';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './success.css'

//SUCCESS PAGE IS SHOWN AFTER A PURCHASE.


const Success = () => {

    const rootRef = React.useRef(null);

    const [order, setOrder] = React.useState("");

    return (
        <div>
            <Ads />
            <Navbar />
            <div className="success-container">
                {/* <div className="success-wrapper">
                    <h2>THANK YOU FOR YOUR PURCHASE!</h2>
                    <span><Mood /></span>
                    <span><ThumbUpOffAlt /></span>
                    <div>
                        <Link to='/allproducts'>
                            <button>KEEP BUYING TAPES!</button>
                        </Link>
                    </div>
                </div> */}
                <Box
                    sx={{
                        height: 100,
                        flexGrow: 1,
                        minWidth: 300,
                        transform: 'translateZ(1)',
                        '@media all and (-ms-high-contrast: none)': {
                            display: 'none',
                        },
                    }}
                    ref={rootRef}
                >
                    <Modal
                        disablePortal
                        disableEnforceFocus
                        disableAutoFocus
                        open
                        aria-labelledby="server-modal-title"
                        aria-describedby="server-modal-description"
                        sx={{
                            display: 'flex',
                            p: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        container={() => rootRef.current}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                width: 400,
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: (theme) => theme.shadows[5],
                                p: 4,
                            }}
                        >
                            <div className='modal-desc'>
                                <div>
                                    <Typography id="server-modal-title" variant="h6" component="h2">
                                        Thank you for your purchase!
                                    </Typography>

                                    <Typography id="server-modal-description" sx={{ pt: 2 }}>
                                        Click on the options in this menu to stay in our website.
                                    </Typography>
                                </div>
                                <div className='actions-links'>
                                    <Link to='/' className='txt-flex'>
                                        <HomeOutlined />
                                        TO HOME PAGE
                                    </Link>
                                    <Link to='/allproducts' className='txt-flex'>
                                        <ShoppingBagOutlined />
                                        KEEP SHOPPING
                                    </Link>

                                    <Link to='/cart' className='txt-flex'>
                                        <ShoppingCartOutlined />
                                        CHECK OUT CART
                                    </Link>
                                    <Link to='/' className='txt-flex'>
                                        <VpnKeyOutlined />
                                        GO TO LOGIN
                                    </Link>
                                </div>


                                {/* const order = await actions.order.capture()
                    console.log("order", order);
                    handleApprove(data.orderID) */}

                    <div>{order}</div>


                            </div>
                        </Box>
                    </Modal>
                </Box>
            </div>
            <Footer />
        </div >
    )
};

export default Success;