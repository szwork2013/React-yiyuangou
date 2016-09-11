var React = require('react');

var CommodityList = require('./CommodityList.js');
import ReactDOM from 'react'
module.exports = React.createClass({
    render: function() {
        return (
            <div className="commodity-display">
                <p className="title" data-dd={this.props.title}>
                    <a data-dd={this.props.title}>{this.props.title}</a>
                    <span className="arrow rightArrow"></span>
                </p>
                <div className="commodity-display-border">
                    <CommodityList CommodityDatas={this.props.CommodityDatas} RenderType={this.props.RenderType}/>
                </div>
            </div>
        );
    }
});
