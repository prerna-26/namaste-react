import { RestaurantCard, withPromotedCard } from "./RestaurantCard";
import { Link } from "react-router";

export function RestaurantContainer({ restaurantList }) {
  const RestaurantCardPromoted = withPromotedCard(RestaurantCard);

  return (
    <div className="flex flex-wrap">
      {restaurantList.map((restaurant) => (
        <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
          {/* {restaurant.info.isOpen? <RestaurantCardPromoted restaurantDetails={restaurant}/> :<RestaurantCard  restaurantDetails={restaurant}/>} */}
          <RestaurantCard restaurantDetails={restaurant} />
        </Link>
      ))}
    </div>
  );
}
