import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import whiteLogo from '../assets/logo-white.png';

const Footer = () => {
  return (
    <footer className="bg-[#022C3A] text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src={whiteLogo} alt="Foodu Logo" className="h-10" />
                      </div>
          <p className="text-sm text-gray-300 mb-6">
            Discover culinary delights recipes and inspiration in our food haven.
          </p>
          <div className="text-sm">
            <div className="flex justify-between max-w-[240px] mb-1">
              <span className="font-semibold">MON - FRI</span>
              <span>8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between max-w-[240px] border-t border-gray-600 pt-1">
              <span className="font-semibold">SATURDAY</span>
              <span>9:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
                   <li><Link to="/" className='text-white hover:text-primary transition'>Home</Link></li>
          <li><Link to="/about" className='text-white hover:text-primary transition'>About</Link></li>        
          <li><Link to="/contact" className='text-white hover:text-primary transition'>Contact</Link></li>
          <li><Link to="/grocery" className='text-white hover:text-primary transition'>Grocery</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="text-sm text-gray-300 space-y-3">
          <li>📍 New Delhi, India</li>
          <li>📧 contact@fooduapp.com</li>
          <li>📞 +91-9876543210</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-gray-300 mb-4">
            Join our subscribers list to get the latest news and special offers.
          </p>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 text-sm text-white bg-transparent border-b border-gray-500 mb-4 focus:outline-none"
          />
          <button className="w-full py-3 text-white bg-primary font-semibold rounded hover:bg-red-700 transition">
            Subscribe ↗
          </button>
          <div className="mt-6">
            <h5 className="font-semibold text-sm mb-2">Social Media:</h5>
            <div className="flex space-x-4">
              <a href="#" className="bg-white text-black rounded-full p-2 hover:scale-110 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white text-black rounded-full p-2 hover:scale-110 transition">
                <FaInstagram />
              </a>
              <a href="#" className="bg-white text-black rounded-full p-2 hover:scale-110 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm text-gray-400 mt-6">
        Copyright 2025 <span className="font-bold text-white">foodu.</span> All Rights Reserved by <span className="font-semibold">Jyoti Prakash</span>
      </div>
    </footer>
  );
};

export default Footer;
