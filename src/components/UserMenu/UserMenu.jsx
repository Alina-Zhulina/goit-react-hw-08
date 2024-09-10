import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operation";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);
  console.log("User:", name);
  // if (!user || !user.name) {
  //   return null;
  // }

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
