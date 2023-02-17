import { Radio, ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import LoginDialog from './Login.js';

const Navbar = () => {

    // SHOWING QUANTITY OF PRODUCTS IN CART
    const products = useSelector(state => state.cart.products);
    const [value, setValue] = useState(0);

    const totalProducts = () => {
        let totalprod = 0;
        products.forEach((prod) => totalprod += prod.quantity)
        return totalprod;
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='nav-wrapper'>
            <div className='nav-tabs'>
                <div className='nav-tab'>
                    <Box
                        sx={{
                            flexGrow: 1,
                            maxWidth: { xs: 320, sm: 250 },
                            bgcolor: 'background.paper',
                        }}
                    >
                        <Tabs
                            textColor="secondary"
                            indicatorColor="disabled"
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons
                            aria-label="visible arrows tabs example"
                            sx={{
                                [`& .${tabsClasses.scrollButtons}`]: {
                                    '&.Mui-disabled': { opacity: 0.3 },
                                },
                            }}
                        >
                            <Tab label="Chrome" />
                            <Tab label="Metal" />
                            <Tab label="Ferric" />
                            <Tab label="Philips" />
                            <Tab label="TDK" />
                            <Tab label="Maxell" />
                            <Tab label="Basf" />
                        </Tabs>
                    </Box>
                </div>
            </div>
            <div className='nav-logo'>
                <Link to='/' className='logo'>
                    THE CASSETTE STORE <Radio />
                </Link>
            </div>
            <div className='nav-actions'>
                <Link to='/register' className='link'> REGISTER</Link>
                <LoginDialog />
                <Link to='/cart' className='link'>
                    <Badge badgeContent={totalProducts()} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </Link>
            </div>
        </div>
    )
};

export default Navbar;