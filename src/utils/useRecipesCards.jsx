
import React, { useState, useEffect } from 'react';
import { RES_API } from './constant';

const useRecipesCards = () => {
    const[recipesData, setRecipesData] = useState(null)

    useEffect(() => {
        const recipeCall = async () => {
            try {
                const data = await fetch(RES_API);
                const jsonData = await data.json();
                setRecipesData(jsonData.recipes);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        recipeCall();
    }, []);
    
  return recipesData
}

export default useRecipesCards