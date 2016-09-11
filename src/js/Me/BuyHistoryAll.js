var React = require('react');
var BoxsApp = require('./BoxsApp.js');
module.exports = React.createClass({
    render: function() {
        var numberData = this.props.lotteryNumbers;
        var boxsComps = [];

        for(var i = 0, len = numberData.length; i < len; i ++) {
            boxsComps.push(
                <BoxsApp key={"box-" + i} number = {numberData[i]}/>
            );
        }

        return (
            <li className="count-down-li">
                <div className="spxq">
                    <a href="#" className="pic-a">
                        <img alt="" src={this.props.CommodityImgUrl} />
                    </a>
                    <span className="name">
                        <p className="jl-name fl">{this.props.CommodityName}</p>
                        <p className="zhongjiang fr">
                            {(this.props.luckyFlag == "1" ? "已中奖" : "已参与" )}
                        </p>
                    </span>
                    <span className="name">期号：<em>{this.props.issueNum}</em>
                    </span>
                    <span className="name">我已参与：<em>{this.props.buyNum}</em>人次
                        <p className="detail fr" id="xqbg">
                            详情
                        </p>
                    </span>
                </div>
                <div className="zjxq">
                    <p>
                        购买记录
                    </p>
                    <div className="boxs">
                        <div className="box issueLuckyNum" id={'Lucky' + this.props.issueLuckyNum}> {this.props.issueLuckyNum}</div>
                        {boxsComps}
                    </div>
                </div>
            </li>
        );
    }
});
