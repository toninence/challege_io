import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeProps } from '../../interfaces/interfaces';
import styles from "./styles.module.css";
const { Link, Nav, Span, Svg, Switch } = require("./styles");
// import {useTheme} from "../../hooks/";

const Index = ({theme, toggleTheme}:ThemeProps) => {
  console.log(styles);
  const [buttonTheme, setButtonTheme] = useState(theme)
  const changeTheme = ()=>{
    toggleTheme();
    theme==="light" ? setButtonTheme("dark") : setButtonTheme("light")
  }
  return (
    <Nav>
      <NavLink
        className={(navData) =>
          (navData.isActive ? styles.active : "") + ` ` + styles.nav
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(navData) =>
          (navData.isActive ? styles.active : "") + ` ` + styles.nav
        }
        to="/favorites"
      >
        Favoritos
      </NavLink>
      <Switch 
      onClick={changeTheme}
      className={styles[buttonTheme]}
      >
        {theme} theme
      </Switch>
    </Nav>
  );
};

export default Index;
