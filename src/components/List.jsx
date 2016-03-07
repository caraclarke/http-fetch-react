// use caps for file name so you can identify as component -- not required

var React = require('react');
var ListItem = require('./ListItem.jsx');
// have to put file extension because .jsx not .js which is what it automatically looks for
var HTTP = require('../services/httpservices');

// test data - real data would live somewhere else
// var ingredients = [{'id':1, 'text':'ham'}, {'id':2, 'text':'cheese'}, {'id':3, 'text':'potatoes'}];

var List = React.createClass({
  getInitialState: function() {
    return {ingredients: []};
  },
  componentWillMount: function() {
    // use to make web requests, component ready to go and now can make web request to populate with data
    // all web requests done here 
  },
  render: function() {
    var listItems = this.state.ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />
    });

    return(<ul>{listItems}</ul>);
  }
});

module.exports = List;