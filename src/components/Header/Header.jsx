import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss"
import classnames from "classnames";
export default function Header() {
    let location = useLocation()
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <ul className={styles.nav_list}>
                <li className={styles.nav_list}>
                    <Link to={'/examples'} 
                    className={classnames(styles.nav_item, {
                        [styles.active]: location.pathname === '/examples',
                      })}
                    >Примеры</Link>
                </li>
                <li className={styles.nav_list}>
                    <Link to={'/sandbox'}
                    className={classnames(styles.nav_item, {
                        [styles.active]: location.pathname === '/sandbox',
                      })}>Песочница</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}
