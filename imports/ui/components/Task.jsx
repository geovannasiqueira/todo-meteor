import React from 'react';

const Task = ( { task, onCheck, deleteBtn } ) => {

  return ( <li>
    <input
      type="checkbox"
      onClick={ ()=>onCheck(task) }
      checked={ !!task.isChecked }
      readOnly
    />
    <p>{ task.text }</p>
    <button
      type="button"
      onClick={ () => deleteBtn( task ) }
    >
      Delete
    </button>
  </li>);
};

export default Task;
