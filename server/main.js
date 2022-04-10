import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/tasks';

Meteor.startup(() => {
  console.log(TasksCollection);
});
