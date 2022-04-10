import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { TasksCollection } from '../api/tasks';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}, {sort: {createdAt: -1} }).fetch());

  const checkTask = ( { _id, isChecked } ) => {
    TasksCollection.update( _id, {
      $set: {
        isChecked: !isChecked,
      }
    })
  };

  const deleteTask = ({_id}) => {
    TasksCollection.remove(_id);
  };

  return (
    <div>
      <h1>TO-DO List</h1>
      <TaskForm />
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
