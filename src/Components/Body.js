import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router-dom'

const Body = () => {
    const [resList, setResList] = useState([])
    const [filteredResList, setFilteredResList] = useState([])
    const [srcText, setSrcText] = useState('')
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
            <div className="search">
                <input
                    type="search"
                    className="search-box"
                    value={srcText}
                    onChange={(e) => {
                        setSrcText(e.target.value)
                    }}
                />
                <button
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
                    className="button-rating"
                    onClick={() => {
                        console.log('Bhagya', resList)
                        const filteredList = resList.filter((list) => {
                            return list?.info?.avgRating >= 4.5
                        })
                        setFilteredResList(filteredList)
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredResList.map((restaurant) => (
                    <Link
                        key={restaurant?.info?.id}
                        to={'/restaurants/' + restaurant?.info?.id}
                    >
                        <RestaurantCard resData={restaurant?.info} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body
