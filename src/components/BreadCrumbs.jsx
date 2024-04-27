import { NavLink, useLocation } from "react-router-dom";

function BreadCrumbs() {
  const location = useLocation();

  const currentLink = [];

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb != "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);
      return (
        <div className="crumb" key={crumb}>
          <NavLink to={currentLink.join("")}>{crumb}</NavLink>
        </div>
      );
    });

  return <div className="bread-crumbs">{crumbs}</div>;
}
export default BreadCrumbs;
