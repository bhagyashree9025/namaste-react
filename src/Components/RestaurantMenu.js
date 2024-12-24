// import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Error from './Error'
import RestaurantCategory from './RestaurantCategory'
import useGetMenuData from '../Hooks/useGetMenuData'

const RestaurantMenu = () => {
    const { resId } = useParams()
    const resInfo = useGetMenuData(resId)
    const [showIndex, setShowIndex] = useState(0)

    if (resInfo === null) return <Error />

    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c) => {
                return (
                    c?.card?.card?.['@type'] ===
                    'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
                )
            }
        )

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-6">
                {resInfo?.cards[2]?.card?.card?.info?.name}
            </h1>
            <p className="font-bold text-lg">
                {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(', ')} -{' '}
                {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
            </p>
            {categories?.map((category, index) => {
                return (
                    <RestaurantCategory
                        key={category?.card?.card?.title}
                        data={category?.card?.card}
                        showItem={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                    />
                )
            })}
        </div>
    )
}

export default RestaurantMenu
