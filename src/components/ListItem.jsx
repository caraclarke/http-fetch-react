var React = require('react');
var ListItem = React.createClass({
  // referencing reusabe object oriented programming class

  render: function() {
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    ); // render function returns html element with injected data
  }
});

module.exports = ListItem;