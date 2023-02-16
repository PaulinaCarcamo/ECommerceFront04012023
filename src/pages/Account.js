import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { HomeOutlined, ShoppingBagOutlined, ShoppingCartOutlined, VpnKey } from '@mui/icons-material';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Ads from '../components/Ads.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import './account.css';
import { logoutUser } from '../redux/userRedux.js';

//ACCOUNT SHOWS USER INFORMATION AFTER REGISTRATION

const Profile = () => {

    const user = useSelector((state) => state.user.currentUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(logoutUser())
            .then(
                navigate('/', { replace: true })
            )
    }

    return (
        <div>
            <Ads />
            <Navbar />
            <div className='acct-wrapper'>
                <h1>HELLO {user.username}!</h1>
                <div className='acct'>
                    <div className='acct-links-wrapper'>
                        <div>
                            <h2>WELCOME BACK</h2>
                        </div>
                        <div className='acct-links'>
                            <Link to='/allproducts' className='txt-flex'>
                                <ShoppingBagOutlined />
                                KEEP SHOPPING
                            </Link>
                            <Link to='/' className='txt-flex'>
                                <HomeOutlined />
                                TO HOME PAGE
                            </Link>
                            <Link to='/cart' className='txt-flex'>
                                <ShoppingCartOutlined />
                                CHECK OUT CART
                            </Link>
                            <Link className='txt-flex'
                                onClick={() => {
                                    logout();
                                }}
                            >
                                <VpnKey />
                                LOG OUT
                            </Link>
                        </div>
                    </div>

                    <div className='profile'>
                        <h2>Profile</h2>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '35ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                label="Name"
                                id="outlined-size-normal"
                                defaultValue={user.username}
                                inputProps={{ style: { textTransform: "capitalize" } }}
                            />

                            <TextField
                                label="Lastname"
                                id="outlined-size-normal"
                                // defaultValue="Lastname"
                                inputProps={{ style: { textTransform: "capitalize" } }}
                            />

                            <TextField
                                label="Email"
                                id="outlined-size-normal"
                                defaultValue={user.email}
                                disabled
                            />

                            <TextField
                                label="Address"
                                id="outlined-size-normal"
                                // defaultValue="Normal"
                                inputProps={{ style: { textTransform: "capitalize" } }}
                            />

                            <TextField
                                label="City"
                                id="outlined-size-normal"
                                // defaultValue="Normal"
                                inputProps={{ style: { textTransform: "capitalize" } }}
                            />

                            <TextField
                                label="Country"
                                id="outlined-size-normal"
                                // defaultValue="Normal"
                                inputProps={{ style: { textTransform: "capitalize" } }}
                            />
                        </Box>

                        <div>
                            <Button>UPDATE</Button>
                        </div>

                        <h2>Orders</h2>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '35ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Order 1"
                                id="outlined-size-normal"
                                // defaultValue="Normal" 
                                />

                            <TextField label="Order 2"
                                id="outlined-size-normal"
                                // defaultValue="Normal" 
                                />

                            <TextField label="Order 3"
                                id="outlined-size-normal"
                                // defaultValue="Normal"
                                />

                            <TextField label="Order 4"
                                id="outlined-size-normal"
                                // defaultValue="Normal" 
                                />

                        </Box>

                        <h2>Password</h2>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '35ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Current password"
                                id="outlined-size-normal"
                                // defaultValue="Normal" 
                                />

                            <TextField label="New password"
                                id="outlined-size-normal"
                                // defaultValue="Normal" 
                                />
                        </Box>
                        <div>
                            <Button>UPDATE</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Profile;


