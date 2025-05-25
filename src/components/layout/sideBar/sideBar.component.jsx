/* eslint-disable react/prop-types */
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./sideBar.module.css";
import AppLogo from "../../general/appLogo/appLogo.component";
import React from "react";
import ModuleLogo from "../../general/moduleLogo/moduleLogo.component.jsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const SideBar = ({ moduleTitle, moduleSubTitle, moduleLogo, sidebarData }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <div className={styles.sideBarHeader}>
        <ModuleLogo
          moduleTitle={moduleTitle}
          moduleSubTitle={moduleSubTitle}
          moduleLogo={moduleLogo}
        />
        <Link to="/">
          <div className={styles.navigationBtn}>
            <img src="./images/navigation.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className={styles.sideBarCont}>
        <div className={styles.sideBarLinks}>
          {sidebarData.map((item, index) => (
            <div
              key={index}
              className={item.childLinks ? "parentLinkContainer" : ""}
            >
              {!item.parentText && (
                <NavLink
                  key={index}
                  className={({ isActive }) =>
                    [isActive ? `${styles.active}` : "", `${styles.link}`].join(
                      " "
                    )
                  }
                  to={item.to}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </NavLink>
              )}
              {item.parentText && (
                <>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          className={`accordionExpandIcon ${item.childLinks
                              .map((link) => link.to)
                              .includes(pathname) && `${styles.activeicon}`
                            }`}
                        />
                      }
                      aria-controls="panel1-content"
                      id="panel1-header"
                      className={`${styles.parentAccordion} ${item.childLinks
                          .map((link) => link.to)
                          .includes(pathname) && `${styles.activeParent}`
                        }`}
                    >
                      <div className={`${styles.parentLink}`}>
                        {item.parentIcon}
                        <span>{item.parentText}</span>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      {item.childLinks.map((childLink, childIndex) => (
                        <NavLink
                          key={childIndex}
                          className={({ isActive }) =>
                            [
                              isActive ? `${styles.active}` : "",
                              `${styles.childLink}`,
                            ].join(" ")
                          }
                          to={childLink.to}
                        >
                          {childLink.icon &&
                            React.cloneElement(childLink.icon, {
                              className: styles.dotIcon,
                            })}
                          <span>{childLink.text}</span>
                        </NavLink>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </>
              )}
            </div>
          ))}
        </div>
        <div className={styles.sideBarFooter}>
          <AppLogo />
        </div>
      </div>
    </>
  );
};

export default SideBar;
