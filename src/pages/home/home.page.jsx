import { Box } from "@mui/material";
import styles from "./home.module.css";
import styled from "@emotion/styled";
import Homeheade from "../../components/home/heder/homeheade.component";
import LinkCard from "../../components/home/navlink/linkcard";

const linkfirstrowData = [
  {
    to: "/",
    imageSrc: "/images/Meetingsmanagement.png",
    text: "Meetings\n management",
  },
  {
    to: "/correspondences/createCorrs",
    imageSrc: "/images/CorrespondenceManagement.png",
    text: "Correspondence management",
  },
  {
    to: "/",
    imageSrc: "/images/TasksManagement.png",
    text: "Tasks\n management",
  },
  {
    to: "/",
    imageSrc: "/images/ProjectsManagemen.png",
    text: "Projects management",
  },
];
const linksecondrowData = [
  {
    to: "/purchase/createPurchase",
    imageSrc: "/images/PurchaseProcess.png",
    text: "Purchase\n Process",
  },
  {
    to: "/",
    imageSrc: "/images/HiringProcess.png",
    text: "Hiring\n Process",
  },
  {
    to: "/",
    imageSrc: "/images/ClearanceProcess.png",
    text: "Clearance\n Process",
  },
  {
    to: "/",
    imageSrc: "/images/InnovationProcess.png",
    text: "Innovation\n Process",
  },
];
const Home = () => {
  return (
    <>
      <Homeheade />
      <div className={styles.backgroundContainer}>
        <Box className={styled.homeNavigationlinksContener}>
          <Box className={styles.homeNavigationLinks}>
            {linkfirstrowData.map((item, index) => (
              <LinkCard
                key={index}
                to={item.to}
                isActive={item.to === "/" ? "deActive" : " "}
                imageSrc={item.imageSrc}
                text={item.text}
              />
            ))}
          </Box>
          <Box className={styles.homeNavigationLinks}>
            {linksecondrowData.map((item, index) => (
              <LinkCard
                key={index}
                to={item.to}
                isActive={item.to === "/" ? "deActive" : " "}
                imageSrc={item.imageSrc}
                text={item.text}
              />
            ))}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;
