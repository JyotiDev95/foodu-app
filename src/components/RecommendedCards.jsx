import React, { useState, useEffect } from 'react';
// import  RestaurantCard from './RestaurantCard';
import useRecipesCards from '../utils/useRecipesCards';
import  RestaurantCard, {higherRestaurantCard} from './RestaurantCard';
import { Link } from 'react-router-dom';

const RecommendedCards = () => {

const recipesState = useRecipesCards()
const UpdatedRestaurantCard = higherRestaurantCard(RestaurantCard) 


if (!recipesState || recipesState.length === 0) return <p>Loading recommended recipes...</p>;
  return (
     
        <div className=" mt-2 flex flex-wrap gap-4">
                 {recipesState.slice(0, 5).map((item) => (
          <div key={item.id}>
                   <Link to={'/recipes/'+item.id}>
           {item.tags.includes("Chicken") || item.tags.includes("Beef") || item.ingredients.includes("meat") || item.name.includes("Chicken") || item.instructions.includes("meat") 
  ? <UpdatedRestaurantCard resData={item} /> 
  : <RestaurantCard resData={item} />
}
                   </Link>
                   </div>
                 ))}
               </div> 
  )
}

export default RecommendedCards;


