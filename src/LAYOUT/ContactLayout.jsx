import { NavLink, Outlet } from "react-router-dom";

function ContactLayout() {
  return (
    <div>
      <h2>Contacts</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero veritatis consectetur, pariatur sit iusto itaque modi rem iure. Ducimus, impedit?</p>
      <nav>
        <NavLink to="Faq">Faq</NavLink>
        <NavLink to="Form">Form</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
export default ContactLayout;
