import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../Hooks/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Login')
    const onlineStatus = useOnlineStatus()
    const data = useContext(UserContext)
    const cartItems = useSelector((store) => store.cart.items) //subscribe to the store using selector

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-4">
            <div className="img-logo">
                <img
                    className="w-48"
                    alt="img-logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? '✅' : '🔴'}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/cart">Cart - {cartItems.length} Items</Link>
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
                    <li className="px-4">{data?.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header
