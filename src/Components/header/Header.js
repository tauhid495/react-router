import React from 'react';
import CustomLink from '../customlink/CustomLink';

const Header = () => {
    return (
        <div className='bg-blue-900 text-white mb-16 grid grid-cols-2 py-4'>
            <h1 className='text-2xl font-semibold'>Welcome To React Routes Page</h1>
            <div className='pl-48 grid grid-cols-4'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/aboutus">AboutUs</CustomLink>
                <CustomLink to="/mealsearch">SearchMeal</CustomLink>

            </div>
        </div>
    );
};

export default Header;