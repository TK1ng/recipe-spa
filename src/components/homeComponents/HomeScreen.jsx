import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import AdBanner from './AdBanner';
import RecipeCard from './RecipeCard';
import Search from './Search';

const HomeScreen = () => { 
  const [recipes, setRecipes] = useState([]);

  console.log(recipes);

  const [searchTerm, setSearchTerm] = useState('');

  const inputRef = useRef(null);

  const handleSearchInput = (e) => {
    console.log(e.target.value);

    let filtered = recipes.filter(recipe => {
      return recipe.recipe_name === searchTerm;
    })

    console.log(filtered)
  }

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
        <RecipeCard />
      </main>
    </div>
  )
}

export default HomeScreen