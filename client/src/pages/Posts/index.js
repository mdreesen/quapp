import React from 'react';
import Auth from '../../utils/auth';
// import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS } from '../../utils/queries';

import NavbarUser from '../../components/NavbarUser';

const Post = () => {

    const { loading, data } = useQuery(QUERY_POSTS)
    console.log('data', data)

    const post = data?.posts || [];
    console.log('post', post)

    const AllPosts = data?.posts?.map((userPost, index) => {
        if (loading) {
            return (
                <h2>loading Quacks</h2>
            );
        } else {
            return (
                <> 
                     <div key={`each-card-${userPost?._id}`} className="card box-shadow-back" style={{width: '18rem'}}>
                        <div className="card-body">
                            <p>{index + 1}</p>
                            <p className="card-text">{userPost?.postText}</p>
                        </div>
                    </div>
                </>
            )
        }
    })

    
    return (
        <div>
        <NavbarUser />
        {Auth.loggedIn() ? (
            <div>
            <h1>Quack</h1>
            {/* <AllPosts/> */}
            </div>

        ) : (
            <h5>Please log in to to be a part of our community!</h5>
        )}
        </div>
    );
};

export default Post;