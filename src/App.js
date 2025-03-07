import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import ".././index.css";
import About from "./components/About";
// import { RestaurantContainer } from "./RestaurantContainer";
import MenuCard from "./components/MenuCard";
import Body from "./components/Body";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Cart } from "./components/Cart";
// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div",
//     { id: "child1" },
//     [
//       React.createElement("h1",
//       {},
//       "H1 from child1"),
//       React.createElement("h2", {}, "H2 from child1"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//       React.createElement("h1", {}, "H1 from child2"),
//       React.createElement("h2", {}, "h2 from child 2"),
//     ]),
//   ]);
// consts =
//   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

function AppLayout() {
  return (
    <div>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "shrey" }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      {
        path: "restaurant/:resID",
        element: <MenuCard />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routes} />);
