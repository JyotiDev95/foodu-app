import React, { useState } from 'react';
import useRecipesCards from '../utils/useRecipesCards';
import AccordionItem from './AccordionItem';

const ResCategory = () => {
  const resCategoryData = useRecipesCards();
  const [openCuisine, setOpenCuisine] = useState(0); // stores the currently open cuisine

  if (!resCategoryData || resCategoryData.length === 0) return <p>Loading categories...</p>;

  // Group recipes by cuisine
  const groupedByCuisine = resCategoryData.reduce((acc, recipe) => {
    const cuisine = recipe.cuisine || 'Unknown';
    if (!acc[cuisine]) {
      acc[cuisine] = [];
    }
    acc[cuisine].push(recipe);
    return acc;
  }, {});

  const handleToggleAccordion = (cuisine) => {
    setOpenCuisine((prev) => (prev === cuisine ? null : cuisine)); // toggle: close if open, open if different
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center mt-16">Recipes Grouped by Cuisine</h2>

      {Object.entries(groupedByCuisine).map(([cuisine, recipes]) => (
        <div key={cuisine} className="mb-6 bg-slate-100 w-6/12 mx-auto p-4 shadow-lg rounded">
          <h3
            className="text-lg font-semibold text-blue-900 mb-2 cursor-pointer flex justify-between items-center"
            onClick={() => handleToggleAccordion(cuisine)}
          >
            {cuisine}
            <span>{openCuisine === cuisine ? '🔼' : '🔽'}</span>
          </h3>

          {openCuisine === cuisine && (
            <div className="flex flex-wrap gap-4">
              {recipes.map((recipe) => (
                <AccordionItem key={recipe.id} resData={recipe} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResCategory;

