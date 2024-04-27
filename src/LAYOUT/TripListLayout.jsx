import { Outlet } from "react-router-dom";

function TripListLayout() {
  return (
    <div className="article-container">
      <h2>Articles:</h2>
      <Outlet />
    </div>
  );
}
export default TripListLayout;
