// define actions you wanna put in your project to interact with components and data store

var Reflux - require('reflux');

var Actions = Reflux.createActions([
  'getIngredients',
  'postIngredient'
  // actions in your app that are going to manipulate or retrieve data in some form or fashion
  // actions for your whole app not necessarily tied to HTTP request
]);

module.exports = Actions;