var React = require('react');
module.exports = React.createClass({
    render: function() {

        return (
            <li>
                <span>恭喜 <em className="userEm">{this.props.userName}</em></span>
                <span>获得 <em>{this.props.commidityName}</em></span>
            </li>
        );
    }
});
