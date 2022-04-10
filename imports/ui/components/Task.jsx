import React, { useState } from 'react';

const Task = ( { task, deleteBtn } ) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = ( e ) => {
    if (!isChecked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }

  return ( <li>
    {console.log(task)}
    <input
      type="checkbox"
      onChange={handleChange}
      checked={isChecked}
    />
    <p>{ task.text }</p>
    <button type="submit" onClick={() => deleteBtn(task)}>Delete</button>
  </li>);
};

export default Task;