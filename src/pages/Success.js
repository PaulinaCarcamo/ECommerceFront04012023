import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Mood, ThumbUpOffAlt } from '@mui/icons-material';

import Ads from '../components/Ads';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './success.css'

//SUCCESS PAGE IS SHOWN AFTER A PURCHASE.

const Success = () => {
    const location = useLocation()
    console.log(location);

    return (
        <div>
            <Ads />
            <Navbar />
            <div className="success-container">
                <div className="success-wrapper">
                    <h2>THANK YOU FOR YOUR PURCHASE!</h2>
                    <span><Mood /></span>
                    <span><ThumbUpOffAlt /></span>
                    <div>
                        <Link to='/category/typeiv'>
                            <button>KEEP BUYING TAPES!</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Success;