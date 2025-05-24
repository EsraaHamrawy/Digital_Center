import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./serachBar.module.css";
const SerachBar = () => {
  return (
    <div className={styles.serchBar}>
      <SearchIcon className={styles.icon} />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search here ..."
        inputProps={{ "aria-label": "Search here ..." }}
      />
    </div>
  );
};

export default SerachBar;
