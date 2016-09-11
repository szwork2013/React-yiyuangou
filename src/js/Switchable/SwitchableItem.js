var React = require('react');
module.exports = React.createClass({
    render: function() {

        return (
            <li key={this.props.key}>
                <a href={this.props.link}>
                    <img src={this.props.imgUrl} alt="科e互联网站建设团队" />
                </a>
            </li>
        );
    }
});
