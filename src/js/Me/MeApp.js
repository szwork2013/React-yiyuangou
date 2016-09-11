import React, { Component } from 'react'
import { render } from 'react-dom'

var Header = require('../Details/Header.js');
var UserApp = require('./UserApp.js');
module.exports = React.createClass({
    handleData: function(url, callback) {
    	$.ajax({
            url: url,
            dataType: "jsonp",
            callback: "__callback",
            success: function(res) {
            	if(callback){

            		callback(res);
            	}
            }.bind(this)
        });
    },
    componentDidMount: function() {
        this.handleData('http://36.110.213.229/order/list', function(res) {
            render(
                <UserApp  MeUserDatas={res.data} />,
                document.getElementById('alljoin')
            );
        });
    },
    render: function() {
        return (
            <div>
                <Header title={'我的一元会'}/>
            </div>
        );
    }
});
