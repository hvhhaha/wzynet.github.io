const ap = new APlayer({
    container: document.getElementById('aplayer'),
    order: 'random',
    preload: 'auto',
    listMaxHeight: '336px',
    volume: '0.5',
    mutex: true,
    autoplay: true,
    lrcType: 3,
    /* 下方更改为你自己的歌单就行 */
    audio: [
        {
           name: "遇见",
            artist: "孙燕姿",
            url: "../song/yujian.mp3",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc",
            theme: "#171513"
        },
        {
            name: "第一天",
             artist: "孙燕姿",
             url: "https://webfs.kugou.com/202501011959/95a181ea659bfc9518346cc2fe5fcac2/v3/fd7130d7b23f75d9e4df159707d0abb8/yp/full/ap1014_us2167591282_mii0w1iw8z2ai2iphcu80ooo2ki81120_pi406_mx32046520_s3134396211.mp3",
             cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
             lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc",
             theme: "#171513"
         },
         {
            name: "雨天",
             artist: "孙燕姿",
             url: "https://webfs.kugou.com/202501012003/3c0ecb5821e2219fae7b034c0023bcf6/v3/9077648aa3aba06b76fd7569fb715eaf/yp/full/ap1014_us2167591282_mii0w1iw8z2ai2iphcu80ooo2ki81120_pi406_mx88953843_s885663571.mp3",
             cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
             lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc",
             theme: "#171513"
         },
         {
            name: "卡农",
             artist: "George Winston",
             url: "https://webfs.kugou.com/202501012023/cc8cf79888d0de708828150fc90890ad/v3/0148f09571391b067a691e1158b1708e/yp/full/ap1014_us0_mid87bba787d5c8e730a0cb6a8f4d2e2a9_pi406_mx31341257_s3161089365.mp3",
             cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
             lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc",
             theme: "#171513"
         },
         {
            name: "菊次郎的夏天",
             artist: "K.Williams",
             url: "https://webfs.kugou.com/202501012023/cc8cf79888d0de708828150fc90890ad/v3/0148f09571391b067a691e1158b1708e/yp/full/ap1014_us0_mid87bba787d5c8e730a0cb6a8f4d2e2a9_pi406_mx31341257_s3161089365.mp3",
             cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
             lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc",
             theme: "#171513"
         },
         {
            name: "青空",
             artist: "Candy_Wind",
             url: "https://webfs.kugou.com/202501012027/8a022edf020122d2282e11201ab75d53/v3/275dd07f0f194e9a0b8bec90de56c955/yp/full/ap1014_us2167591282_mii0w1iw8z2ai2iphcu80ooo2ki81120_pi406_mx148284832_s890880355.mp3",
             cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
             lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc",
             theme: "#171513"
         },
         {
            name: "梦中的婚礼",
             artist: "jaycd",
             url: "https://webfs.kugou.com/202501012028/e824907ddaae5718018d9cee0de1abb7/v3/154c38ff5435ca1bc4317ced16ab6162/yp/full/ap1014_us0_mii0w1iw8z2ai2iphcu80ooo2ki81120_pi406_mx282467218_s2350220082.mp3",
             cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
             lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc",
             theme: "#171513"
         },
         {
            name: "我们的歌",
             artist: "王力宏",
             url: "https://webfs.kugou.com/202501012029/4fdda1f3f0e8d3801e1a10624de3c440/v3/4e294957a0d9b72a78b61f3c2a63b6cc/yp/full/ap1014_us2167591282_mii0w1iw8z2ai2iphcu80ooo2ki81120_pi406_mx40289878_s294040450.mp3",
             cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
             lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc",
             theme: "#171513"
         },
         {
            name: "麦恩莉",
             artist: "方大同",
             url: "https://webfs.kugou.com/202501012031/a0927683aedb1c7d195fdb78962acd02/v3/3a08c7b067ec2e9b552ab8664490fceb/yp/full/ap1014_us2167591282_mii0w1iw8z2ai2iphcu80ooo2ki81120_pi406_mx32145649_s2789456166.mp3",
             cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
             lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc",
             theme: "#171513"
         },
         {
            name: "特别的人",
             artist: "方大同",
             url: "https://webfs.kugou.com/202501012032/0dd06b5572b1265864e5e956218def5a/v3/0f7a79adaaeeb6ea1da3e19dd637fd73/yp/full/ap1014_us2167591282_mii0w1iw8z2ai2iphcu80ooo2ki81120_pi406_mx32085003_s3303219254.mp3",
             cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
             lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc",
             theme: "#171513"
         },
        {
            name: "最美的太阳",
            artist: "张杰",
            url: "https://music.163.com/song/media/outer/url?id=191278.mp3",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000000RLvtE1eDyOs_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E6%9D%8E%E8%8D%A3%E6%B5%A9-%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA.lrc",
            theme: "#d2ddd5"
        }
    ]
});
/* 底栏歌词 */
setInterval(function () {
    $("#lrc").html("<span class='lrc-show'><i class='iconfont icon-music'></i> " + $(".aplayer-lrc-current").text() + " <i class='iconfont icon-music'></i></span>");
}, 500);

/* 音乐通知及控制 */
ap.on('play', function () {
    music = $(".aplayer-title").text() + $(".aplayer-author").text();
    iziToast.info({
        timeout: 8000,
        iconUrl: './img/icon/music.png',
        displayMode: 'replace',
        message: music
    });
    $("#play").html("<i class='iconfont icon-pause'>");
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
    if ($(document).width() >= 990) {
        $('.power').css("cssText", "display:none");
        $('#lrc').css("cssText", "display:block !important");
    }
});

ap.on('pause', function () {
    $("#play").html("<i class='iconfont icon-play'>");
    if ($(document).width() >= 990) {
        $('#lrc').css("cssText", "display:none !important");
        $('.power').css("cssText", "display:block");
    }
});

//音量调节
function changevolume() {
    var x = $("#volume").val();
    ap.volume(x, true);
    if (x == 0) {
        $("#volume-ico").html("<i class='iconfont icon-volume-x'></i>");
    } else if (x > 0 && x <= 0.3) {
        $("#volume-ico").html("<i class='iconfont icon-volume'></i>");
    } else if (x > 0.3 && x <= 0.6) {
        $("#volume-ico").html("<i class='iconfont icon-volume-1'></i>");
    } else {
        $("#volume-ico").html("<i class='iconfont icon-volume-2'></i>");
    }
}

$("#music").hover(function () {
    $('.music-text').css("display", "none");
    $('.music-volume').css("display", "flex");
}, function () {
    $('.music-text').css("display", "block");
    $('.music-volume').css("display", "none");
})

/* 一言与音乐切换 */
$('#open-music').on('click', function () {
    $('#hitokoto').css("display", "none");
    $('#music').css("display", "flex");
});

$("#hitokoto").hover(function () {
    $('#open-music').css("display", "flex");
}, function () {
    $('#open-music').css("display", "none");
})

$('#music-close').on('click', function () {
    $('#music').css("display", "none");
    $('#hitokoto').css("display", "flex");
});

/* 上下曲 */
$('#play').on('click', function () {
    ap.toggle();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#last').on('click', function () {
    ap.skipBack();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#next').on('click', function () {
    ap.skipForward();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

/* 打开音乐列表 */
$('#music-open').on('click', function () {
    if ($(document).width() >= 990) {
        $('#box').css("display", "block");
        $('#row').css("display", "none");
        $('#more').css("cssText", "display:none !important");
    }
});
