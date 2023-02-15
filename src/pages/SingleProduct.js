import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { addProduct } from '../redux/cartRedux.js';
import { publicRequest } from '../requests/requestMethods.js';
import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import { removeProduct, incrementQuantity, decrementQuantity } from '../redux/cartRedux.js';
import './singleProduct.css';
import { AddCircleOutlineRounded, HomeOutlined, RemoveCircleOutlineRounded, ShoppingBag, ShoppingBagOutlined, ShoppingCartOutlined } from '@mui/icons-material';

const Product = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const products = useSelector(state => state.cart.products);

    const increase = () => {
        setQuantity(quantity - 1)
    }

    const decrease = () => {
        setQuantity(quantity + 1)
    }

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch { }
        };
        getProduct();
    }, [id]);

    const openSnackbar = () => {
        setOpen(true);
    };

    const closeSnackbar = (event, reason) => {
        if ("clickaway" === reason) return;
        setOpen(false);
    };


    return (
        <div>
            <Navbar />
            <Ads />
            <div className='product-wrapper'>
                <h2 className='hidden-title'>{product.title}</h2>
                <h2 className='hidden-price'>$ {product.price}</h2>
                <div>
                    <img src={product.img} className='product-img' alt='img'></img>
                </div>
                <div className='product-info'>
                    <h2>{product.title}</h2>
                    <p>{product.desc}</p>
                    <h2>$ {product.price}</h2>
                    <div className='product-actions'>
                        <div>
                            <button
                                onClick={() => {
                                    openSnackbar();
                                    dispatch(addProduct
                                        ({
                                            id: product._id,
                                            title: product.title,
                                            desc: product.desc,
                                            price: product.price,
                                            img: product.img,
                                            quantity,
                                        })
                                    );
                                }}>ADD TO CART</button>

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
                                message={(`"${product.title}" ADDED TO CART`)}
                                onClose={closeSnackbar}

                                action={
                                    <div>
                                        <IconButton
                                            size="small"
                                            aria-label="close"
                                            color="inherit"
                                            onClick={closeSnackbar}
                                        >
                                            <CloseIcon fontSize="small" />
                                        </IconButton>
                                    </div>
                                }
                            />

                        </div>
                        <div className='actions-links'>
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
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product;