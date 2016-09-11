var React = require('react');
module.exports = React.createClass({

    render: function() {
        var SwitchDatas = this.props.SwitchDatas;
        return (
            <div className="carousel-control">
                <span className="control-item"></span>
                <span className="control-item"></span>
                <span className="control-item"></span>
                <span className="control-item"></span>
            </div>
        );
    }
});
