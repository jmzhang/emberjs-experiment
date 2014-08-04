import Ember from 'ember';
import "app/controllers/todos";
import "app/controllers/todo";
import 'app/models/todo';
import 'app/routes/todos';
import 'app/routes/todosIndex';
import 'app/routes/todosActive';
import 'app/routes/todosCompleted';
import 'app/views/editTodo';
import 'app/templates/todos.hbs!hbs';
import 'app/templates/todos.index.hbs!hbs';
import 'app/styles/style.css!css';

export default Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  MODEL_FACTORY_INJECTIONS: true,

  Resolver: Ember.DefaultResolver.extend({

    resolveModule: function(moduleName) {
      return System.has(moduleName) ? System.get(moduleName)['default'] : null;
    },

    resolveModel: function(parsedName) {
      var moduleName = 'app/' + parsedName.type + 's/' + parsedName.fullNameWithoutType;
      return this.resolveModule(moduleName) || this._super(parsedName);
    },

    resolveView: function(parsedName) {
      var moduleName = 'app/' + parsedName.type + 's/' + parsedName.fullNameWithoutType;
      return this.resolveModule(moduleName) || this._super(parsedName);
    },

    resolveHelper: function(parsedName) {
      var moduleName = 'app/' + parsedName.type + 's/' + parsedName.fullNameWithoutType;
      return this.resolveModule(moduleName) || this._super(parsedName);
    },

    resolveController: function(parsedName) {
      var moduleName = 'app/' + parsedName.type + 's/' + parsedName.fullNameWithoutType;
      return this.resolveModule(moduleName) || this._super(parsedName);
    },

    resolveRoute: function(parsedName) {
      var moduleName = 'app/' + parsedName.type + 's/' + parsedName.fullNameWithoutType;
      return this.resolveModule(moduleName) || this._super(parsedName);
    },

    resolveTemplate: function(parsedName) {
      var moduleName = 'app/' + parsedName.type + 's/' + parsedName.fullNameWithoutType + '.hbs!hbs';
      return this.resolveModule(moduleName) || this._super(parsedName);
    }
  })
});

Ember.Router.map(function() {
  this.resource('todos', { path: '/' }, function () {
    this.route('active');
    this.route('completed');
  });
});