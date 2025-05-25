import styles from "./fileUploadPlaceholder.module.css";
import { Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
const FileUploadPlaceholder = ({ imgFile }) => {
  return (
    <div className={styles.container}>
      {!imgFile || imgFile?.length == 0 ? (
        <div className={styles.contentContainer}>
          <div className={styles.icon}>
            <DescriptionIcon />
          </div>

          <Typography className={styles.mainPlaceHolder}>
            Drag your files here
          </Typography>
          <Typography className={styles.secondaryPlacehoder}>
            or click to select from device
          </Typography>
        </div>
      ) : (
        <Typography>{imgFile[0]?.name}</Typography>
      )}
    </div>
  );
};

export default FileUploadPlaceholder;
