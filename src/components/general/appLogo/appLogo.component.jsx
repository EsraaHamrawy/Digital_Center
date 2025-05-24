import styles from "./appLogo.module.css";
const AppLogo = () => {
  return (
    <div className={styles.appLogo}>
      <div className={styles.logo}>
        <img src="./images/appLogo.svg" alt="" />
      </div>
      <div className="moduleTitle">
        <div className={styles.title}>digital center</div>
      </div>
    </div>
  );
};

export default AppLogo;
