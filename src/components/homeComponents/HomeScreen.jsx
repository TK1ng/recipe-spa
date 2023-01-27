import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdBanner from './AdBanner';

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
      
    </div>
  )
}

export default HomeScreen