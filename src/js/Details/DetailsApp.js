var React = require('react');

var Header = require('./Header.js');
var Pics = require('../Commodity/Pics.js');
var ProgressBar = require('../Commodity/ProgressBar.js');
var PurchaseRecordsList = require('./PurchaseRecordsList.js');
module.exports = React.createClass({

    render: function() {

        return (
            <div>
                <Header title={'商品详情'}/>
                <Pics imgUrl={this.props.CommodityDatas.detail.imgUrl}/>

                <ProgressBar totalPeople={this.props.CommodityDatas.detail.totalPeople}
                            joinPeople={this.props.CommodityDatas.detail.joinPeople}
                            restPeople={this.props.CommodityDatas.detail.restPeople}
                            commodityName={this.props.CommodityDatas.detail.commodityName}
                            commodityId={this.props.CommodityDatas.detail.commodityId}
                            issueNum={this.props.CommodityDatas.detail.issueNum}
                            desc={this.props.CommodityDatas.detail.commodityDesc}
                        />
                <div className="pBtn">
                    <a  href="javascript:;" className="f-l buyBtn">立即1元云购</a>
                    <a  href="javascript:;" className="f-r addBtn">加入购物车</a>
                </div>
                <p className="buy-success">
                    购买成功，查看号码
                    <img src="http://p5.qhimg.com/t0146fc38967f84bd85.png"/>
                </p>
                <div className="zjxq">
                    <div className="boxs">
                    </div>
                </div>
                <PurchaseRecordsList userInfo={this.props.CommodityDatas.participants}/>
            </div>
        );
    }
});
