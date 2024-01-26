import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

let timeout
let scroll = 0
const Header = () => {
    const [isSticky, setIsSticky] = React.useState(false);
    React.useEffect(() => {
        window.onscroll = () => {
            if (timeout) {
                clearTimeout(timeout)
            }

            timeout = setTimeout(() => {
                if (window.scrollY > 20) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
                scroll = window.scrollY
            }, 10)
        }
    }, [])
    return (
        <div className={`mainHeader ${isSticky && 'sticky'}`} id='header'>
            <div className='container'>
                <img src="./img/logo.png.webp" alt="" />
                <div className='navbar'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/details">Details</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header