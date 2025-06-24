import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartList from './CartList';
import { clearCart } from '../utils/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div className="text-center p-4 m-4">
      <h1 className="text-4xl font-bold mb-8">Cart</h1>
      {/* {cartItems !== 0 ? <butto className="bg-black text-white px-4 py-2 rounded-md cursor-pointer" onClick={handleClearCart}>Clear Cart</butto> : <butto className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"><Link to='/'>Go to Home</Link></butto>
      } */}
      {cartItems.length !== 0 ? (
        <button
          className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      ) : (
        <button className="bg-black text-white px-4 py-2 rounded-md cursor-pointer">
          <Link to="/">Go to Home</Link>
        </button>
      )}
      <CartList items={cartItems} />
    </div>
  );
};

export default Cart;
