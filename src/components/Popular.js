import { useEffect, useState } from 'react';
import axios from 'axios';

import Product from './Product.js';
import './popular.css'

//POPULAR PRODUCTS ARE DISPLAYED ON HOME PAGE

const Popular = ({ prods, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://another-testing.vercel.app/api/products");
                setProducts(res.data);
            } catch (err) { }
        };
        getProducts();
    }, [prods]);

    useEffect(() => {
        prods &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, prods, filters]);

    useEffect(() => {
        if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <div className='products'>
            {prods
                ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
                : products
                    .slice(0, 9)
                    .map((item) => <Product item={item} key={item.id} />)}
        </div>
    );
};

export default Popular;