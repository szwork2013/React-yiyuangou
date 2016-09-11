var React = require('react');
var ScrollItem = require('./ScrollItem.js');
module.exports = React.createClass({

    render: function() {
        var ScrollDatas = this.props.ScrollDatas;
        console.log(ScrollDatas);
        if( !Array.isArray(ScrollDatas) ) {

            console.log('格式不对');
        } else {
            var imgComps = ScrollDatas.map(function(ScrollData) {
                return <ScrollItem userName={ScrollData.userName} commidityName={ScrollData.commidityName} />
            });
        }
        return (
            <ul>
                {imgComps}
            </ul>
        );
    }
});
