import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../Hooks/useOnlineStatus'

const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Login')
    const onlineStatus = useOnlineStatus()
    return (
        <div className="header">
            <div className="img-logo">
                <img
                    className="img"
                    alt="img-logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
                />
            </div>
            <div className="nav-list">
                <ul className="nav-list-items">
                    <li>Online Status: {onlineStatus ? '✅' : '🔴'}</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button
                        className="login-btn"
                        onClick={() => {
                            loginBtn === 'Login'
                                ? setLoginBtn('Logout')
                                : setLoginBtn('Login')
                        }}
                    >
                        {loginBtn}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header
