var React = require('react');
var SwitchableItem = require('./SwitchableItem.js');
module.exports = React.createClass({


    render: function() {
        var SwitchDatas = this.props.SwitchDatas;
        if( !Array.isArray(SwitchDatas) ) {

            console.log('格式不对');
        } else {
            var imgComps = SwitchDatas.map(function(SwitchData) {
                return <SwitchableItem key={SwitchData.key} imgUrl={SwitchData.imgUrl} link={SwitchData.link} />
            });
        }
        return (
            <ul>
                {imgComps}
            </ul>
        );
    }
});
