import { Outlet, useLocation } from "react-router-dom";
import styles from "./corrsLayout.module.css";
import SideBar from "../sideBar/sideBar.component";
import Navbar from "../navbar/navbar.component";
import ModuleContentWedget from "../moduleContentWedget/moduleContentWedget.component";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
const CorrsLayout = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  const sidebarData = [
    {
      text: "home",
      to: "/correspondences/home",
      icon: <HomeIcon />,
      pageTitle: "correspondence home",
    },
    {
      text: "New Correspondence",
      to: "/correspondences/createCorrs",
      icon: <NoteAddOutlinedIcon />,
      pageTitle: "create New Correspondence",
    },
    {
      text: "my Tasks",
      to: "/correspondences/myTasks",
      icon: <AssignmentIcon />,
      pageTitle: "my Tasks",
    },
    {
      parentText: "Correspondence log",
      childLinks: [
        {
          text: "Incoming documents",
          to: "/correspondences/incommingcorrsLogs",
          icon: <FiberManualRecordIcon />,
          pageTitle: "Incoming documents",
        },
        {
          text: "Outgoing documents",
          to: "/correspondences/outgoingcorrsLogs",
          icon: <FiberManualRecordIcon />,
          pageTitle: "Outgoing documents",
        },
      ],
      parentIcon: <DescriptionOutlinedIcon />,
    },
  ];

  useEffect(() => {
    const initialPageTitle =
      sidebarData
        .flatMap((item) => (item.childLinks ? item.childLinks : [item]))
        .find((link) => link.to === location.pathname)?.pageTitle || "";
    setPageTitle(initialPageTitle);
  }, [location.pathname, sidebarData]);

  return (
    <div className={`${styles.pageWrapper} h-100 position-relative`}>
      <aside className={`${styles.aside}`}>
        <SideBar
          moduleTitle="CMS"
          moduleSubTitle="Correspondence management"
          moduleLogo="/images/corrsModuleLogo.svg"
          sidebarData={sidebarData}
        />
      </aside>
      <main className={`${styles.main}`}>
        <Navbar navbarTitle={pageTitle} />
        <div className={`${styles.mainContent}`}>
          <ModuleContentWedget>
            <Outlet />
          </ModuleContentWedget>
        </div>
      </main>
    </div>
  );
};

export default CorrsLayout;
