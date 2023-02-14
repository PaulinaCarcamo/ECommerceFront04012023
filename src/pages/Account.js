import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { HomeOutlined, ShoppingBagOutlined, ShoppingCartOutlined, VpnKey } from '@mui/icons-material';

import Ads from '../components/Ads.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import './account.css';
import { logoutUser } from '../redux/userRedux.js';
import Home from './Home.js';

//ACCOUNT SHOWS USER INFORMATION AFTER REGISTRATION

const Profile = () => {

    const user = useSelector((state) => state.user.currentUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(logoutUser())
        .then(
            navigate('/', {replace: true})
        )
    }

    return (
        <div>
            <div>
                <div>
                    <Ads />
                    <Navbar />
                    <div className='acct-wrapper'>
                        <h1>WELCOME 
                            {user.username}
                        </h1>
                        <div className='profile'>
                            <div className='acct-left'>
                                <div>
                                    <h2>WE ARE GLAD TO SEE YOU AGAIN!</h2>
                                    {/* <h2>{user.username}</h2>
                            <h3>{user.email}</h3> */}
                                </div>
                                <div className='acct-elements'>
                                    {/* <Link to='/allproducts'>
                                <div><button>GO SHOPPING</button></div>
                            </Link> */}
                                    <div className='Actions-links'>
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
                                            }} >
                                            <VpnKey />
                                            LOG OUT
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='acct-right'>
                                <div className='acct-elements'>
                                    <div>
                                        <h2>Profile</h2>
                                        <input className='acct-input'
                                        // disabled placeholder={user.username}
                                        />
                                        <input className='acct-input' placeholder="last name" />
                                        <input className='acct-input'
                                        // disabled placeholder={user.email}
                                        />
                                        <input className='acct-input' placeholder="username" />
                                        <input className='acct-input' placeholder="country" />
                                        <input className='acct-input' placeholder="city" />
                                        <input className='acct-input' placeholder="address" />
                                        <input className='acct-input' placeholder="phone" />
                                    </div>
                                    <div><button>UPDATE</button></div>
                                </div>

                                <div className='acct-elements'>
                                    <div>
                                        <h2>Orders</h2>
                                        <input className='acct-input' placeholder="Order #1" />
                                        <input className='acct-input' placeholder="21/05/2000" />
                                        <input className='acct-input' placeholder="Order #2" />
                                        <input className='acct-input' placeholder="09/07/3000" />
                                        <input className='acct-input' placeholder="Order #3" />
                                        <input className='acct-input' placeholder="15/09/1999" />
                                    </div>
                                </div>

                                <div className='acct-elements'>
                                    <div>
                                        <h2>Password</h2>
                                        <input className='acct-input' placeholder="password" />
                                        <input className='acct-input' placeholder="new password" />
                                    </div>
                                    <div><button>UPDATE</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
};

export default Profile;


