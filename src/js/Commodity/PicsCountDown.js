var React = require('react');

module.exports = React.createClass({
    render: function() {

        return (
            <a href="javascript:;" className="pic-a" issueNum={this.props.issueNum} commodityId={this.props.commodityId}>
                <img alt="" src={this.props.imgUrl} />
                <div className="f-r">
                    <h4>{this.props.commodityName}</h4>
                    <h4>总需人次：<em>{this.props.totalPeople}</em></h4>
                </div>
            </a>
        );
    }
});
