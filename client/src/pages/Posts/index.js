import React from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS } from '../../utils/queries';

import NavbarUser from '../../components/NavbarUser';

const Post = () => {

    const { loading, data } = useQuery(QUERY_POSTS)

    const post = data?.posts || {};

    console.log('post', post)

    const AllPosts = () => {
        if (loading) {
            return (
                <h2>loading Quacks...</h2>
            );
        } else {
            return post?.map((userPost, index) => {
                return (
                    <>
                        <div key={`each-card-${userPost?._id}`} className="card box-shadow-back" style={{ width: '50vh' }}>
                            <div className="card-body" key={`each-card-${userPost?._id}`}>
                                <h5>{userPost.email}</h5>
                                <h6>{index + 1}</h6>
                                <p className="card-text">{userPost?.postText}</p>
                            </div>
                        </div>
                    </>
                )
            })
        }
    }


    return (
        <div>
            <NavbarUser />
            {Auth.loggedIn() ? (
                <div>
                    <h1>Quack</h1>
                    <div className="row">
                        <AllPosts />
                    </div>
                </div>

            ) : (
                    <h5>Please log in to to be a part of our community!</h5>
                )}
        </div>
    );
};

export default Post;