import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME_BASIC } from '../../utils/queries';
import Auth from '../../utils/auth';

function UserInfo() {
    
    const { data: userData } = useQuery(QUERY_ME_BASIC);

    const loggedIn = Auth.loggedIn();

    return(
        <div>
        {loggedIn && userData ? (
            <>
                <h1>{userData.me.username}'s profile</h1>
                <h2>{userData.me.firstname}</h2>
                <h2>{userData.me.lastname}</h2>
                <h2>{userData.me.email}</h2>
        </>
        ) : (
            <>
            <h5>Please log in to to be a part of our community!</h5>
            </>
        )}
      </div>
    );
}

export default UserInfo;