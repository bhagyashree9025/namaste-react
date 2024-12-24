import { useSelector, useDispatch } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'
const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.cart.items)
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="m-4 p-4 text-center">
            <h1 className="text-2xl font-bold">Cart page</h1>
            <div className="w-6/12 m-auto">
                <button
                    className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems?.length === 0 && <h1>Add Items To Cart</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart
