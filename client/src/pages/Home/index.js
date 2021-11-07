import React from 'react';

// import components
import NavbarUser from '../../components/NavbarUser';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME_BASIC } from '../../utils/queries';

function Home(props) {
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    console.log(userData)

    return(
        <div>
            <div>
            <NavbarUser/>
                {userData && Auth.loggedIn() ? (
                    <>
                    <div className="">
                    <h2>Welcome</h2>
                    <p>This is Quapp</p>
                    <p>A place where we can just quack it out, cause why not</p>
                    <p>head over to the quack page and post come quacks</p>
                    </div>
                    </>
                ) : (
                    <>
                    <h5>Please log in to to be a part of our community!</h5>
                    </>
                )}
            </div>
        </div>
    );
}

export default Home;