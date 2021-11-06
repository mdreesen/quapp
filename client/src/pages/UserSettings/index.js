import React from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/react-hooks';
// import { QUERY_BIRTHWORKERS } from '../../utils/queries';
import Auth from '../../utils/auth';

import UserInfo from '../../components/UserInfo';
import NavbarUser from '../../components/NavbarUser';

function UserSettings() {

    return(

        <div>
            <NavbarUser />
            {Auth.loggedIn() ? (
                <div>
                    <UserInfo />
                    <div>
                    </div>
                </div>

            ) : (
                <h5>Please log in to to be a part of our community!</h5>
            )}
        </div>
    );
}

export default UserSettings;