var React = require('react');
var jQuery = require('jquery');
module.exports = React.createClass({
    render: function() {
        return (
            <ul>
                <li className="nav-btn">
                    <a href="/">
                        <img src="http://p7.qhimg.com/t01f897964223908071.png" alt="" />
                        <p>首页</p>
                    </a>
                </li>
                <li className="nav-btn">
                    <a href="/list">
                        <img src="http://p7.qhimg.com/t0161b11447cd235804.png" alt="" />
                        <p>全部商品</p>
                    </a>
                </li>
                <li className="nav-btn">
                    <a href="/latest">
                        <img src="http://p7.qhimg.com/t019e55e7fcf1653d1a.png" alt="" />
                        <p>马上开奖</p>
                    </a>
                </li>
                <li className="nav-btn">
                    <a href="/me">
                        <img src="http://p5.qhimg.com/t01b3c64c804fd8dd11.png" alt="" />
                        <p>我的</p>
                    </a>
                </li>
            </ul>
        );
    }
});
