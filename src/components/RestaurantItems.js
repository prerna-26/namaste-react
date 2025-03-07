import { ItemList } from "./ItemList";

export default RestaurantItems = ({ items, isOpenItemList, handleClick }) => {
  return (
    <div className="w-6/12 bg-gray-100 justify-center shadow-lg mx-auto my-3">
      <div className="flex justify-between font-bold px-1">
        <div className="m-4">{items?.title} </div>
        <button onClick={handleClick}>{isOpenItemList ? "🔺" : "🔻"}</button>
      </div>

      {isOpenItemList && <ItemList items={items.itemCards} />}
    </div>
  );
};
