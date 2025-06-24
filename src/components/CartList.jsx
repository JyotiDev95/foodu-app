import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const CartList = ({ items }) => {
  const dispatch = useDispatch();

  if (!items || items.length === 0) return <h1 className='text-2xl mt-4 text-slate-600'>Your cart is empty. Please add itemes to the cart!😓</h1>;

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="w-full grid grid-cols-2 gap-8 px-4 mt-8">
      {items.map((item, index) => (
        <div
          key={item.id || index}
          className="border-b border-b-slate-300 flex py-2 gap-[2rem] shadow-md"
        >
          <div className="w-full text-left px-2">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="font-bold mt-2">Prepare Time: {item.prepTimeMinutes}</p>
            <p className="mb-4">Rating: {item.rating} ⭐</p>
                       {item.tags.includes("Chicken") || item.tags.includes("Beef") || item.ingredients.includes("meat") || item.name.includes("Chicken") || item.instructions.includes("meat") ? <p className='text-red-600 font-bold text-xl'>Non-Veg</p>:<p className='text-green-700 font-bold text-xl'>Veg</p> }

          </div>
          <div className="relative p-2">
            <img
              src={item.image}
              alt={item.name}
              className="min-w-32 w-32 h-26 object-cover rounded-sm"
            />
            <button
              className="bg-black text-white py-2 px-4 absolute -top-1 left-1/4 rounded-lg z-40"
              onClick={() => handleAddItems(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
