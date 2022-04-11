import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react';
import { TasksCollection } from '../api/tasks';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

export const App = () => {
  const [ hideTasks, setHideTasks ] = useState( false );

  const completedFilter = { isChecked: { $ne: true } };

  const tasks = useTracker(() => TasksCollection.find(hideTasks ?completedFilter : {}, {sort: {createdAt: -1} }).fetch());

  const checkTask = ( { _id, isChecked } ) => {
    TasksCollection.update( _id, {
      $set: {
        isChecked: !isChecked,
      }
    })
  };

  const handleChange = ( { target } ) => {
    if ( target.value === 'hide' ) {
      setHideTasks(true)
    }
    if(target.value === 'all')
    setHideTasks( false );
  }

  const pendingCounter = useTracker( () =>
    TasksCollection.find( completedFilter ).count()
  );

  const deleteTask = ({_id}) => {
    TasksCollection.remove(_id);
  };

  return (
    <div className="w-full h-full m-auto">
      <div className="flex justify-center p-4 text-4xl">
        <h1>
          <FontAwesomeIcon icon={ faListCheck } className="w-5 px-2"/>
          { pendingCounter ? `Tasks (${ pendingCounter })` : "Tasks" }
        </h1>
      </div>
      <div className=" flex justify-around">
        <div className="" >
          <TaskForm />
        </div>
        <div className="flex items-center " >
          <select
            type="select"
            onChange={ handleChange }
            className="select select-bordered select-sm w-full ml-2"
          >
            <option disabled selected>Filter</option>
            <option value="all">All</option>
            <option value="hide">Hide Completed</option>
          </select>
        </div>
      </div>
        <ul className="my-4 h-3/4">
          { tasks.map( ( task, i ) => (
            <Task
              key={ i }
              task={ task }
              deleteBtn={ deleteTask }
              onCheck={ checkTask }
            />
          ))}
        </ul>
    </div>
  );
}
