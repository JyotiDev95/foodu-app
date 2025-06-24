import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice';

const AccordionItem = ({ resData }) => {
  const dispatch = useDispatch();

  if (!resData) return null;

  const handleAddItems = () => {
    dispatch(addItem(resData));
  };
  const { name, prepTimeMinutes, rating, image, tags, ingredients,instructions } = resData;

  return (
    <div className="border-b border-b-slate-300 flex py-2 gap-[2rem] w-full">
      <div className="w-full">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="font-bold mt-2">Prepare Time: {prepTimeMinutes}</p>
        <p className="mb-4">Rating: {rating} ⭐</p>
           {tags.includes("Chicken") || tags.includes("Beef") || ingredients.includes("meat") || name.includes("Chicken") || instructions.includes("meat")? <p className='text-red-600 font-bold text-xl'>Non-Veg</p>:<p className='text-green-700 font-bold text-xl'>Veg</p> }
      </div>
      <div className="relative p-2">
        <img
          src={image}
          alt={name}
          className="min-w-32 w-32 h-26 object-cover rounded-sm"
        />
        <button
          className="bg-black text-white py-2 px-4 absolute -top-1 left-1/4 rounded-lg z-40"
          onClick={handleAddItems}
        >
          Add +
        </button>
      </div>
    </div>
  );
};


export default AccordionItem;
