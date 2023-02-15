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
            <h1 className='pop-title'>MOST SOLD TAPES</h1>
        </div>
    )
};

export default Categories;