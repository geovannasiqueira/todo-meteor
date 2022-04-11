import React, { useState } from 'react';
import { TasksCollection } from '../../api/tasks';

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
        className="input input-bordered input-sm mr-0.5 w-full"
      />

      <button
        type="submit"
        className="btn btn-sm rounded-full"
      >
        +
      </button>
    </form>
  );
}

export default TaskForm;
