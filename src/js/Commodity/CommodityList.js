var React = require('react');
var CommodityItem = require('./CommodityItem.js');
module.exports = React.createClass({
    render: function() {


        var CommodityDatas = this.props.CommodityDatas;
        var RenderType = this.props.RenderType;
        console.log(this.props.CommodityDatas);
        if( !Array.isArray(CommodityDatas) ) {

            console.log('格式不对');
        } else {
            var CommodityComps = CommodityDatas.map(function(CommodityData) {
                return <CommodityItem
                            key={CommodityData.id}
                            imgUrl={CommodityData.imgUrl}
                            totalPeople={CommodityData.totalPeople}
                            joinPeople={CommodityData.joinPeople}
                            restPeople={CommodityData.restPeople}
                            commodityName={CommodityData.commodityName}
                            commodityId={CommodityData.commodityId}
                            issueId={CommodityData.issueId}
                            issueNum={CommodityData.issueNum}
                            RenderType={RenderType}
                            timeEnd={CommodityData.timeEnd}
                            desc={CommodityData.commodityDesc}
                        />
            });
        }
        return (
            <ul>
                {CommodityComps}
            </ul>
        );
    }
});
