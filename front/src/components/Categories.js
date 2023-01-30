import Category from './Category.js';
import { categories } from '../data/categories.js';
import './categories.css';

const Categories = () => {
    return (
        <div>
            <h1>BROWSE BY TYPES</h1>
            <div className='categories'>
                {categories.map(item => (
                    <Category item={item} />
                ))}
            </div>
            <h1>POPULAR PRODUCTS</h1>
        </div>
    )
};

export default Categories;