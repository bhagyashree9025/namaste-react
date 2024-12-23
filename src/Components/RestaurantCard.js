import React from 'react'
import { CDN_URL } from '../utils/constant'

const RestaurantCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
        resData

    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
            <img
                className="rounded-lg"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    )
}
export const promotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="m-2 p-2 absolute bg-black text-white rounded-md">
                    {props?.resData?.aggregatedDiscountInfoV3?.header +
                        props?.resData?.aggregatedDiscountInfoV3?.subHeader}
                </label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard
