import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Начало</NavLink>
        </li>
        <li>
          <NavLink to="/product">Предложения</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Цены</NavLink>
        </li>
        <li>
          <NavLink to="/login">Авторизация</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
