var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: '.swiper-pagination',
    mousewheelControl: true,
    onInit: function(swiper) {
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
    },
    onSlideChangeEnd: function(swiper) {
        swiperAnimate(swiper);
    },
    onTransitionEnd: function(swiper) {
        swiperAnimate(swiper);
    },
    watchSlidesProgress: true,
    onProgress: function(swiper) {
        for (var i = 0; i < swiper.slides.length; i++) {
            var slide = swiper.slides[i];
            var progress = slide.progress;
            var translate = progress * swiper.height / 4;
            scale = 1 - Math.min(Math.abs(progress * 0.5), 1);
            var opacity = 1 - Math.min(Math.abs(progress / 2), 0.5);
            slide.style.opacity = opacity;
            es = slide.style;
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + translate + 'px,-' + translate + 'px) scaleY(' + scale + ')';
        }
    },
    onSetTransition: function(swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++) {
            es = swiper.slides[i].style;
            es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
        }
    },
});
//百度地图
var map = new BMap.Map("allmap");
var point = new BMap.Point(120.181756, 30.29542);
var marker = new BMap.Marker(point);
map.addOverlay(marker);
map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
map.centerAndZoom(point, 19);

function LoadInfoWindow(marker, infoWindow) {
    document.getElementById('imgDemo').onload = function() {
        infoWindow.redraw();
    }
};

//音乐开始/结束
$("#audioBtn").click(function() {
    var Audio = $("#play")[0];
    if ($(this).hasClass('rotate')) {
        Audio.pause();
        $(this).removeClass('rotate');
    } else {
        Audio.play();
        $(this).addClass('rotate');
    }
});
var loading = document.querySelector(".loading");
var loadingProcess = loading.getElementsByTagName("p")[0];
var picArr = [
    "images/arrow.png", "images/bg.png", "images/con-bg.png", "images/content-border.png", "images/deng-img.png", "images/dynamic.gif", "images/img5.png", "images/lai-img.png", "images/li-bg.png", "images/man1.png", "images/man2.png", "images/man3.png", "images/man1.png", "images/man21.png", "images/ni-img.png", "images/normalMusic.svg", "images/show1.jpg", "images/show2.jpg", "images/zhi-img.png"
];
var img = new Image();
var sum = picArr.length;
//console.log( picArr[40] ); 
var now = 0;
loadImg();

function loadImg() {
    img.src = picArr[now];

    function go() {
        now++;
        //console.log(now);
        loadingProcess.innerHTML = parseInt(now / sum * 100) + "%";
        if (now < picArr.length) {
            loadImg()
        } else {
            //console.log("全部加载完成");
            loading.style.display = "none";
        }
    }
    img.onerror = go;
    img.onload = go;
}