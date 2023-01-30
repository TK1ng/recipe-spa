import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HeroBanner from '../heroBannerComponent/HeroBanner';
import styles from './DetailScreen.module.css';

const DetailScreen = () => {
  const { recipeId } = useParams();

  const [details, setDetails] = useState({})

  useEffect(() => {
    const getRecipeDetails = () => {
      axios.get(`https://recipes.devmountain.com/recipes/${recipeId}`)
        .then(res => {
        setDetails(res.data)
        })
        .catch(err => console.log(err));
      };

    getRecipeDetails();
  }, [recipeId])

  return (
    <>
      <HeroBanner imgUrl={details.image_url} title={details.recipe_name}/>
      <section className={styles.detailsContainer}>
        <div className={styles.contentBody}>
          <div className={`${styles.details} ${styles.card}`}>
            <div className={styles.recipe}>
              <h2>{details.recipe_name}</h2>
              <h4> Prep time: {details.prep_time}</h4>
              <h4>Cook time: {details.cook_time}</h4>
              <h4>Serves: {details.serves}</h4>
            </div>
            <div className={styles.ingredients}>
              <h2>Ingredients</h2>
              {details.ingredients && details.ingredients.map((i, index) => {
                return <h4>{i.quantity} {i.ingredient}</h4>
              })}
            </div>
          </div>
          <div className={`${styles.instructions} ${styles.card}`}>
            <h2>Instructions</h2>
            <p>{details.instructions && JSON.parse(details.instructions)}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailScreen;
