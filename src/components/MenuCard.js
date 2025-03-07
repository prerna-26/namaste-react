import { useState, useEffect } from "react";
import { useParams } from "react-router";
import RestaurantItems from "./RestaurantItems";
export default function MenuCard() {
  let params = useParams();
  let categories = [];
  const [resMenu, setResMenu] = useState([]);
  const [isOpenItemList, setIsOpenItemList] = useState(0);

  async function fetchMenu() {

    let data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=" +
        params.resID
    );
    const json = await data.json();

    categories =
      await json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (card) =>
          card.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    setResMenu(categories);
  }

  useEffect(() => {
    fetchMenu();
    return () => {};
  }, []);

  return (
    <div>
       
      {resMenu?.map((data, index) => (
        <RestaurantItems
          items={data.card.card}
          isOpenItemList={isOpenItemList === index}
          key={index}
          handleClick={() =>
            setIsOpenItemList(isOpenItemList === index ? null : index)
          }
          
        />
      ))}
    </div>
  );
}
