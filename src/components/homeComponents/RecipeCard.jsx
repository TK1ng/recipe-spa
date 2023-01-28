import styles from "./RecipeCard.module.css";

const RecipeCard = () => {
    return ( 
        <div className={styles.recipeCard}>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sweet-potato-falafel-healthy-vegan-recipes-1596800863.jpg" alt="vegan falafel plated with couscous, pickled red cabbage, cucumbers and lemon slice" />
            <p>Vegan falafel and couscous</p>
            <button className="blueBtn">
                See More
            </button>
        </div>
     );
}
 
export default RecipeCard;