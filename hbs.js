import Ember from "ember";

export function translate(load) {
  var input = Ember.Handlebars.precompile(load.source, false);
  return 'define(["ember"], function (Ember) {\n' +
      'return Ember.Handlebars.template(' + input + '); });';
}