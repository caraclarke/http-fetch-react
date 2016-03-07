var HTTP = require('../services/httpservices');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var IngredientStore = Reflux.createStore({
  listenables: [Actions],
  getIngredients: function() {
    HTTP.get('/ingredients')
    .then(function(data) {
      this.setState({ingredients: data}); 
      // ingredients now equal to data coming from server
      // referring to wrong this if say this.setState - needs to be bound using bind
    }.bind(this));
    // making sure function above is bound to component
    // otherwise might refer to something in another file
  },
  postIngredient: function(text) {
    
  },
  // "refresh" function below
  fireUpdate: function() {
    this.trigger('change', this.ingredients);
    // event type is change
    // one function to fire so it is more DRY
    // this.ingredients going to return ingredients, pass data to components
  }
});

module.exports = IngredientStore;