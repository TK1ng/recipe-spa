import styles from "./HeroBanner.module.css";

const HeroBanner = ({ title, imgUrl }) => {
    return ( 
        <div className={styles.heroBanner}
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.7)),
          url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "right 31% bottom 70%",
      }}
    >
      <div className={styles.recipeTitle}>
        <h1>{title}</h1>
      </div>
    </div>
     );
}
 
export default HeroBanner;