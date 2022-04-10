import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { TasksCollection } from '../api/tasks';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}, {sort: {createdAt: -1} }).fetch());

  return (
    <div>
      <h1>TO-DO List</h1>
      <TaskForm />
      <ul>
        { tasks.map( ( task, i ) => (
          <Task
            key={ i }
            task={ task }
          />
        ))}
      </ul>
    </div>
  );
}
