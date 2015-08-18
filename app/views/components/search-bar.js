/** @jsx React.DOM */
var React = require('react/addons');

module.exports = React.createClass({
  searchHandler: function() {
    this.props.searchHandler(this.refs.searchKey.getDOMNode().value);
  },
  render: function () {
    return (
      <div className="bar bar-standard bar-header-secondary">
        <input type="search" ref="searchKey" onChange={this.searchHandler} value={this.props.searchKey}/>
      </div>
    );
  }
});
