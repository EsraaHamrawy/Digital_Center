import { Outlet, useLocation } from "react-router-dom";
import styles from "./purchaseLayout.module.css";
import SideBar from "../sideBar/sideBar.component";
import Navbar from "../navbar/navbar.component";
import ModuleContentWedget from "../moduleContentWedget/moduleContentWedget.component";
import { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const PurchaseLayout = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  const sidebarData = [
    {
      parentText: "Employee",
      childLinks: [
        {
          text: "New Purchase request",
          to: "/purchase/createPurchase",
          icon: <FiberManualRecordIcon />,
          pageTitle: "create New Purchase request",
        },
        {
          text: "requests log",
          to: "/purchase/purchaseLog",
          icon: <FiberManualRecordIcon />,
          pageTitle: "requests log",
        },
      ],
    },
    {
      parentText: "Manager",
      childLinks: [
        {
          text: "pending tasks",
          to: "/purchase/managertask",
          icon: <FiberManualRecordIcon />,
          pageTitle: "pending tasks",
        },
        {
          text: "requests log",
          to: "/purchase/managerlog",
          icon: <FiberManualRecordIcon />,
          pageTitle: "Requests Log",
        },
      ],
    },
    {
      parentText: "procurement",
      childLinks: [
        {
          text: "pending tasks",
          to: "/purchase/procurementtasks",
          icon: <FiberManualRecordIcon />,
          pageTitle: "pending tasks",
        },
        {
          text: "Purchase log",
          to: "/purchase/procurementlog",
          icon: <FiberManualRecordIcon />,
          pageTitle: "Purchase log",
        },
      ],
    },
  ];

  const matchDynamicRouteAndGetPageTitle = (path) => {
    if (path.startsWith("/purchase/requestDetails/")) {
      return "request details";
    }
    return "";
  };

  useEffect(() => {
    const initialPageTitle =
      sidebarData
        .flatMap((item) => (item.childLinks ? item.childLinks : [item]))
        .find((link) => link.to === location.pathname)?.pageTitle ||
      matchDynamicRouteAndGetPageTitle(location.pathname);
    setPageTitle(initialPageTitle);
  }, [location.pathname, sidebarData]);

  return (
    <div className={`${styles.pageWrapper} h-100 position-relative`}>
      <aside className={`${styles.aside}`}>
        <SideBar
          moduleTitle="Purchase management"
          moduleLogo="./images/purchaseModuleLogo.svg"
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

export default PurchaseLayout;
