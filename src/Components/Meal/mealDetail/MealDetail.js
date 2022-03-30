import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const { idMeal } = useParams();
    const [khana, setKhana] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

        fetch(url)
            .then(res => res.json())
            .then(data => setKhana(data.meals[0]))
    }, []);
    return (
        <div>
            <h1>Meall Detail: </h1>
            <img src={khana.strMealThumb} alt="" />
            <h2>Meal Name: {khana.strMeal}</h2>
            <h4>Catagory : {khana.strCategory}, Tags : {khana.strTags}</h4>
            <h4>Area : {khana.strArea}</h4>
            <p> Instructions: {khana.strInstructions}</p>
        </div>
    );
};

export default MealDetail;