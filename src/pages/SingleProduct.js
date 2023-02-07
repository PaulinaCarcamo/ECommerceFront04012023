import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { addProduct } from '../redux/cartRedux.js';
import { publicRequest } from '../requests/requestMethods.js';
import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import './singleProduct.css';

//THIS PAGE SHOWS ONE PRODUCT, ITS INFORMATION AND PRICE. IT ALSO CONTAINS A BUTTON TO ADD PRODUCTS TO CART.

const Product = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  console.log(setQuantity);

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
      <div className='product'>
        <h2 className='hidden-title'>{product.title}</h2>
        <h2 className='hidden-price'>$ {product.price}</h2>
        <div className='img-wrapper'>
          <img className='product-img' src={product.img} alt='img'>
          </img>
        </div>
        <div className='product-info'>
          <h2>{product.title}</h2>
          <div>{product.desc}</div>
          <div>
            <h2>$ {product.price}</h2>

            <button onClick={() => {
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
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Product;