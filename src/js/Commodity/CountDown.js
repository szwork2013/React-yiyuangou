var React = require('react');
var jQuery = require('jquery');
module.exports = React.createClass({
    getInitialState: function() {

        return{
            time: ''
        }
    },
    render: function() {
        return (
            <div className="count-down">
                <div className="time-item">
                    {this.props.timeEnd}
                </div>
            </div>
        );
    }
});
