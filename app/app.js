import Ember from 'ember';
import Resolver from './resolver';
import "./controllers/todos";
import "./controllers/todo";
import './models/todo';
import './routes/todos';
import './routes/todos-index';
import './routes/todos-active';
import './routes/todos-completed';
import './views/edit-todo';
import './templates/todos.hbs!hbs';
import './templates/todos-index.hbs!hbs';
import './styles/style.css!css';

export default Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  MODEL_FACTORY_INJECTIONS: true,
  Resolver: Resolver
});

Ember.Router.map(function() {
  this.resource('todos', { path: '/' }, function () {
    this.route('active');
    this.route('completed');
  });
});