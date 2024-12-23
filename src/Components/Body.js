import React, { useEffect, useState } from 'react'
import RestaurantCard, { promotedLabel } from './RestaurantCard'
import { Link } from 'react-router-dom'

const Body = () => {
    const [resList, setResList] = useState([])
    const [filteredResList, setFilteredResList] = useState([])
    const [srcText, setSrcText] = useState('')
    const RestaurantCardPromoted = promotedLabel(RestaurantCard)
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        )
        const response = await data.json()
        setResList(
            response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        )
        setFilteredResList(
            response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        )
    }
    return (
        <div className="body">
            <div className="search m-4 p-4">
                <input
                    type="search"
                    className="border border-solid border-black"
                    value={srcText}
                    onChange={(e) => {
                        setSrcText(e.target.value)
                    }}
                />
                <button
                    className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={() => {
                        const filteredList = resList.filter((list) => {
                            return list?.info?.name
                                ?.toLowerCase()
                                .includes(srcText.toLowerCase())
                        })
                        setFilteredResList(filteredList)
                    }}
                >
                    Search
                </button>
                <button
                    className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
                    onClick={() => {
                        const filteredList = resList.filter((list) => {
                            return list?.info?.avgRating >= 4.5
                        })
                        setFilteredResList(filteredList)
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="flex flex-wrap">
                {filteredResList.map((restaurant) => (
                    <Link
                        key={restaurant?.info?.id}
                        to={'/restaurants/' + restaurant?.info?.id}
                    >
                        {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                            <RestaurantCardPromoted
                                resData={restaurant?.info}
                            />
                        ) : (
                            <RestaurantCard resData={restaurant?.info} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body
