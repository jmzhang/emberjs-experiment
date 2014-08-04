System.config({
  "paths": {
    "*": "*.js",
    "npm:*": "vendor/npm/*.js",
    "github:*": "vendor/github/*.js"
  }
});

System.config({
  "map": {
    "ember": "github:components/ember@^1.6.1",
    "github:components/ember@1.6.1": {
      "jquery": "github:components/jquery@^2.1.1",
      "handlebars.js": "github:components/handlebars.js@^1.3.0"
    },
    "ember-data": "github:components/ember-data@^1.0.0-beta.8",
    "github:components/ember-data@1.0.0-beta.8": {
      "ember": "github:components/ember@^1.6.1"
    }
  }
});

System.config({
  "versions": {
    "github:components/ember": "1.6.1",
    "github:components/jquery": "2.1.1",
    "github:components/handlebars.js": "1.3.0",
    "github:components/ember-data": "1.0.0-beta.8"
  }
});

