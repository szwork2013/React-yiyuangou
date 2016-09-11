var React = require('react');

module.exports = React.createClass({
    render: function() {
        var range = parseFloat(this.props.joinPeople / this.props.totalPeople);
        
        var ProgressCss = {
            width: range * 100 + "%"
        };
        return (
            <div className="Progress-bar" data-dd={this.props.issueNum} aria-dd={this.props.commodityId}>
                <span className="name">{this.props.issueNum}期：{this.props.commodityName}</span>
                <div className="disc">
                    {this.props.desc}
                </div>
                <p className="u-progress">
                    <span className="pgbar" style={ProgressCss}>
                        <span className="pging"></span>
                    </span>
                </p>
                <div className="Pro-bar-p">
                    <p className="P-bar01"><em>{this.props.joinPeople ? this.props.joinPeople : 0}</em>已参与</p>
                    <p className="P-bar02"><em>{this.props.totalPeople ? this.props.totalPeople : 0}</em>总需人次</p>
                    <p className="P-bar03"><em>{(this.props.totalPeople ? this.props.totalPeople : 0) - (this.props.joinPeople ? this.props.joinPeople : 0)}</em>剩余</p>
                </div>
            </div>
        );
    }
});
