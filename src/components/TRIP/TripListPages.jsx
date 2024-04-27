import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

function TripListPages() {
  const { id } = useParams();

  const url = "http://localhost:3000/trips/" + id;
  const { data: trip, loader, error } = useFetch(url);

  return (
    <div>
      {loader && <h2> {loader} </h2>}
      {error && <h2> {error} </h2>}
      <ul>
        {trip && (
          <li>
            <img src={trip.image} alt={trip.title} />

            <h2>Price: {trip.price}</h2>
            <p>Info: {trip.body}</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default TripListPages;
