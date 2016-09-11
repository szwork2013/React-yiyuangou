$(function(){
    $(".closeBtn").hide();
    $(".btn2").click(function() {
        $(".closeBtn").show();
        $(".cnxh").slideToggle("fast");
    });
    $(".closeBtn").click(function() {
        $(".cnxh").slideToggle("fast");
        $(".closeBtn").hide();
    });
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop() > 30){
                $(".g-btn").fadeIn('fast');
            }
            else{
                $(".g-btn").fadeOut('fast');
            }
        });

        //当点击跳转链接后，回到页面顶部位置

        $("#btnTop").click(function(){
            $('body,html').animate({ scrollTop: 0}, "fast");
            return false;
        });
    });
});
(function() {
    var navImg = [
            'http://p6.qhimg.com/t016169b31e23e64079.png',
            'http://p9.qhimg.com/t01ec80477aa26a6702.png',
            'http://p4.qhimg.com/t019d4aef0ca8969a43.png',
            'http://p5.qhimg.com/t01642cd8c179cce837.png'
        ];
        var navImgItem = [
            'http://p7.qhimg.com/t01d1af9e8ab12da047.png',
            'http://p1.qhimg.com/t016e28b7a4accc9cb1.png',
            'http://p7.qhimg.com/t01787a5b46fae95cca.png',
            'http://p0.qhimg.com/t018c4279a39568d0a8.png'
        ];

    var $fixedImg = $(".fixed-footer img");
    $(".fixed-footer li").click(function(){
        var index = $(this).index();
        if( index !== 3) {
            $("#fixed-header").show();
        } else {
            $("#fixed-header").hide();
        }

        $fixedImg.each(function(index){
            $fixedImg.eq(index).attr("src", navImg[index]);
        } );
        $fixedImg.eq(index).attr("src", navImgItem[index]);
    } );
})();

function handleData(url, callback) {
	$.ajax({
        url: url,
        dataType: "jsonp",
        callback: "__callback",
        success: function(res) {
        	if(callback){

        		callback(res);
        	}
        }
    });
}
