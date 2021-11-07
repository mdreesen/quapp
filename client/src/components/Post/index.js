import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

function Post() {

  const [postText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);


  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        // update feeling array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] }
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } }
      });
    }
  });

  // update state based on form input changes
  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };


  const keys = (event, handleChange) => {
    console.log(event.code)

    return event.code === 'KeyQ' || event.code === 'KeyU' || event.code === 'KeyA' || event.code === 'KeyC' || event.code === 'KeyK' ? handleChange : '';

    // if (event.keyCode === 81) {
    //   console.log(event.keyCode)
    //   return event.keyCode
    // }
    // // u
    // if (event.keyCode === 85) {
    //   console.log(event.keyCode)

    //   return event.keyCode
    // }
    // // a
    // if (event.keyCode === 65) {
    //   console.log(event.keyCode)

    //   return event.keyCode
    // }
    // // c
    // if (event.keyCode === 67) {
    //   console.log(event.keyCode)

    //   return event.keyCode
    // }
    // // k
    // if (event.keyCode === 75) {
    //   console.log(event.keyCode)

    //   return event.keyCode
    // }
  }

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      // add feeling to database
      await addPost({
        variables: { postText }
      });

      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="card-body">
        <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
          Character Count: {characterCount}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <form
          className="flex-row justify-center justify-space-between-md align-stretch"
          onSubmit={handleFormSubmit}
        >
          <div><input id="post_text" name="postText" value={postText} onKeyDown={keys} onChange={keys && handleChange} autoComplete="on" placeholder="quack" /></div>

          <button className="btn" type="submit">
            Submit
            </button>
        </form>
      </div>
    </div>
  );
}

export default Post;