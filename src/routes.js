import React from "react";
import reportWebVitals from "./reportWebVitals";

import Home from "./components/Home";
import Booking from "./components/Booking";
import Contact from "./components/Contact";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
reportWebVitals();
export default routes;
