import { findByLabelText } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdBanner from './AdBanner';
import RecipeCard from './RecipeCard';

const HomeScreen = () => { 
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axios.get('https://recipes.devmountain.com/recipes')
    .then(res => {
      setRecipes(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getRecipes();
  }, [])

  return (
    <div>
      <AdBanner />
      <main style={{display: "flex"}}>
        <RecipeCard />
      </main>
    </div>
  )
}

export default HomeScreen