import React from "react";
import salmon from "../../assets/salmon.jpg";
import { useNavigate } from "react-router-dom";
import styles from "./AdBanner.module.css";

const AdBanner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/recipes/3');
  }

  return (
    <div className={styles.banner}
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.7)),
          url(${salmon})`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles.bannerContent}>
        <h3>New Recipe</h3>
        <h1>Pineapple Salmon</h1>
        <h3>
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won't want to miss it!
        </h3>
        <button className="blueBtn" onClick={handleClick}>Check it out</button>
      </div>
    </div>
  );
};

export default AdBanner;
