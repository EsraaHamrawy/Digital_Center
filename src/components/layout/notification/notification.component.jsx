import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import styles from "./notification.module.css";
const Notification = () => {
  return (
    <div className={styles.notification}>
      <NotificationsNoneIcon className={styles.icon} />
    </div>
  );
};

export default Notification;
