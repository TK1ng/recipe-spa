import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe_name, image_url }) => {
    return ( 
        <div className={styles.recipeCard}>
            <img src={image_url} alt={recipe_name}/>
            <p>{recipe_name}</p>
            <button className="blueBtn">
                See More
            </button>
        </div>
     );
}
 
export default RecipeCard;