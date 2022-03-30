import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;

    const navigate = useNavigate();

    const friendDetail = () => {
        const path = `/friends/${id}`
        navigate(path);
    }

    return (
        <div>
            <h1>Friend Detail</h1>
            <h2>Name : {name}</h2>
            <button onClick={friendDetail}> {username} </button>
        </div>
    );
};

export default Friend;