import { useLocation } from 'react-router';
import { useState } from 'react';

import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Products from '../components/Products.js';
import Footer from '../components/Footer.js';

//THIS PAGE SHOWS PRODUCTS CLASSIFIED INTO THEIR OWN CATEGORIES. PRODUCTS CAN BY FILTERED AND SORTED BY BRAND AND PRICE.

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

  const resetFilters = () => {
    const initialState = {
      ...filters === null
    }
    setFilters(initialState)
  };

  return (
    <div>
      <Navbar />
      <Ads />
      <h1>OUR PRODUCTS</h1>
      <div className='filter-wrapper'>
        <div className='all-filters'>
          <div>
            <select className='select-options' name='brand' onChange={filterItems}>
              <option disabled selected>Brand</option>
              <option>Philips</option>
              <option>TDK</option>
              <option>Basf</option>
              <option>Maxell</option>
            </select>
          </div>
          <div>
            <select className='select-options' onChange={(e) => setSort(e.target.value)}>
              <option disabled selected>Price</option>
              <option value='asc'>Low</option>
              <option value='desc'>High</option>
            </select>
          </div>
        </div>
        <div>
          <div className='btn-reset'>
            <button onClick={resetFilters} > Reset Filters </button>
          </div>
          <div className='hidden-btn-reset'>
            <span onClick={resetFilters}>RESET</span>
          </div>
        </div>
      </div>
      <Products categ={categ} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

export default CategProducts;