import React from 'react';
import SearchForm from './SearchForm';
import UserCard from './UserCard';
import Followers from './Followers';

export default (props) => {
    return(
        <div>
            <SearchForm setUserName={props.setUserName}/>
            <UserCard userData={props.userData} />
            <Followers followers={props.followers}/>
        </div>
    )
}