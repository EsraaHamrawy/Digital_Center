import User from "../../general/user/user.component";
import Notification from "../notification/notification.component";
import SerachBar from "../serachBar/serachBar.component";
import styles from "./navbar.module.css";
const Navbar = ({ navbarTitle }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.pageTitle}>{navbarTitle}</div>
      <div className={styles.items}>
        <SerachBar />
        <Notification />
        <User />
      </div>
    </div>
  );
};

export default Navbar;
