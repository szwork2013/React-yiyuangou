var React = require('react');
module.exports = React.createClass({
    render: function() {

        return (
            <div>
                <div className="box">{this.props.number}</div>
            </div>
        );
    }
});
