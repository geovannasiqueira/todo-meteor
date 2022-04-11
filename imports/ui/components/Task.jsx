import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Task = ( { task, onCheck, deleteBtn } ) => {

  return (
    <div className="bg-white bg-opacity-50 h-10 p-2 rounded-md m-4">
      <li className="w-full flex space-x-4 bg-sky-900 items-center justify-between">
        <input
          type="checkbox"
          onClick={ ()=>onCheck(task) }
          checked={ !!task.isChecked }
          className="checkbox checkbox-xs checkbox-accent bg-white"
          readOnly
        />
        <p className="">{ task.text }</p>
        <button
          type="button"
          onClick={ () => deleteBtn( task ) }
        >
          <FontAwesomeIcon className="text-gray-600" icon={faTrashCan} />
        </button>
      </li>
    </div>
  );
};

export default Task;
