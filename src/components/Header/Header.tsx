import React from "react";
import { Box } from "@mui/material";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Box className={"container " + s.headerContainer}>
        <ul>
          <li>
            {" "}
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? s.active : "")}
            >
              логотип
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? s.active : "")}
            >
              о нас
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/help"}
              className={({ isActive }) => (isActive ? s.active : "")}
            >
              поддержка
            </NavLink>
          </li>
        </ul>
      </Box>
    </header>
  );
};

export default Header;
