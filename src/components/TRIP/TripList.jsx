import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";

import "./TripList.css";

function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");

  const { data: trips, loader, error } = useFetch(url);

  return (
    <div className="trip-list">
      <h1>TripList</h1>
      {loader && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}

      {error && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      <ul>
        {trips &&
          trips.map((trip) => {
            return (
              <li key={trip.id}>
                <h2>{trip.title}</h2>
                <p>{trip.price}</p>
                <p>{trip.loc}</p>
                <NavLink to={`/triplist/${trip.id}`}>Read More</NavLink>
              </li>
            );
          })}
      </ul>
      <button onClick={() => setUrl("http://localhost:3000/trips?loc=Evrope")}>Evropean trips</button>
      <button onClick={() => setUrl("http://localhost:3000/trips")}>American trips</button>
    </div>
  );
}
export default TripList;
