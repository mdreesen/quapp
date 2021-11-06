import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_FEELING } from '../../utils/mutations';
import { QUERY_FEELINGS, QUERY_ME } from '../../utils/queries';

function Mood() {

  const [feelingText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);


  const [addFeeling, { error }] = useMutation(ADD_FEELING, {
    update(cache, { data: { addFeeling } }) {
      try {
        // update feeling array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { feelings } = cache.readQuery({ query: QUERY_FEELINGS });
        cache.writeQuery({
          query: QUERY_FEELINGS,
          data: { feelings: [addFeeling, ...feelings] }
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, feelings: [...me.feelings, addFeeling] } }
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

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      // add feeling to database
      await addFeeling({
        variables: { feelingText }
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
      <div className="card box-shadow-back" style={{ width: '18rem' }}>
        <div className="card-body">
        <h3>How are you feeling today?</h3>
          <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
            Character Count: {characterCount}/280
            {error && <span className="ml-2">Something went wrong...</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-stretch"
            onSubmit={handleFormSubmit}
          >
            <textarea
              placeholder="Please let your midwife know how you are doing"
              value={feelingText}
              className="form-input col-12 col-md-9"
              onChange={handleChange}
            ></textarea>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Mood;