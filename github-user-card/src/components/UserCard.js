import React from 'react';

export default (props) => {
    return(
        <div style={{border: '1px solid black'}}>
            <img src={props.userData.avatar_url} alt={`profile picture`}/>
            <h3>{props.userData.login}</h3>
        </div>
    )
}