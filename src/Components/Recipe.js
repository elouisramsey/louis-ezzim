import React from 'react'
import style from '../css/recipe.module.css'

const Recipe = ({ title, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={Math.random()}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Recipe
