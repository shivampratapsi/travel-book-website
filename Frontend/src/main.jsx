import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Bookings} from "./Components/MyBookings.jsx";
import HotelList from "./Components/HotelList.jsx";
import AddHotel, { PostAddHotelAction } from "./Components/AddHotel.jsx";
import Details from "./Components/Details.jsx";
import { PlanItenary, postAddItinerary } from "./Components/PlanItenary.jsx";
import { UserDetails } from "./Components/UserDetails.jsx";
import WelcomePage from "./Pages/WelcomePage.jsx";
import {
  LoginPage,
  postLoginAction,
  postRegisterAction,
} from "./Pages/LoginPage.jsx";
import { Flights } from "./Components/Flights.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/login/:signup",
    element: <LoginPage />,
    action: postLoginAction,
  },
  {
    path: "/signup/:signup",
    element: <LoginPage />,
    action: postRegisterAction,
  },
  {
    path: "/Home",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <HotelList />,
      },
      {
        path: "/Home/Bookings",
        element: <Bookings />,
      },
      {
        path: "/Home/Add-hotel",
        element: <AddHotel />,
        action: PostAddHotelAction,
      },
      {
        path: "/Home/details/:id",
        element: <Details />,
      },
      {
        path: "/Home/Hotels",
        element: <HotelList />,
      },
      {
        path: "/Home/Plan-Itinerary",
        element: <PlanItenary />,
        action: postAddItinerary,
      },
      {
        path: "/Home/myProfile",
        element: <UserDetails />,
      },
      {
        path: "/Home/Flights",
        element: <Flights />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>
);