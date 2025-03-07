import { useSelector } from "react-redux"
import { ItemList } from "./ItemList"

export const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="text-center">
            <h1>Cart</h1>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
.        </div>
    )
}