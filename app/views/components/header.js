/** @jsx React.DOM */
var React = require('react/addons');

module.exports = React.createClass({
  rightAction: function(){
    console.log('rightAction');
    this.props.rightAction && this.props.rightAction();
  },
  render: function () {
    return (
      <header className="bar bar-nav">
        <a href="#" className={"icon icon-left-nav pull-left " + (this.props.back==="true"?"":"hidden")}></a>
        <a href="#" className={"icon icon-close pull-left " + (this.props.leftState==="cancel"?"":"hidden")}></a>


        <a href="javascript:;" onClick={this.rightAction} className={"icon icon-check pull-right " + (this.props.rightState==="publish"?"":"hidden")}></a>
        <a href={this.props.link} className={"icon icon-plus pull-right " + (this.props.state==="new"?"":"hidden")}></a>
        <a href={this.props.link} className={"icon icon-list pull-right " + (this.props.filter==="true"?"":"hidden")}></a>
        <h1 className="title">{this.props.text}</h1>
      </header>
    );
  }
  // <a href="#about" className="icon icon-bars pull-right"></a>
});
