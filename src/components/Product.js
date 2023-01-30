// import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import './product.css'

const Product = ({ item }) => {

  return (
    <div>
      <Link to={`/product/${item._id}`}>
        <img className='prod-img' src={item.img} alt='img'/>
      </Link>
      <div className='prod-title'>
        <h2>{item.title}</h2>
        <h2>$ {item.price}</h2>
      </div>
    </div>
  );
};

export default Product;