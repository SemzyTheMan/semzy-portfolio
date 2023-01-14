import React, { useState } from "react";
import classes from "./nav.module.css";
import { NavLink, useLocation } from "react-router-dom";
const Navigation = (props) => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav className={classes.Navigation}>
        <img src="/images/icons/logo.svg" alt="logo" />
        <ul className={classes.Navlist}>
          <li>
            {" "}
            <NavLink
              className={
                location.pathname === ("" || "/")
                  ? `${classes.active} ${classes.Nav}`
                  : classes.Nav
              }
              to={"/"}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                location.pathname.includes("portfolio")
                  ? `${classes.active} ${classes.Nav}`
                  : classes.Nav
              }
              to={"/portfolio"}
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink
              className={` ${classes.Nav}
                ${location.pathname.includes("contact") && classes.active}  
                  
              `}
              to={"contact"}
            >
              CONTACT ME
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.mobileNav}>
        <h1>MS</h1>
        <div className={classes.mobileList}>
          <img
            onClick={() => setShow(!show)}
            src={
              show ? "/images/icons/close.svg" : "/images/icons/hamburger.svg"
            }
            alt="nav"
          />
          <ul className={show ? classes.active : classes.inactive}>
            <li onClick={() => setShow(!show)}>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li onClick={() => setShow(!show)}>
              <NavLink to={"/portfolio"}>PORTFOLIO</NavLink>
            </li>
            <li onClick={() => setShow(!show)}>
              <NavLink to={"/contact"}>CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
