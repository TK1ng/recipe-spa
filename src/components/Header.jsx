import { Link } from "react-router-dom";
import React from "react";


const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
          <Link to="/"><button>Home</button></Link>
          <Link to="/new-recipe"><button>Add Recipe</button></Link>
      </nav>
    </header>
  );
};

export default Header;
