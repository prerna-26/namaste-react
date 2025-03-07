import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
export const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  handleClick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div className="flex justify-between border-gray-400 border-b-2 m-4" key={item.card.info.id}>
            <div className="w-9/12">
              <h1 className="font-bold">{item.card.info.name}</h1>
              <h1>{(item.card.info.price || item.card.info.defaultprice)/100}</h1>
              <h1>{item.card.info.description}</h1>
            </div>
            {item.card.info.imageId && (
              <div>
                <button
                  className="bg-black  text-white rounded-md absolute mx-7 px-2 py-1 my-2"
                  onClick={() => handleClick(item)}
                >
                  Add+
                </button>
                <img
                  className="h-32 p-2"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
