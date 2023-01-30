import { Tooltip } from '@mui/material';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { publicRequest } from '../requests/requestMethods.js';

import { addProduct } from '../redux/cartRedux.js';
import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import './singleProduct.css';

//Single product page shows one product, its details, its price and it contains a button to add products to cart.

const Product = () => {

  const location = useLocation()
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

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

            <Tooltip title="+1" placement="bottom-end">
              <button onClick={() => dispatch(addProduct
                ({
                  id: product._id,
                  title: product.title,
                  desc: product.desc,
                  price: product.price,
                  img: product.img,
                  quantity,
                }),
              )}>ADD TO CART</button>
            </Tooltip>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Product;
