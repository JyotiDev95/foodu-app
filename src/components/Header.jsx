import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swiggyLogo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';
import UserContext from '../utils/UserContext';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { loginData, setLoginData } = useContext(UserContext);
  const onlineStateUpdate = useOnlineStatus();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loginData');   // Clear localStorage
    setLoginData(null);                     // Clear Context
    navigate('/');                     // Redirect to login
  };

// subscribing the to store using the selector
const cartItems = useSelector((store)=> store.cart.items)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
         <Link to="/"><img src={swiggyLogo} className='max-w-[160px]' alt="logo" /></Link> 
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <ul className='flex gap-4 items-center'>
            <li><Link to="/" className='text-gray-700 hover:text-primary transition'>Home</Link></li>
            <li><Link to="/about" className='text-gray-700 hover:text-primary transition'>About</Link></li>
            <li><Link to="/contact" className='text-gray-700 hover:text-primary transition'>Contact</Link></li>
            {/* <li><Link to="/grocery" className='text-gray-700 hover:text-primary transition'>Grocery</Link></li> */}
            <li className='text-gray-700 relative pe-4'><Link to="/cart" className='hover:text-primary transition align-[3px]'>Cart</Link> <span className='text-2xl'>🛒</span><span className="text-sm absolute bg-gray-400 bottom-3.5 px-1 rounded-full">{cartItems.length}</span></li>

            {/* Login or Logout Button */}
            {loginData ? (
              <>
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                </li>
                <li className="text-sm text-gray-800">
                  👤 <strong className='text-primary'>{loginData.username}</strong>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className='bg-primary p-2 rounded-md text-white hover:bg-yellow-500'>
                  Login
                </Link>
              </li>
            )}

            {/* Online/Offline Indicator */}
            <li className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${onlineStateUpdate ? 'bg-green-500 animate-ping' : 'bg-red-500'}`}></span>
              <span className={`${onlineStateUpdate ? 'text-green-600' : 'text-red-600'}`}>
                {onlineStateUpdate ? 'Online' : 'Offline'}
              </span>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav (optional improvement: reuse login/logout logic here too) */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
          <a href="/" className="block text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="/about" className="block text-gray-700 hover:text-blue-600 transition">About</a>
          <a href="/contact" className="block text-gray-700 hover:text-blue-600 transition">Contact</a>
          <a href="/grocery" className="block text-gray-700 hover:text-blue-600 transition">Grocery</a>
        </div>
      )}
    </header>
  );
};

export default Header;
