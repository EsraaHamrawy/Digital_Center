import styles from "./requestImagePlaceholder.module.css";

const RequestImagePlaceholder = () => {
  return (
    <div className={styles.placeholderContainer}>
      <div className={styles.imgContainer}>
        <img
          className={styles.itemImg}
          src={"./images/purchase/requestImgePlaceholder.svg"}
          alt=""
        />
      </div>
      <div className={styles.title}>no image for the item!</div>
    </div>
  );
};

export default RequestImagePlaceholder;
