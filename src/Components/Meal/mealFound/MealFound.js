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
            <img className='fluid rounded-lg' src={strMealThumb} alt='' />
            <h3 className='text-2xl font-semibold'>{strMeal}</h3>
            <button className='border-2 px-3 rounded-lg bg-slate-400' onClick={mealDetail}>Click For Detail</button>
        </div>

    );
};

export default MealFound;