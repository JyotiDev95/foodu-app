import React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const RestaurantCard = ({resData}) => {
  const { name, cuisine, image, rating = 0, prepTimeMinutes, tags } = resData;
    return (
    <div className='resCard h-full flex-1 bg-gray-100 border border-transparent p-4 min-w-[260px] rounded-lg hover:border-yellow-200 max-w-[288px]'>
      <img src={image || 'https://via.placeholder.com/150'} alt={name} className='max-h-[170px] w-full object-cover mb-4' />
      <h3 className='font-bold'>{name}</h3>
      <h4 className='text-sm'>{cuisine}</h4>
      {/* <h4>{rating} Stars</h4> */}
    
      <h4>{prepTimeMinutes} Minutes</h4>
      <p>{tags ? tags.join(', ') : ''}</p>
        <Box sx={{ width: 200, display: 'flex', alignItems: 'center', mt: 1 }}>
        <Rating
          name="text-feedback"
          value={rating}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2, fontSize: '0.875rem' }}>{labels[rating] }</Box>
      </Box>
    </div>
  )
}


// higher order component

export const higherRestaurantCard = (RestaurantCard) =>{
  return(props)=>{
return(
  <>
 <label className='bg-gradient-to-r from-red-500 to-red-400 text-white p-1 text-sm absolute shadow-md rounded-sm m-2'>Non-Veg</label> 
 {/* by using spread oprator we are passing destructured props item*/}
 <RestaurantCard {...props} />
 </>
)
  }
}
 export default RestaurantCard;