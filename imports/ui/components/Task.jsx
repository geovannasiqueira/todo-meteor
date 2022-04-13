import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Task = ( { task, onCheck, deleteBtn } ) => {

  return (
    <div className="bg-white bg-opacity-50 p-2 rounded-md m-4">
      <li className="w-full flex bg-sky-900 items-center justify-between text-left">
        <div className="flex items-center overflow-x-auto no-scrollbar">
        <input
          type="checkbox"
          onClick={ ()=>onCheck(task) }
          checked={ !!task.isChecked }
          className="checkbox checkbox-xs w-4 mr-4 checkbox-accent bg-white"
          readOnly
        />
        <p className="w-4/5">{ task.text }</p>
        </div>
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
