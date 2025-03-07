import React from "react";
// import {consts} from './utils/consts'

export function RestaurantCard({ restaurantDetails }) {
  const { name, costForTwo, cuisines, sla, avgRating, id } =
    restaurantDetails.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg h-48 w-[220px]"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantDetails.info.cloudinaryImageId}`}
      />
      {/* <img src={consts+restaurantDetails.info.cloudinaryImageId}/> */}
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>

      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
}

export const withPromotedCard = (RestaurantCard) => {
  return ({ restaurantDetails }) => {
    return (
      <div>
        <span>Promoted</span>
        <RestaurantCard restaurantDetails={restaurantDetails} />
      </div>
    );
  };
};
