import { Outlet } from "react-router-dom";

function TripListLayout() {
  return (
    <div>
      <h2>Articles:</h2>
      <Outlet />
    </div>
  );
}
export default TripListLayout;
