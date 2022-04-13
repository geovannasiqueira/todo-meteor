import React, { useState } from 'react';
import { TasksCollection } from '../../api/tasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const TaskForm = () => {
  const [ text, setText ] = useState( '' );

  const handleChange = ( { target } ) => {
    setText( target.value );
  };

  const handleSubmit = ( event ) => {
    event.preventDefault();
    text && TasksCollection.insert( {
      text: text.trim(),
      createdAt: new Date(),
    } );

    setText('');
  };

  return (
    <form
      onSubmit={ handleSubmit }
      className="flex justify-between"
    >
      <input
        type="text"
        placeholder="new task"
        value={text}
        onChange={ handleChange }
        className="input input-bordered input-sm mr-0.5 w-44"
      />

      <button
        type="submit"
        className="btn btn-sm rounded-full"
      >
        <FontAwesomeIcon className="" icon={faPlus} />
      </button>
    </form>
  );
}

export default TaskForm;
