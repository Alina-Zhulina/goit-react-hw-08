import { NavLink } from "react-router-dom";

import css from "./AuthNav.module.css";
import { classLink } from "../Navigation/Navigation";

const AuthNav = () => {
  return (
    <div className={css.navigation}>
      <NavLink to="/register" className={classLink}>
        Registration
      </NavLink>
      <NavLink to="/login" className={classLink}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
