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

  const pendingCounter = useTracker( () =>
    TasksCollection.find( completedFilter ).count()
  );

  const deleteTask = ({_id}) => {
    TasksCollection.remove(_id);
  };

  return (
    <div>
      <h1>{pendingCounter ? `TO-DO List (${pendingCounter})` : "TO-DO List"}</h1>
      <TaskForm />
      <button
        type="button"
        onClick={() => setHideTasks(!hideTasks)}
      >
        {hideTasks ? 'All Tasks' : 'Hide Completed'}
      </button>
      <ul>
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
