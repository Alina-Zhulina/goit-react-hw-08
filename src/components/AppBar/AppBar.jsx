import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.headerNavigation}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
