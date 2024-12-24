import { CDN_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const ItemList = ({ items }) => {
    const dispatch = useDispatch()
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    return (
        <div>
            {items?.map((item) => {
                return (
                    <div
                        key={item?.card?.info?.id}
                        className="=p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                    >
                        <div className="w=9/12">
                            <div className="p-2">
                                <span className="">
                                    {item?.card?.info?.name}
                                </span>
                                <span>
                                    {' '}
                                    - ₹
                                    {item?.card?.info?.price
                                        ? item?.card?.info?.price / 100
                                        : item?.card?.info?.defaultPrice / 100}
                                </span>
                            </div>
                            <p className="text-xs p-2 mb-4">
                                {item?.card?.info.description}
                            </p>
                        </div>
                        <div className="w=3/12 p-4">
                            <div>
                                <button
                                    className="p-2 mx-2 rounded-lg bg-black text-white shadow-lg absolute m-auto"
                                    onClick={() => handleAddItem(item)}
                                >
                                    Add +
                                </button>
                            </div>

                            <img
                                className="w-28 h-28"
                                src={CDN_URL + item?.card?.info?.imageId}
                                alt="item-image"
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList
