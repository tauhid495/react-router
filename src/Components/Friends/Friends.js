import React, { useEffect, useState } from 'react';
import Friend from '../friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))

    }, [])

    return (
        <div>
            <h1>This is Friends Page</h1>
            <p>Here i decribe my friends activity : {friends.length}</p>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend} />)
            }
        </div>
    );
};

export default Friends;