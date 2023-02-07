import { DeleteForever, RemoveCircleOutlineRounded, AddCircleOutlineRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { removeProduct, incrementQuantity, decrementQuantity } from '../redux/cartRedux.js';
import PaypalCheckout from '../components/PaypalCheckout.js'
import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import './cart.css';

//SHOPPING CART SHOWS PRODUCTS SELECTED AND SUMMARY OF THE ORDER MADE BY USER.

const Cart = () => {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.price));
        return total;
    };

    return (
        <div>
            <Navbar />
            <Ads />
            <div>
                <div className='cart-wrapper'>
                    <h1>YOUR CART</h1>
                    <div className='cart-links'>
                        <Link to='/allproducts' className='link'>KEEP SHOPPING</Link>
                        <Link to='/' className='link'>TO HOME PAGE</Link>
                    </div>
                    <div className='cart-sections'>
                        <div className='cart-elements'>
                            {products?.map((item) => (
                                <div className='cart-prod'>
                                    <div className='prod-details'>
                                        <Link to={`/product/${item.id}`}>
                                            <img className='cart-prod-img' alt='img' src={item.img} />
                                        </Link>
                                        <div className='prod-name-id'>
                                            <span><b>Product: </b>{item.title}</span>
                                            <span><b>ID: </b>{item.id}</span>
                                        </div>
                                    </div>
                                    <div className='price'><h2>$ {item.price}</h2></div>

                                    <div className='bag-del'>
                                        <h3 onClick={() => dispatch(decrementQuantity(item.id))}><RemoveCircleOutlineRounded /></h3>
                                        <h3>{item.quantity}</h3>
                                        <h3 onClick={() => dispatch(incrementQuantity(item.id))}><AddCircleOutlineRounded /></h3>
                                        {/* <p className='bag'>
                                            <Badge badgeContent={item.quantity} color="primary">
                                                <ShoppingBagOutlined />
                                            </Badge>
                                        </p> */}
                                        <p className='del'>
                                            <DeleteForever onClick={() =>
                                                dispatch(removeProduct(item.id))}>
                                            </DeleteForever>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='order'>
                            <h2>Order Summary</h2>
                            <div className='order-details'>
                                <span>Subtotal</span>
                                <span>$ {totalPrice()}</span>
                            </div>
                            <div className='order-details'>
                                <span>Handling + shipping</span>
                                <span>$ 50</span>
                            </div>
                            <div className='order-details'>
                                <span>Special discount</span>
                                <span>$ -50</span>
                            </div>
                            <div className='order-details'>
                                <span>Total</span>
                                <span>$ {totalPrice()}</span>
                            </div>
                            <PaypalCheckout product={totalPrice()} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Cart;