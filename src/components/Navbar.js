import { Link } from 'react-router-dom';
import { AddReaction, Radio, ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';

import { useSelector } from 'react-redux';
import './navbar.css';

import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Navbar = () => {
    // SHOWING QUANTITY OF PRODUCTS IN CART
    const products = useSelector(state => state.cart.products);
    const [open, setOpen] = useState(false);

    const totalProducts = () => {
        let totalprod = 0;
        products.forEach((prod) => totalprod += prod.quantity)
        return totalprod;
    };

    const openDialog = () => {
        setOpen(true);
    };
    const closeDialog = () => {
        setOpen(false);
    };

    return (
        <div className='nav-container'>
            <div className='nav-wrapper'>
                <div className='nav-left'>
                    <div className='nav-lang'>
                        EN
                    </div>
                    <div className='nav-search'>
                        <input className='nav-input' disabled placeholder='WE HAVE DISCOUNTS!'>
                        </input>
                        <div className='nav-searchIcon'>
                            <AddReaction style={{ color: "grey" }} />
                        </div>
                    </div>
                </div>
                <div className='nav-center'>
                    <Link to='/' className='logo'>
                        THE CASSETTE STORE <Radio />
                    </Link>
                </div>
                <div className='nav-right'>
                    <div className='link' onClick={openDialog}>REGISTER</div>
                    {/* <Link to='/register' className='link'> REGISTER</Link> */}
                    <Link to='/login' className='link'> LOGIN </Link>
                    <Link to='/cart' className='link'>
                        <Badge badgeContent={totalProducts()} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </Link>
                </div>
            </div>
            <div>
                <Dialog open={open} onClose={closeDialog}>
                    <DialogTitle>CREATE YOUR ACCOUNT</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To register to this website, please enter your name and email address here. We
                            will send updates of our products occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="name"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeDialog}>Cancel</Button>
                        <Button onClick={closeDialog}>Register</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
};

export default Navbar;