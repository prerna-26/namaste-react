import { useState, useContext } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export default function Header() {
  const [islogin, setIsLogin] = useState(false);
  const cart = useSelector((store) => store.cart.items);

  let loggedUser = useContext(UserContext);
  //const onLineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div>
        <img
          className="w-32"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeRf_64qSPEUuSObxsCWbD0PirWP6rZDSpg&s"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          {/* <li className='p-4'>Online Status</li> */}
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/about">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link to="/about">Grocery</Link>
          </li>
          <li className="p-4">
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
          <li className="p-4">
            <button onClick={() => setIsLogin(!islogin)}>
              {islogin ? "Logout" : "LogIn"}
            </button>
          </li>
          {/* <li>{loggedUser.loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
}
