// import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import Error from './Error'
import useGetMenuData from '../Hooks/useGetMenuData'

const RestaurantMenu = () => {
    const { resId } = useParams()
    const resInfo = useGetMenuData(resId)

    if (resInfo === null) return <Error />

    return (
        <div className="menu">
            <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <p>
                {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(', ')} -{' '}
                {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[5]?.card?.card?.categories[0]?.itemCards.map(
                    (item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} -{' Rs.'}
                            {item.card.info.price / 100 ||
                                item.card.info.defaultPrice / 100}
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default RestaurantMenu
