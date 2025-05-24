import styles from "./moduleLogo.module.css";

const ModuleLogo = ({ moduleTitle, moduleSubTitle, moduleLogo }) => {
  return (
    <div className={styles.moduleLogo}>
      {moduleLogo && (
        <div className={styles.logo}>
          <img src={moduleLogo} alt="" />
        </div>
      )}
      <div className={styles.moduleTitle}>
        {moduleTitle && <div className={styles.title}>{moduleTitle}</div>}
        {moduleSubTitle && (
          <div className={styles.subtitle}>{moduleSubTitle}</div>
        )}
      </div>
    </div>
  );
};

export default ModuleLogo;
