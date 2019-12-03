import React from 'react';
import UserCard from './UserCard';
import Followers from './Followers';

export default (props) => {
    return(
        <div>
            <UserCard userData={props.userData} />
            <Followers followers={props.followers}/>
        </div>
    )
}