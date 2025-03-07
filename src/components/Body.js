import { useState, useEffect } from "react";
import { RestaurantContainer } from "./RestaurantContainer";

export default function Body() {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [serachText, setsearchText] = useState([]);

  async function fetchData() {
    let data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let list = await data.json();

    setrestaurantList(
      list?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      list?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  useEffect(() => {
    fetchData();
    return () => {
      // Cleanup logic here
    };
  }, []);

  function filterRes() {

    let filteredRes= restaurantList.filter((res)=>
      res.info.name.includes(serachText)
    )

    setfilteredRestaurant(filteredRes);
  }

  function filterTopRatedRes(){

    let topRatedRes = restaurantList.filter((res)=>res.info.avgRating >=4);

    setfilteredRestaurant(topRatedRes);

  }

  return (
    <div>
      <div className="flex">
        <div className="m-2 p-2">
          <input
            type="text"
            className="border border-solid border-black"
            value={serachText}
            onChange={(e) => setsearchText(e.target.value)}
          ></input>
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={filterRes}
          >
            Search
          </button>
        </div>

        <div className="m-2 p-2 flex item-center">
          <button
            className="px-4 py-2 m-4 bg-gray-100 rounded-lg"
            onClick={filterTopRatedRes}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>
      <RestaurantContainer restaurantList={filteredRestaurant} />
    </div>
  );
}
