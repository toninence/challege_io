import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link, Nav, Span, Svg, Switch } from "./styles";
import styles from "./styles.module.css";
// import {useTheme} from "../../hooks/";

const Index = ({theme, toggleTheme}) => {

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
