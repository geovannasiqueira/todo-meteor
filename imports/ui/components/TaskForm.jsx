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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="new task"
        value={text}
        onChange={handleChange}
      />

      <button
        type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
