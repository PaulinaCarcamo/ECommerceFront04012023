import { useLocation } from 'react-router';
import { useState } from 'react';

import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import Popular from '../components/Popular.js'
import './allProducts.css'

//THIS PAGE SHOWS ALL PRODUCTS AND CATEGORIES. PRODUCTS CAN BE FILTERED OR SORTED BY BRAND AND PRICE.

const AllProducts = () => {

  const location = useLocation();
  const prods = location.pathname;

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState();

  const filterItems = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  // const initialState = {
  //   ...filters === null
  // };

  // const resetState = () => {
  //   setFilters(initialState);
  // };

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
          <div >

            <div>
              <select className='select-options' name='brand' onChange={filterItems}>
                <option disabled selected>Brand</option>
                <option>Philips</option>
                <option>TDK</option>
                <option>Basf</option>
                <option>Maxell</option>
              </select>
            </div>
          </div>

          <div>
            <select className='select-options' name='categories' onChange={filterItems}>
              <option disabled selected>Type</option>
              <option>Ferric</option>
              <option>Chrome</option>
              <option>Metal</option>
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
          <button onClick={resetFilters} > Reset Filters </button>
        </div>

      </div>
      <Popular prods={prods} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

export default AllProducts;