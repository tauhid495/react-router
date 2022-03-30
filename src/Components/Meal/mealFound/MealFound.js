import React from 'react';
import { useNavigate } from 'react-router-dom';

const MealFound = ({ meal }) => {
    const { strMeal, strMealThumb, idMeal } = meal;

    const navigate = useNavigate();

    const mealDetail = () => {
        const path = `/mealsearch/${idMeal}`
        navigate(path);
    }

    return (
        <div>
            <img src={strMealThumb} alt='' />
            <h3>{strMeal}</h3>
            <button onClick={mealDetail}>{idMeal}</button>
        </div>
    );
};

export default MealFound;