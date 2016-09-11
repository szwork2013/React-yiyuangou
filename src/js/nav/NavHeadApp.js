var React = require('react');
var jQuery = require('jquery');
module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <div className="logo">
                    <img src="http://p9.qhimg.com/t01d69f9046e7bf2bf8.png" />
                </div>
                <ul>
                    <li className="nav-btn">
                        <a href="/">
                            <p>首页</p>
                        </a>
                    </li>
                    <li className="nav-btn">
                        <a href="/list">
                            <p>全部商品</p>
                        </a>
                    </li>
                    <li className="nav-btn">
                        <a href="/latest">
                            <p>马上开奖</p>
                        </a>
                    </li>
                    <li className="nav-btn">
                        <a href="/me">
                            <p>我的</p>
                        </a>
                    </li>
                    <li className="bg activeLi">

                        <p></p>

                    </li>
                </ul>
            </div>
        );
    }
});
