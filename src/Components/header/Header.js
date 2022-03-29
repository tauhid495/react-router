import React from 'react';
import CustomLink from '../customlink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome To React Routes Page</h1>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to="/friends">Friends</CustomLink>
            <CustomLink to="/aboutus">AboutUs</CustomLink>

        </div>
    );
};

export default Header;