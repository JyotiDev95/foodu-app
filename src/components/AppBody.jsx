import React, { useState, useEffect } from 'react';
import  RestaurantCard, {higherRestaurantCard} from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import Carousel from './SliderHome';


export const AppBody = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filtertheRestaurantList, setFiltertheRestaurantList] = useState([])
  const [searchList, setSearchList] = useState("");

const UpdatedRestaurantCard = higherRestaurantCard(RestaurantCard)

  useEffect(() => {
    fetchData();
    //using below code the render will happen in every 3000 seconds
    // const intervalId = setInterval(()=>{
    //   fetchData();
    // },3000)

    // return () => {
    //   clearInterval(intervalId);
    //   console.log('Cleanup: Interval cleared');
    // };
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/recipes");
      const jsonData = await data.json();
console.log(jsonData)
      setlistOfRestaurant(jsonData.recipes);
      setFiltertheRestaurantList(jsonData.recipes);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onlineStateUpdate = useOnlineStatus();

  if(onlineStateUpdate===false)return <h1 className='text-2xl font-bold p-4'>There is somthing worng!! please check your Internet Connection...</h1>


  // conditional rendering
  return listOfRestaurant == 0 ? <Shimmer /> :
    (<div>
      {/* slider */}
       <div className="bg-gray-100 p-8">
      <Carousel />
    </div>
      <div className="body p-2">
        <div className='flex justify-between my-4 '>
          <div className="search">
            <input type='text' value={searchList} onChange={(e) => setSearchList(e.target.value)} className='border border-slate-500 h-8 p-2 border-spacing-1 rounded-lg mr-2 outline-none focus:border-primary' />
            <button
              onClick={() => {
                const normalizedSearchList = searchList.trim().toLowerCase();
                const filtered = listOfRestaurant.filter((res) => res.name.toLowerCase().includes(normalizedSearchList))
                console.log(searchList)
                setFiltertheRestaurantList(filtered)
              }}>
              Search</button>
          </div>
          <button className='filter-btn bg-primary p-2 rounded-md text-white hover:bg-yellow-500'
              onClick={() => {
                const filtered = listOfRestaurant.filter((res) => res.rating >= 4.9)
                // console.log(searchList)
                setFiltertheRestaurantList(filtered)
              }}>Top Restaurants</button>

        </div>
        <div className=" mt-2 flex flex-wrap gap-4 mb-12">
          {filtertheRestaurantList.map((item) => (
            <Link key={item.id} className='flex-1'
            to={'/recipes/'+item.id}>


{item.tags.includes("Chicken") || item.tags.includes("Beef") || item.ingredients.includes("meat") || item.name.includes("Chicken") || item.instructions.includes("meat") 
  ? <UpdatedRestaurantCard resData={item} /> 
  : <RestaurantCard resData={item} />
}
          </Link>
          ))}
        </div>
      </div>
      </div>
    );
};