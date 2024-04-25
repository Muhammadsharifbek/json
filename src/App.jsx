// import { useState } from "react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

import TripListPages from "./components/TRIP/TripListPages";
import TripListLayout from "./LAYOUT/TripListLayout";
import ContactLayout from "./LAYOUT/ContactLayout";
import TripList from "./components/TRIP/TripList";
import PageNotFound from "./LAYOUT/PageNotFound";
import RootLayous from "./LAYOUT/RootLayous";
import Form from "./PAGES/HELP/Form";
import Faq from "./PAGES/HELP/Faq";
import About from "./PAGES/About";
import Home from "./PAGES/Home";
import "./App.css";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayous />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="triplist" element={<TripListLayout />}>
          <Route index element={<TripList />} />

          <Route path=":id" element={<TripListPages />} />
        </Route>

        <Route path="contacts" element={<ContactLayout />}>
          <Route path="Form" element={<Form />} />
          <Route path="Faq" element={<Faq />} />
          <Route />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <div className="App">
      {/* <TripList /> */}
      <RouterProvider router={routes} />
    </div>
  );
}
export default App;
