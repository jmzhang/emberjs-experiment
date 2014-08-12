import Ember from 'ember';

export default Ember.DefaultResolver.extend({

  parseName: function parseName(fullName) {
    var type = fullName.split(':')[0],
        name = fullName.split(':')[1];

    return {
      fullName: fullName,
      fullNameWithoutType: name,
      type: type,
      name: name,
      root: Ember.get(this, 'namespace'),
      resolveMethodName: "resolve" + Ember.String.classify(type)
    };
  },

  normalize: function(fullName) {
    var type = fullName.split(':')[0],
        name = fullName.split(':')[1],
        normalizedName;

    if (name.length > 1) {
      if (type == "template") {
        normalizedName = Ember.String.dasherize(name.replace(/\./g, '/')) + '.hbs!hbs';
      } else {
        normalizedName = Ember.String.dasherize(name.replace(/\./g, '/'));
      }
      if (System.has('app/' + type + 's/' + normalizedName)) {
        return type + ":" + normalizedName;
      }

      if (type == "template") {
        normalizedName = Ember.String.dasherize(name.replace(/\./g, '-')) + '.hbs!hbs';
      } else {
        normalizedName = Ember.String.dasherize(name.replace(/\./g, '-'));
      }
      if (System.has('app/' + type + 's/' + normalizedName)) {
        return type + ":" + normalizedName;
      }
    }

    return this._super(fullName);
  },

  resolveOther: function(parsedName) {
    var module = System.get('app/' + parsedName.type + 's/' + parsedName.name);
    if (module && module['default']) {
      return module['default'];
    } else return this._super(parsedName);
  }
})