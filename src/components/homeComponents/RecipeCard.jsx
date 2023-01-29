import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
    return ( 
        <div className={styles.recipeCard}>
            <img src={recipe.image_url} alt={recipe.recipe_name}/>
            <p>{recipe.recipe_name}</p>
            <button className="blueBtn">
                See More
            </button>
        </div>
     );
}
 
export default RecipeCard;