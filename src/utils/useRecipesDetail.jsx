import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const useRecipesDetail =()=>{
        const { userId } = useParams();
    const[recipesDetailData, setRecipesDetailData] = useState(null)

    useEffect(() => {
    fetchData()
    }, [])
    
    const fetchData = async ()=>{
        const data = await fetch(`https://dummyjson.com/recipes/${userId}`);
        const jsonData = await data.json()
        setRecipesDetailData(jsonData)
    }

    return recipesDetailData
}

export default useRecipesDetail;
