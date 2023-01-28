import { Link } from "react-router-dom";
import React from "react";
import styles from "./Header.module.css";


const Header = () => {
  return (
    <header className={styles.topHeader}>
      <h2>Devmountain Eatery</h2>
      <nav className={styles.navBar}>
          <Link to="/"><button>Home</button></Link>
          <Link to="/new-recipe"><button>Add Recipe</button></Link>
      </nav>
    </header>
  );
};

export default Header;
