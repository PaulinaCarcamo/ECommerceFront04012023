import { Link } from 'react-router-dom';
import { AddReaction, Radio, ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

import './navbar.css';
import LoginDialog from './Login';

const Navbar = () => {
    // SHOWING QUANTITY OF PRODUCTS IN CART
    const products = useSelector(state => state.cart.products);

    const totalProducts = () => {
        let totalprod = 0;
        products.forEach((prod) => totalprod += prod.quantity)
        return totalprod;
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
                    <Link to='/register' className='link'> REGISTER</Link>
                    <LoginDialog />
                    <Link to='/cart' className='link'>
                        <Badge badgeContent={totalProducts()} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Navbar;