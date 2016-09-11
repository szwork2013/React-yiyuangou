var React = require('react');
var SwitchableList= require('./SwitchableList.js');
import '../../common/MobileSlider.js'
import ReactDOM from 'react-dom'
module.exports = React.createClass({
    getInitialState: function() {
        var SwitchDatas = [
            {
                key: 1,
                link: 'http://dev.tg.wan.360.cn/?channel=515303807&gkey=qyz&pkey=wan&ad_id=28050&placeid=',
                imgUrl: 'http://p0.qhimg.com/t0172745e9bf658973e.jpg',
            },
            {
                key: 2,
                link: 'http://mall.jd.com/index-1000007585.html',
                imgUrl: 'http://p0.qhimg.com/t015c737290644fa9aa.jpg',
            },
            {
                key: 3,
                link: 'http://mall.360.com/shouji/q5',
                imgUrl: 'http://p6.qhimg.com/t013cb1b8d819e729e7.jpg',
            },
            {
                key: 4,
                link: 'http://dmol.wan.360.cn/game_login.php?server_id=S206&src=hao-gamelblb-dmol&channel=515303806&advid=515303806__dmol__S206__25140&ad_id=28049&placeid=',
                imgUrl: 'http://p4.qhimg.com/t0105a4affd8c5c6a40.jpg',
            },
            {
                key: 5,
                link: 'http://sale.jd.com/act/guXmKoHwOfd2ZT.html',
                imgUrl: 'http://p5.qhimg.com/t01a9bf1429e25fbd54.jpg',
            }
        ];
        return {
            SwitchDatas: SwitchDatas
        }
    },
    componentDidMount() {
        var $ul = $("#switchable ul"),
            $li = $("#switchable li"),
            $main = $(".main"),
            len = $li.length;
        $li.css({
            width: $main.width(),
            height: (360 / 640) * $main.width(),
        });
        $ul.css({
            width: $main.width() * len,
            height: (360 / 640) * $main.width(),
        });

        $("#switchable").yxMobileSlider({
            width: $main.width(),
            height: (360 / 640) * $main.width(),
            during: 3000
        });
    },
    render: function() {
        return (
            <div>
            <div className="kePublic">
                <div className="slider">
                    <SwitchableList SwitchDatas={this.state.SwitchDatas}/>
                </div>
                </div>
            </div>

        );
    }
});
