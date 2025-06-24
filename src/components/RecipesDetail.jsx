import Shimmer from './Shimmer';
import RecommendedCards from './RecommendedCards';
import useRecipesDetail from '../utils/useRecipesDetail';
import ResCategory from './ResCategory';

const RecipesDetail = () => {
    const recipesState = useRecipesDetail();

    if (!recipesState || recipesState === null) { return <Shimmer /> }
    const { name, instructions, cuisine, cookTimeMinutes, image } = recipesState;

    return (
        <div className='main-container px-2 py-4'>
            <div className=''>
                <img src={image} alt={name} className='max-w-32 max-h-32' />
                <h1 className='text-2xl mt-4'>{name}</h1>
                <h2 className='text-blue-950'>{cuisine}</h2>
                <ul className='list-disc list-inside'>
                    {instructions.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>Cooking time: {cookTimeMinutes}</p>
            </div>
            <h3 className='font-bold mt-2 text-1xl'>Recommended Recipies</h3>
            <RecommendedCards />

            <ResCategory />

        </div>
    )
}

export default RecipesDetail;
