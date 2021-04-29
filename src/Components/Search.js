import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'
// import axios from 'axios'

const Search = () => {
  const APP_ID = 'faf712d4'
  const APP_KEY = '12e5b4e5d045a1eee24d235a68b547a3'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('goat')

  useEffect(() => {
    // axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    //     .then(res => {
    //         console.log(res)
    //         setRecipes(res.hits)
    //     })
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      const data = await response.json()
      setRecipes(data.hits)
      console.log(data)
    }
    getRecipes()
  }, [query])

  const searchUpdate = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <>
      <form onSubmit={getSearch} className='search'>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={searchUpdate}
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>

      <div className='recipes'>
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            key={recipe.recipe.image}
          />
        ))}
      </div>
    </>
  )
}

export default Search
