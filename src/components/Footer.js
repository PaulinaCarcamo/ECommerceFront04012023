import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter, Radio } from "@mui/icons-material";

import './footer.css';
import payment from '../images/payment.png';
// import LoginDialog from "./Login";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <Link to='/' className='logo'> THE CASSETTE STORE <Radio /></Link>
                <div className="footer-info">
                    The Cassette Store is the home of exclusive and limited edition releases. Stocking all formats and proudly championing the best new products, today we're one of the leading online cassette retailers. Plus, we ship worldwide and offer 50% off your first order when joining our mailing list.
                </div>
                <div className="social-networks">
                    <icon><Facebook /></icon>
                    <icon><Instagram /></icon>
                    <icon><Twitter /></icon>
                    <icon><Pinterest /></icon>
                </div>
            </div>
            <div className="footer-center">
                <h3>Useful links</h3>
                <ul className="footer-links">
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/allproducts' className="link">Shop</Link></li>
                    <li><Link to='/category/typeii' className="link">Chrome</Link></li>
                    <li><Link to='/register' className="link">Account</Link></li>
                    {/* <LoginDialog /> */}
                    <li><Link to='/category/typei' className="link">Ferric</Link></li>
                    <li><Link to='/cart' className="link">Cart</Link></li>
                    <li><Link to='/category/typeiv' className="link">Metallic</Link></li>
                    <li><Link to='/register' className="link">Register</Link></li>
                </ul>
            </div>
            <div className="footer-right">
                <h3>Contact</h3>
                <p><Room /> 2300 Fake St, Fake, IN 46407-3050</p>
                <p><Phone /> + 1 505 734 7399</p>
                <p><Mail /> thecassetestore@aol.com</p>
                <img className='payment' src={payment} alt='img'></img>
            </div>
        </div>
    )
};

export default Footer;