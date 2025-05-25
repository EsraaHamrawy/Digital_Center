/* eslint-disable react/prop-types */
import styles from "./moduleContentWedget.module.css";
const ModuleContentWedget = ({ children }) => {
  return <div className={styles.wedget}>{children} </div>;
};

export default ModuleContentWedget;
