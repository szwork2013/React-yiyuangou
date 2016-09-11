var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <a href="javascript:;" className="pic-a">
                <img alt="" src={this.props.imgUrl} />
            </a>
        );
    }
});
