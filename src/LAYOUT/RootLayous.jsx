import { NavLink, Outlet } from "react-router-dom";

function RootLayous() {
  return (
    <>
      <header>
        <div>
          <h1>My Articles</h1>
          <NavLink to="/triplist"> Triplist</NavLink>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/about"> About</NavLink>
          <NavLink to="/contacts"> Contacts</NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
export default RootLayous;
