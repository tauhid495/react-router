import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    return (
        <div>
            <h2>This is Friends Detail Page: {friendId}</h2>
            <h3>Name : {friend.name}</h3>
            <h4>E-mail: {friend.email}</h4>
            <p>Website : {friend.website}</p>
            <p>City : {friend.address?.city}</p>
        </div>
    );
};

export default FriendDetail;