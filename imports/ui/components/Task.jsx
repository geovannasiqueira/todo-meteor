import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Task = ( { task, onCheck, deleteBtn } ) => {

  return (
    <li className="w-full flex space-x-4 items-center justify-between">
      <input
        type="checkbox"
        onClick={ ()=>onCheck(task) }
        checked={ !!task.isChecked }
        className="checkbox checkbox-xs"
        readOnly
      />
      <p>{ task.text }</p>
      <button
        type="button"
        onClick={ () => deleteBtn( task ) }
      >
        <FontAwesomeIcon className="text-red-600" icon={faTrashCan} />
      </button>
    </li>
  );
};

export default Task;
