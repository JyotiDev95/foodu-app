import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">About Foodu</h1>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Welcome to <strong>Foodu</strong> — your one-stop solution for discovering delicious recipes and browsing restaurants from around the world!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">🍽 Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to make food discovery easy and delightful. Whether you're looking for Italian pizza, Indian biryani, or Japanese ramen — Foodu brings cuisines from all corners of the globe to your fingertips.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">🚀 What We Offer</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Over 100+ curated food recipes from different countries</li>
              <li>Easy-to-use search and filter to find what you crave</li>
              <li>Interactive recipe cards with ratings, categories, and cook times</li>
              <li>Grocery section for daily essentials</li>
              <li>Responsive mobile-friendly design</li>
            </ul>
          </div>

          <div className="md:col-span-2 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">👨‍🍳 Meet the Creator</h2>
            <p className="text-gray-600">
              Hi, I’m Jyoti 👋 — a passionate frontend developer and food enthusiast who built Foodu to combine the love for clean UI and tasty meals. This project showcases React, TailwindCSS, dynamic routing, and component-based design.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-700">Want to explore dishes? Head back to the <a href="/" className="text-primary font-semibold hover:underline">Home Page</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
