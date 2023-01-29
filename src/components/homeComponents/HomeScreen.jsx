import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import AdBanner from './AdBanner';
import RecipeCard from './RecipeCard';

const HomeScreen = () => { 
  const [recipes, setRecipes] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

  const inputRef = useRef(null);

  const handleSearchInput = (e) => {
    setSearchTerm(inputRef.current.value.toLowerCase());
  }

  const filteredRecipes = recipes.filter(recipe => {
    let recipeName = recipe.recipe_name.toLowerCase();
    return recipeName.includes(searchTerm);
  });

  const recipeCards = filteredRecipes.map(recipe => {
    return <RecipeCard recipe={recipe} />
  });


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
      <main className="contentBody">
        <div className="search">
          <BsSearch style={{ color: '#f88213'}} />
          <input ref={inputRef} placeholder="Search recipes" onChange={handleSearchInput}/>
        </div>
        <div className="recipeDisplay">
          {recipeCards}
        </div>
      </main>
    </div>
  )
}

export default HomeScreen