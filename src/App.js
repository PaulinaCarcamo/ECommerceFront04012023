import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';

import Home from './pages/Home.js';
import AllProducts from './pages/AllProducts.js';
import CategProducts from './pages/CategProducts.js';
import Product from './pages/SingleProduct.js';
import Cart from './pages/Cart.js';
import Register from './pages/Register.js';
import Account from './pages/Account.js';
import Success from './pages/Success.js';
import './App.css';

const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/allproducts' element={<AllProducts />} />
            <Route path='/category/:categories' element={<CategProducts />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='account' element={!user ? <Navigate replace to='/' /> : <Account />} />
            <Route path='/success' element={<Success />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PayPalScriptProvider>
  )
};

export default App;