var React = require('react');
var jQuery = require('jquery');
module.exports = React.createClass({

    render: function() {
        return (
            <header className="g-header">
            	<h2>{this.props.title}</h2>
            </header>
        );
    }
});
