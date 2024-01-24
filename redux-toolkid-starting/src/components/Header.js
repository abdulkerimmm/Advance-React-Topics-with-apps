import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "./../store/auth";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispacth = useDispatch();
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button
                onClick={() => {
                  dispacth(AuthActions.logout());
                  console.log("efsdsf");
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
