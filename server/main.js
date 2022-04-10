import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/tasks';

const insertTask = taskText => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
  if ( TasksCollection.find().count() === 0 ) {
    [].forEach(insertTask)
  }
});
