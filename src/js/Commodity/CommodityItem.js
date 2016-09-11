var React = require('react');
var ProgressBar = require('./ProgressBar.js');
var Pics = require('./Pics.js');
var CountDown = require('./CountDown.js');
var PicsCountDown = require('./PicsCountDown.js');

module.exports = React.createClass({
    render: function() {
        var RenderTpl = '';
        var RenderTplA = '';
        if(this.props.RenderType === 'CountDown') {

            RenderTpl = <CountDown timeEnd={this.props.timeEnd}/>;
            RenderTplA = <PicsCountDown  imgUrl={this.props.imgUrl}
                                         totalPeople={this.props.totalPeople}
                                         commodityName={this.props.commodityName}
                                         issueNum={this.props.issueNum}
                                         issueId={this.props.issueId}
                                         commodityId={this.props.commodityId}
                                        />;
        } else if(this.props.RenderType === 'buy') {
            RenderTplA = <PicsCountDown  imgUrl={this.props.imgUrl}
                                        joinPeople={this.props.joinPeople}
                                        commodityName={this.props.commodityName}
                                        issueNum={this.props.issueNum}
                                        issueId={this.props.issueId}
                                        commodityId={this.props.commodityId}
                                        timeEnd={this.props.timeEnd}
                                    />;
        }
        else {
            RenderTpl = <ProgressBar totalPeople={this.props.totalPeople}
                            joinPeople={this.props.joinPeople}
                            restPeople={this.props.restPeople}
                            commodityName={this.props.commodityName}
                            commodityId={this.props.commodityId}
                            issueNum={this.props.issueNum}
                            issueId={this.props.issueId}
                            timeEnd={this.props.timeEnd}
                            desc={this.props.desc}
                        />;
            RenderTplA = <Pics imgUrl={this.props.imgUrl}
                               joinPeople={this.props.joinPeople}
                               commodityName={this.props.commodityName}
                               issueNum={this.props.issueNum}
                               issueId={this.props.issueId}
                               commodityId={this.props.commodityId}
                               timeEnd={this.props.timeEnd}
                        />
        }
        return (
            <li className="count-down-li" data-dd={this.props.issueId} aria-dd={this.props.issueNum}>
                {RenderTplA}
                {RenderTpl}
            </li>
        );
    }
});
