import React, { useState } from 'react';

const Task = ( { task } ) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = ( e ) => {
    if (!isChecked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }

  return (<li>
    <input
      type="checkbox"
      onChange={handleChange}
      checked={isChecked}
    />
    { task.text }
  </li>);
};

export default Task;