import React from 'react';
import UserCard from './UserCard';

export default (props) => {
    return(
        <div>
            followers
            {
                props.followers.map(user => <UserCard userData={user}/>)
            }
        </div>
    )
}