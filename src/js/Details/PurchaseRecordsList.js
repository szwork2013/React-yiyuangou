var React = require('react');
var PurchaseRecordsItem = require('./PurchaseRecordsItem.js');
module.exports = React.createClass({
    render: function() {
        var userInfo = this.props.userInfo;
        if( !Array.isArray(userInfo) ) {

            console.log('格式不对');
        } else {
            var imgComps = userInfo.map(function(userInfoData) {
                return <PurchaseRecordsItem peopleImg={userInfoData.headImgUrl}
                            peopleName={userInfoData.nickName}
                            peopleCount={userInfoData.buyNumber}
                            timeDate={userInfoData.time}
                        />
            });
        }
        return (
            <div>
                <div className="Purchase-records">已售记录</div>
                {imgComps}
            </div>
        );
    }
});
