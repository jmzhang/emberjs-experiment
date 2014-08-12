import DS from 'ember-data';

var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todo.FIXTURES = [
  {
    id: 1,
    title: 'Load Ember App with SystemJS loader',
    isCompleted: true
  },
  {
    id: 2,
    title: 'Implement the resolver',
    isCompleted: true
  },
  {
    id: 3,
    title: 'Improve app folder structure',
    isCompleted: false
  },
  {
    id: 4,
    title: 'Add handlebar and css plugins as dependencies via jspm',
    isCompleted: false
  }
];

export default Todo;
