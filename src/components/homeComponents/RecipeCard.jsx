import styles from "./RecipeCard.module.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipes/${recipe.recipe_id}`)
    };

    return ( 
        <div className={styles.recipeCard}>
            <img src={recipe.image_url} alt={recipe.recipe_name}/>
            <p>{recipe.recipe_name}</p>
            <button className="blueBtn" onClick={handleClick}>
                See More
            </button>
        </div>
     );
}
 
export default RecipeCard;