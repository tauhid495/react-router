import React, { useEffect, useState } from 'react';
import MealFound from '../mealFound/MealFound';
import './mealSearch.css';

const MealSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const searchFood = e => {
        setSearchText(e.target.value);
    }

    if (meals == null) {
        return (
            <div>
                <h2>Hungry Naki? Aikhane Khuija Dekho.....</h2>
                <div className='flex'>
                    <p>Search Here : </p>
                    <input onChange={searchFood} type="text" name="" id="" /> </div>
                <h1>No Result Found</h1>
                <h2>Still Hungry? Search Again...</h2>
            </div>
        );
    }

    return (
        <div>
            <h2>Hungry Naki? Aikhane Khuija Dekho.....</h2>
            <div className='flex'>
                <p>Search Here : </p>
                <input onChange={searchFood} type="text" name="" id="" /> </div>
            <h3>Meals Found : {meals.length}</h3>
            <div>
                {
                    meals.map(meal => <MealFound key={meal.idMeal} meal={meal} />)
                }
            </div>
        </div>
    );
};

export default MealSearch;