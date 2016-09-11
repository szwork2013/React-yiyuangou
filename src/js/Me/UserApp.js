var React = require('react');
var BuyHistoryAll = require('./BuyHistoryAll.js');
module.exports = React.createClass({
    render: function() {
        var totalOrders = this.props.totalOrders;
        // var luckyOrders = this.props.MeUserDatas.luckyOrders;

        if( !Array.isArray(totalOrders) ) {

            console.log('格式不对');
        } else {
            var totalComps = totalOrders.map(function(data) {
                return <BuyHistoryAll CommodityImgUrl={data.CommodityImgUrl}
                            CommodityName={data.CommodityName}
                            issueNum={data.issueNum}
                            buyNum={data.buyNum}
                            lotteryNumbers={data.lotteryNumbers}
                            luckyFlag={data.luckyFlag}
                            issueLuckyNum={data.issueLuckyNum}
                        />
            });
        }
        return (
            <div>
                {totalComps}
            </div>
        );
    }
});
