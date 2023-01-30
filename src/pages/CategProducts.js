import { useLocation } from 'react-router';
import { useState } from 'react';

import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Products from '../components/Products.js';
import Footer from '../components/Footer.js';
import './categProducts.css'

//Products categorized. Shows products classified into their own categories.

const CategProducts = () => {
  const location = useLocation();
  const categ = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState();

  const filterItems = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <Navbar />
      <Ads />
      <h1>OUR PRODUCTS</h1>
      <div className='filter-wrapper'>
        <div>
          <div>Filter By Brand</div>
          <select className='select-options' name='brand' onChange={filterItems}>
            <option disabled selected>Brand</option>
            <option>Philips</option>
            <option>Sony</option>
            <option>TDK</option>
            <option>Basf</option>
            <option>Maxell</option>
          </select>
        </div>
        <div>
          <div>Sort By Price</div>
          <select className='select-options' onChange={(e) => setSort(e.target.value)}>
            <option disabled selected>Price</option>
            <option value='asc'>Low</option>
            <option value='desc'>High</option>
          </select>
        </div>
      </div>
      <Products categ={categ} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

export default CategProducts;