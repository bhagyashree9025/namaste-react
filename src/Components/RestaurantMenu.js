import { useState, useEffect } from 'react'
// import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { MENU_URL } from '../utils/constant'
import Error from './Error'

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)

    const { resId } = useParams()

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId)
        const json = await data.json()
        console.log('Bhagya1', json.data)
        setResInfo(json.data)
        console.log('Bhagya2', json.data)
    }

    if (resInfo === null) return <Error />

    // const { name, cuisines, costForTwoMessage } =
    //     resInfo?.cards[0]?.card?.card?.info

    // const { itemCards } =
    //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //         ?.card

    // console.log(itemCards)

    return (
        <div className="menu">
            <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <p>
                {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(', ')} -{' '}
                {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[5]?.card?.card?.itemCards.map(
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
