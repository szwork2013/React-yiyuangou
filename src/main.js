import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory, History} from 'react-router'
import './css/global/reset.css'
import './css/style.css'
var urlIp = "http://duoshou.hhspace.cn";
class App extends Component {
    render() {
        return (
            <div>
                <div className="head" id="fixed-header">
                    <nav id="nav-head">
                        <div className="logo">
                            <img src="http://p9.qhimg.com/t01d69f9046e7bf2bf8.png" />
                        </div>
                    </nav>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
                <div className="fixed-footer">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">
                                    <img src="http://p7.qhimg.com/t01d1af9e8ab12da047.png" alt="" />
                                    <p>首页</p>
                                </Link>
                            </li>

                            <li>
                                <Link to="/list">
                                    <img src="http://p9.qhimg.com/t01ec80477aa26a6702.png" alt="" />
                                    <p>全部商品</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/latest">
                                    <img src="http://p4.qhimg.com/t019d4aef0ca8969a43.png" alt="" />
                                    <p>马上开奖</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/me">
                                    <img src="http://p5.qhimg.com/t01642cd8c179cce837.png" alt="" />
                                    <p>我的</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

import SwitchableApp from './js/Switchable/SwitchableApp.js';
import ScrollLuckyApp from './js/Switchable/ScrollLuckyApp.js';
import CommodityApp from './js/Commodity/CommodityApp.js';
import DetailsApp from './js/Details/DetailsApp.js';
import handleData from './js/handleData.js';
import scrollTop from './js/scrollTop.js';
class Index extends React.Component {

    componentWillMount() {
        var baseUrl = urlIp + '/commodity/category/?';
        var self = this;
        scrollTop();
        handleData(urlIp + '/commodity/hotsale?num=6', function(res) {

            render(
                <CommodityApp  CommodityDatas={res.data} title={"火热进行"} />,
                document.getElementById('soon-announced')
            );
        });


        handleData(urlIp + '/recommendation', function(res) {

            render(
                <CommodityApp  CommodityDatas={res} title={"猜你喜欢"} />,
                document.getElementById('Guess')
            );
        });

        handleData(urlIp + '/lottery/recentwinner', function(res) {

            render(
                <ScrollLuckyApp  ScrollDatas={res.winners} />,
                document.getElementById('scroll-lucky')
            );
            var countIndex = 1,
                $li = $("#scroll-lucky li"),
                $ul = $("#scroll-lucky ul"),
                h = $li.eq(0).height(),
                len = $li.length;

            setInterval(function() {
                $ul.animate({
                    "top": -countIndex * h
                }, function() {
                    if(countIndex < len - 1)
                        countIndex += 1;
                    else{
                        countIndex = 1;
                        $ul.css("top", 0);
                    }

                });
            }, 2000);
        });

        var gameTitle = '游戏';

        handleData(urlIp + '/commodity/category/?commodityName=游戏&num=6', function(res) {

            render(
                <CommodityApp CommodityDatas={res.data} title={gameTitle}/>,
                document.getElementById('game')
            );
        });

        var phoneTitle = '手机';

        handleData(urlIp + '/commodity/category/?commodityName=手机&num=4', function(res) {

            render(
                <CommodityApp CommodityDatas={res.data} title={phoneTitle}/>,
                document.getElementById('phone')
            );
        });

        var computerTitle = '电脑';

        handleData(urlIp + '/commodity/category/?commodityName=电脑&num=4', function(res) {

            render(
                <CommodityApp CommodityDatas={res.data} title={computerTitle}/>,
                document.getElementById('computer')
            );

            setTimeout(function() {

                $(".title").click(function(ev) {
                    ev.preventDefault();

                    var title = $(this).attr('data-dd');
                    if(title == '猜你喜欢')
                        return;
                    var url = '/list?commodityName=' + title;
                    self.props.history.pushState(null, url);
                    scrollTop();
                });
            }, 1000)
        });

    }
    componentDidMount() {
        var self = this;
        var time = setInterval(function() {
            if($(".count-down-li").length > 0) {

                clearInterval(time);
                $(".count-down-li").click(function(ev) {
                    ev.preventDefault();
                    var url = "/details?issueId=" + $(this).attr("data-dd");
                    self.props.history.pushState(null, url);
                    scrollTop();
                });
            }
        }, 1000);
    }
    render() {
        return (
            <div>
                <div className="switch" id="switchable">
                    <SwitchableApp />
                </div>
                 <div id="Guess">

                </div>
                <div id="scroll-lucky">

                </div>
                <div id="soon-announced">
                </div>

                <div id="phone">
                </div>

                <div id="game">
                </div>


                <div id="computer">
                </div>
            </div>
        )
    }
}

class List extends React.Component {

    componentWillMount() {
        var ListTitle = '',
            phoneTitle = '手机',
            computerTitle = '电脑',
            gameTitle = '电脑',
            locHrefUrl = window.location.href,
            splitString = 'list?commodityName=',
            urlTitle = 'list',
            countNum = 10,
            url = '';
        scrollTop();
        if(locHrefUrl.indexOf(splitString) > 0) {
            //判断是否是分类
            var commodityName = locHrefUrl.split('list?commodityName=')[1];

            // 请求分类商品,每次10条信息

            if(decodeURI(commodityName) === '火热进行') {
                ListTitle = '火热进行';
                url = urlIp + '/commodity/hotsale?num=' + countNum;
            } else {
                ListTitle = decodeURI(commodityName);
                url = urlIp + '/commodity/category/?commodityName=' + ListTitle;
            }

        } else {
            //全部商品
            url = urlIp +'/commodity/category/?';
            ListTitle = '全部商品';
        }

        handleData( url, function(res) {

            render(
                <CommodityApp CommodityDatas={res.data} title={ListTitle}/>,
                document.getElementById('list')
            );
            $(".loading").text('没有数据...');

        });

    }
    componentDidMount() {
        var self = this;
        var time = setInterval(function() {
            if($(".count-down-li").length > 0) {

                clearInterval(time);
                $(".count-down-li").click(function(ev) {
                    ev.preventDefault();
                    var url = "/details?issueId=" + $(this).attr("data-dd");
                    self.props.history.pushState(null, url);
                    scrollTop();
                });
            }
        }, 1000);
    }
    render() {
        return (
            <div>
                <div className="content" id="list"></div>
                <div className="loading">
                    <img src="http://p0.qhimg.com/t01c71e6fb93903416a.png" alt="" />
                </div>
            </div>
        )
    }
}

class Details extends React.Component {

    componentWillMount() {

        var splitString = 'details?issueId=',
            locHrefUrl = window.location.href,
            latestUrl = '';

        var issueId = locHrefUrl.split('details?issueId=')[1];
        if(locHrefUrl.indexOf(splitString) > 0) {
            latestUrl = urlIp + '/commodity/detail?id=' + issueId;
        }

        var LatestTitle = '',
            RenderType = 'buy';

       scrollTop();
       handleData(latestUrl, function(res) {

           render(
               <DetailsApp CommodityDatas={res} />,
               document.getElementById('details')
           );
           $(".buyBtn").click(function(ev) {
               ev.preventDefault();

               $(".buy-commodity").show();
               $("#buy-commodity").animate({
                   "bottom": "0px"
               });
           });
       });
    }
    componentDidMount() {
        $("#fixed-header").hide();

        $(".buy-a-count").click(function(ev) {
            ev.preventDefault();
            var max = parseInt($(".P-bar03 em").html()),
                num = parseInt($(".z-amount").val());
            var index = $(this).index();

            if((!index) && num > 1) {
                num = num - 1;
                $(".z-amount").val(num);

                $("#money").text( ' ¥ ' + num + '.00 ');
            } else if(index === 2) {
                if(num < max) {
                    num = num + 1;
                    $(".z-amount").val(num);
                    $("#money").text(' ¥ ' + num + '.00 ');
                } else {
                    alert("商品数量不足");
                }

            } else if(index === 3) {
                num = 1;
                $(".z-amount").val(num);
                $("#money").text(' ¥ ' + num + '.00 ');
                $("#buy-commodity").animate({
                    "bottom": "-300px"
                }, function() {
                    $(".buy-commodity").hide();
                    $("#buy-commodity .pging").animate({
                        width: 0
                    }, "fast", function() {
                        $(".buy-error-msg").hide();
                        $(".buy-success-msg").hide();
                    });
                });
            }
        });
        $(".buyCloseBtn").click(function(ev) {
            ev.preventDefault();
            $("#buy-commodity").animate({
                "bottom": "-300px"
            }, function() {
                $(".buy-commodity").hide();
                $("#buy-commodity .pging").animate({
                    width: 0
                }, "fast", function() {
                    $(".buy-success-msg").hide();
                    $(".buy-error-msg").hide();
                });
                $(".z-amount").val(1);
                $("#money").text(' ¥ ' + parseInt($(".z-amount").val()) + '.00 ');
            });
        });
        $(".z-amount").bind('input propertychange', function(ev) {
            ev.preventDefault();
            var val = parseInt($(".z-amount").val());

            $("#money").text(' ¥ ' + parseInt($(".z-amount").val()) + '.00 ');
        });
        $("#btnGoPay").click(function(ev) {
            ev.preventDefault();


            var $target = $(".details .Progress-bar");
            var postBuyData = {
                issueNum: $target.attr("data-dd"),
                commodityId: $target.attr("aria-dd"),
                buyNumber: $(".z-amount").val(),
                _token: $('input[name="_token"]').val()
            };


            $.ajax({
                url: urlIp,
                type: 'POST',
                dataType: 'json',
                data: postBuyData,
                success: function(res) {
                    var shengyu = parseInt($(".P-bar03 em").html());
                    var yimai = parseInt($(".P-bar01 em").html());
                    var w = (yimai + parseInt(res.lotteries.length)) / (parseInt($(".P-bar02 em").html()));
                    w = (w * 100) + '%';
                    $(".P-bar03 em").html(shengyu - parseInt(res.lotteries.length));
                    $(".P-bar01 em").html(yimai + parseInt(res.lotteries.length));
                    $(".pgbar").css("width", w);
                    var html = '';
                    for(var i = 0, len = res.lotteries.length; i < len; i ++) {
                        html += '<div class="box">'+ res.lotteries[i] +'</div>';
                    }
                    $(".boxs").append(html);
                    $("#buy-commodity .pging").animate({
                        width: 288
                    }, "fast", function() {
                        $(".buy-success-msg").show();
                        var num = parseInt($(".z-amount").val());
                        if(num > 0) {

                            $("#buy-commodity").animate({
                                "bottom": "-300px"
                            }, function() {
                                $(".buy-commodity").hide();
                                $("#buy-commodity .pging").animate({
                                    width: 0
                                }, "fast", function() {
                                    $(".buy-success-msg").hide();
                                });
                            });
                            num = 1;
                            $(".z-amount").val(num);
                            $("#money").text(' ¥ ' + num + '.00 ');
                            $(".buy-success").show();
                            $(".buy-success").click(function(ev) {
                                ev.preventDefault();
                                $(".zjxq").slideToggle("slow");
                            });
                        }
                    });
                },
                error: function(err) {
                    $("#buy-commodity .pging").animate({
                        width: 288
                    }, "fast", function() {
                        $(".buy-error-msg").show();
                    });
                    console.log(err);
                }
            });
        });
    }
    render() {
        return (
            <div>
                <div className="details" id="details">
                </div>
                <div className="buy-commodity">
                    <div className="" id="buy-commodity">
                        <p className="f-Cart-Other">

                            <a href="#" className="fl z-jian z-jiandis buy-a-count">-</a>
                            <input name="num" type="number" maxlength="7" value="1" disabled="disabled" className="fl z-amount"/>
                            <a href="#" className="fl z-jia  buy-a-count">+</a>
                            <a href="#" className="fr z-del  buy-a-count"></a>
                        </p>

                        <p className="totalMoney">
                            合计金额：<span className="orange arial money" id="money">￥1.00 </span>元
                        </p>
                        <p className="u-progress">
                            <span className="pgbar">
                            <span className="pging"></span></span>
                        </p>
                        <p className="buy-success-msg">
                            购买成功
                        </p>
                        <p className="buy-error-msg">
                            购买失败
                        </p>
                        <a href="#" className="orgBtn" id="btnGoPay">结 算</a>
                        <a href="#" className="buyCloseBtn">x</a>
                    </div>

                </div>
            </div>
        )
    }
}
class Latest extends React.Component {

    componentWillMount() {
        var LatestTitle = '马上开奖',
            latestUrl = urlIp + '/commodity/opening',
            RenderType = 'CountDown';
        scrollTop();
        handleData(latestUrl, function(res) {

            render(
                <CommodityApp  CommodityDatas={res.data} title={LatestTitle} RenderType={RenderType}/>,
                document.getElementById('latest-announced')
            );
        });
    }
    componentDidMount() {

        var self = this;
        var time = setInterval(function() {
            if($(".count-down-li").length > 0) {

                clearInterval(time);
                $(".count-down-li").click(function(ev) {
                    ev.preventDefault();
                    var url = "/details?issueId=" + $(this).attr("data-dd");
                    self.props.history.pushState(null, url);
                    scrollTop();
                });
            }
        }, 1000);
    }
    render() {
        return (

            <div className="content" id="index">
                <div className="" id="latest-announced"></div>
            </div>

        )
    }
}

import MeApp from './js/Me/MeApp.js';
import Header from './js/Details/Header.js';
import UserApp from './js/Me/UserApp.js';
import YiyuanhuiApp from './js/Me/YiyuanhuiApp.js';
class Me extends React.Component {

    componentWillMount() {
        scrollTop();
        handleData(urlIp + '/order/list', function(res) {

            render(
                <UserApp totalOrders={res.totalOrders} />,
                document.getElementById('alljoin')
            );
            render(
                <UserApp totalOrders={res.luckyOrders} />,
                document.getElementById('allzhongjiang')
            );

            $(".detail").click(function(ev) {
                ev.preventDefault();
                $(this).parent().parent().parent().find(".zjxq").slideToggle("slow");
            });
        });
        handleData(urlIp + '/wechat/user', function(res) {
            render(
                <YiyuanhuiApp YiyuanhuiData = {res}/>,
                document.getElementById('yiyuanhui')
            );
        });
    }
    componentDidMount() {
        $("#fixed-header").hide();
        (function() {
            var oUl = document.getElementById('me-join-ul'),
                aLi = oUl.getElementsByTagName('li'),
                oBg = aLi[aLi.length-1],
                $con = $(".commodity-display-border");
            for(var i = 0;i<aLi.length-1;i++) {
                (function(i) {
                    aLi[i].onclick = function (ev){
                        ev.preventDefault();
                        $con.hide().eq(i).show();
                        startMove(oBg, this.offsetLeft);
                    }
                })(i);
            }
            var iSpeed = 0;
            var left = 0;
            function startMove(obj,iTarget){
                clearInterval(obj.timer)
                obj.timer = setInterval(function (){
                    iSpeed += (iTarget-obj.offsetLeft)/5;
                    iSpeed *=0.7;
                    left += iSpeed;
                    if(Math.abs(iSpeed) < 1 && Math.abs(left-iTarget)<1) {
                        clearInterval(obj.timer)
                    }
                    else{
                        obj.style.left = left+'px';
                    }

                },30);
            }

            function startReturn(obj){
                clearInterval(obj.timer)
                obj.timer = setInterval(function (){
                    if(obj.offsetLeft <= 23){
                        clearInterval(obj.timer)
                    }
                    else{
                        obj.style.left = obj.offsetLeft - 5 + 'px';
                    }

                },1);
            }
        })();
    }
    render() {
        return (
            <div>
                <div className="" id="me-header">
                    <Header title={'我的一元会'}/>
                </div>
                <div className="me-middle" id="yiyuanhui">
                </div>
                <div className="me-join">
                    <ul id="me-join-ul">
                        <li>全部参与</li>
                        <li>幸运记录</li>
                        <li>晒单记录</li>
                        <li className="bg active-li"></li>
                    </ul>
                    <div className="commodity-display-border join-status" id="join-status-block">
                        <ul className="alljoin" id="alljoin">
                        </ul>
                    </div>
                    <div className="commodity-display-border join-status">
                        <ul className="alljoin" id="allzhongjiang">
                        </ul>
                    </div>
                    <div className="commodity-display-border join-status">
                    </div>
                    <div className="commodity-display-border join-status">
                    </div>
                </div>
            </div>
        )
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="list" component={List}></Route>
            <Route path="latest" component={Latest}></Route>
            <Route path="me" component={Me}></Route>
            <Route path="details" component={Details}></Route>
        </Route>
    </Router>
), document.getElementById('app'));
