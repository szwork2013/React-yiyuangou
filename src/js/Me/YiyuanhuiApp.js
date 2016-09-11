var React = require('react');
module.exports = React.createClass({
    render: function() {

        return (
            <div>
                <div className="me-img">
                    <img src={this.props.YiyuanhuiData.avatar} alt="" />
                    <span>
                        {this.props.YiyuanhuiData.nickname}
                    </span>
                </div>
                <div className="me-money">
                    <div className="">
                        <p>
                            {this.props.YiyuanhuiData.balance}
                        </p>
                        <p>
                            <a className="libao">欢乐豆 ></a>
                        </p>
                    </div>
                    <div className="">
                        <a className="add-money-btn">充值</a>
                    </div>
                    <div className="">
                        <p>
                            0
                        </p>
                        <p>
                            <a className="libao">欢乐礼包 ></a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
});
