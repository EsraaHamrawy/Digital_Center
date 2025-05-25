import styles from "./LinkCard.module.css"; // assuming you are using CSS modules
import { Card, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const LinkCard = ({ to, isActive, imageSrc, text }) => {
  return (
    <Card
      variant="outlined"
      className={`${styles.linkcard} ${styles[isActive]}`}
    >
      <NavLink to={to} className={`${styles.linkcontent}`}>
        <Typography>
          <img src={imageSrc} alt="Card Icon" />
        </Typography>
        <Typography className={styles.linktext}>{text}</Typography>
      </NavLink>
    </Card>
  );
};

export default LinkCard;
