// import { useState } from "react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

import TripListPages from "./components/TRIP/TripListPages";
import TripListLayout from "./LAYOUT/TripListLayout";
import ContactLayout from "./LAYOUT/ContactLayout";
import TripList from "./components/TRIP/TripList";
import RootLayous from "./LAYOUT/RootLayous";
import ErrorPage from "./LAYOUT/ErrorPage";
import Form from "./PAGES/HELP/Form";
import Faq from "./PAGES/HELP/Faq";
import About from "./PAGES/About";
import Home from "./PAGES/Home";
import "./App.css";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayous />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "triplist",
          element: <TripListLayout />,
          children: [
            {
              index: true,
              element: <TripList />,
            },
            {
              path: ":id",
              element: <TripListPages />,
            },
          ],
        },
        {
          path: "contacts",
          element: <ContactLayout />,
          children: [
            {
              path: "Form",
              element: <Form />,
            },
            {
              path: "Faq",
              element: <Faq />,
            },
          ],
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      {/* <TripList /> */}
      <RouterProvider router={routes} />
    </div>
  );
}
export default App;
