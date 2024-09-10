import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const classLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={classLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={classLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
