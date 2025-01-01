const ap = new APlayer({
    container: document.getElementById('aplayer'),
    order: 'random',
    preload: 'auto',
    listMaxHeight: '336px',
    volume: '0.5',
    mutex: true,
    lrcType: 3,
    /* 下方更改为你自己的歌单就行 */
    audio: [{
            name: "遇见",
            artist: "孙燕姿",
            url: "https://tools.liumingye.cn/music/api/link?id=m3f63OtUGNZoMDio1Kq9X7jE4kM2ddqh9eCynjQA7dWSL0qLZFeLha7Mu2hTNcZ8&quality=128&_t=1735702060711&token=20241016.ee5ab0004f5234351e6d3e2bc2e65816",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc",
            theme: "#171513"
        },
        {
            name: "她做了别人的新娘",
            artist: "陈恳",
            url: "https://tools.liumingye.cn/music/api/link?id=m3f63OtUGNZoMDio1KqtWvjBrksvJJfgqeyv1jgw7dWSL0aLZFeLha7Et2hXMcJM&quality=128&_t=1735701932503&token=20241016.14ddca0e7abc3a1ac88c43b9412c66e2",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000001BGzMs369FzU_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%96%AD%E4%BA%86%E7%9A%84%E5%BC%A6.lrc",
            theme: "#0057a7"
        },
        {
            name: "苹果香",
            artist: "狼戈",
            url: "https://tools.liumingye.cn/music/api/link?id=b3f634HzOLrfMF9SfoFs-YATIFEQEkM3WyWIoKKAGjaJ_T2_7PB0&quality=128&_t=1735701638576&token=20241016.d7cd2e763e6cb701ed3867a6eb114717",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%8F%91%E5%A6%82%E9%9B%AA.lrc",
            theme: "#171513"
        },
        {
            name: "绿光",
            artist: "孙燕姿",
            url: "https://tools.liumingye.cn/music/api/link?id=m3f63OtUGNZoMDio1Kq9U7j9oxsyccfwrK36h1A07dWSL0qjZFeLha7ov3x7IcZw&quality=128&_t=1735702245945&token=20241016.9fec5533c13ae7c03c56589c2e14db0e",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%A8%BB%E9%A6%99.lrc",
            theme: "#e3ae55"
        },
        {
            name: "雨天",
            artist: "孙燕姿",
            url: "https://tools.liumingye.cn/music/api/link?id=m3f63OtUGNZoMDio1Kv4EtDRilM2ecf18eyn7iFc7dWSL0qLZFeLha7Mu2hnAdp0&quality=128&_t=1735702296170&token=20241016.0300abd431519e52d53a4ffd629c4ada",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E4%B8%83%E9%87%8C%E9%A6%99.lrc",
            theme: "#395732"
        },
        {
            name: "达尔文",
            artist: "林俊杰",
            url: "https://tools.liumingye.cn/music/api/link?id=m3f63OtUGNZoMDio1KvlfvDBiw5CZJK4sfSn6jVY7dWSL0qLZFeLha7op2hjNdZg&quality=128&_t=1735701321666&token=20241016.a6f22385c3938c366418340fa45fb955",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG_3.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%99%B4%E5%A4%A9.lrc",
            theme: "#08362e"
        },
        {
            name: "Litting go",
            artist: "蔡键雅",
            url: "https://tools.liumingye.cn/music/api/link?id=m3f63OtUGNZoMDio1Kq1Q7DBjlprNIPN8K377iQE7dWSL0aLZFeLha7Eq0BzBdZI&quality=128&_t=1735702383561&token=20241016.5d11122cc25343fc40de67a4f6d9f14d",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG_3.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E4%BB%A5%E7%88%B6%E4%B9%8B%E5%90%8D.lrc",
            theme: "#08362e"
        },
        {
            name: "起风了",
            artist: "买辣椒也用券",
            url: "https://tools.liumingye.cn/music/api/link?id=m3f63OtUGNZoMDio1KqoCvTZrw5yfdvwteHny3gU7dWSL0qjZFeLha7Et2B3Ieps&quality=128&_t=1735702457990&token=20241016.41dfb2033f8100faad69d1dc920b36e0",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%9C%AC%E8%8D%89%E7%BA%B2%E7%9B%AE.lrc",
            theme: "#171513"
        },
        {
            name: "一路向北",
            artist: "周杰伦",
            url: "https://drive.imsyy.top/api?path=%2F%E9%9F%B3%E4%B9%90%2F%E6%96%87%E4%BB%B6%E5%BC%95%E7%94%A8%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E4%B8%80%E8%B7%AF%E5%90%91%E5%8C%97.mp3&raw=true",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000002MAeob3zLXwZ_2.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E4%B8%80%E8%B7%AF%E5%90%91%E5%8C%97.lrc",
            theme: "#383a37"
        },
        {
            name: "我们的歌",
            artist: "王力宏",
            url: "https://tools.liumingye.cn/music/api/link?id=m3f63OtUGNZoMDio1Kv9TtWRqnpGYf6woeSmgjlc7dWSL0aLZFeLha7Is3BXJepw&quality=128&_t=1735702537436&token=20241016.317a9dcb9d0a3cb01b3d48a75fdf5475",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000004MGitN0zEHpb_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%8D%8A%E5%B2%9B%E9%93%81%E7%9B%92.lrc",
            theme: "#f0a059"
        },
        {
            name: "简单朋友",
            artist: "陶吉吉",
            url: "https://tools.liumingye.cn/music/api/link?id=m3f63OtUGNZoMDio1KvlUtTNikMyeJ6sofib12QU7dWSL0qjZFeLha7Yo2B3Icpw&quality=128&_t=1735702661931&token=20241016.ea1a2bfc9b909cf7a601e42f6ef217f4",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AE%80%E5%8D%95%E7%88%B1.lrc",
            theme: "#c21c0f"
        },
        {
            name: "爱，很简单",
            artist: "陶吉吉",
            url: "https://tools.liumingye.cn/music/api/link?id=m3f63OtUGNZoMDio1KvZQvjI5kpicIvIseSn0jgI7dWSL0qjZFeLha7Yo2B3IdZo&quality=128&_t=1735702720481&token=20241016.b760721ee23e02ae3d4638ab09a0eab9",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E9%9D%92%E8%8A%B1%E7%93%B7.lrc",
            theme: "#000000"
        },
        {
            name: "单车",
            artist: "陈奕迅",
            url: "https://tools.liumingye.cn/music/api/link?id=m3f63OtUGNZoMDio1Kv9Svj9vws-bcvkteyb23VM7dWSL06PZFeLha7Us0RXAcJM&quality=128&_t=1735702831810&token=20241016.329fdadabf026f5f92cf17d5aaaeb32b",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000004S8YQr3UmEbG_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E9%99%88%E5%A5%95%E8%BF%85-%E5%8D%95%E8%BD%A6.lrc",
            theme: "#32201f"
        },
        {
            name: "孤勇者",
            artist: "陈奕迅",
            url: "https://tools.liumingye.cn/music/api/link?id=m3f63OtUGNZoMDio1KvoE6DM-npibJKl4fyf33wc7dWSL0qLZFeLha7Yv2R_Be5o&quality=128&_t=1735702858121&token=20241016.7e6d20da5a425c675fbe07f4d012ed42",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000001uaPM93kxk1R_3.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E9%99%88%E5%A5%95%E8%BF%85-%E5%AD%A4%E5%8B%87%E8%80%85.lrc",
            theme: "#131915"
        },
        {
            name: "浮夸",
            artist: "陈奕迅",
            url: "https://tools.liumingye.cn/music/api/link?id=m3f63OtUGNZoMDio1KvxRvWU4wc2aI64uLyrxjwY7dWSL0q_ZFeLha7Yt2hjPepM&quality=128&_t=1735702896877&token=20241016.411042b17d6585b9b2d8d8e93b7b3cb2",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000003J6fvc0bVJon_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E9%99%88%E5%A5%95%E8%BF%85-%E6%B5%AE%E5%A4%B8.lrc",
            theme: "#040402"
        },
        {
            name: "十年",
            artist: "陈奕迅",
            url: "https://tools.liumingye.cn/music/api/link?id=m3f63OtUGNZoMDio1KqwEuDM-l5_NdvMtKiz71AM7dWSL06PZFeLha7Us0RXMe54&quality=128&_t=1735702797593&token=20241016.95d4bee7aa8da0faa7f7f6a6f6784a4f",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000003J6fvc0bVJon_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E9%99%88%E5%A5%95%E8%BF%85-%E5%8D%81%E5%B9%B4.lrc",
            theme: "#040402"
        },
        {
            name: "这，就是爱",
            artist: "张杰",
            url: "https://music.163.com/song/media/outer/url?id=191060.mp3",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000001sjRhH0wqa4Q_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E9%99%88%E5%A5%95%E8%BF%85-%E4%B8%80%E4%B8%9D%E4%B8%8D%E6%8C%82.lrc",
            theme: "#0d0d0d"
        },
        {
            name: "明天过后",
            artist: "张杰",
            url: "https://music.163.com/song/media/outer/url?id=191248.mp3",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000003P3ByD1n8nBK_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E6%9D%8E%E8%8D%A3%E6%B5%A9-%E9%BA%BB%E9%9B%80.lrc",
            theme: "#849fbd"
        },
        {
            name: "老街",
            artist: "李荣浩",
            url: "https://nf-sycdn.kuwo.cn/f56086c1349c278b21d00f7f92aa0afe/6774bafe/resource/n2/97/25/3281475661.mp3?bitrate$128&from=vip",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000001LP8hk0a6pOp_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E6%9D%8E%E8%8D%A3%E6%B5%A9-%E8%80%81%E8%A1%97.lrc",
            theme: "#e0d7bb"
        },
        {
            name: "最美的太阳",
            artist: "张杰",
            url: "https://music.163.com/song/media/outer/url?id=191278.mp3",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000000RLvtE1eDyOs_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E6%9D%8E%E8%8D%A3%E6%B5%A9-%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA.lrc",
            theme: "#d2ddd5"
        },
        {
            name: "勿忘心安",
            artist: "张杰",
            url: "https://music.163.com/song/media/outer/url?id=191199.mp3",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000001fi1zG0EjU2u_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E6%9D%8E%E8%8D%A3%E6%B5%A9-%E7%88%B8%E7%88%B8%E5%A6%88%E5%A6%88.lrc",
            theme: "#aec3ce"
        },
        {
            name: "夜曲",
            artist: "周杰伦",
            url: "https://lv-sycdn.kuwo.cn/fc9b4731d9a7144f1e1f25dd33a9308b/6774a4fc/resource/30106/trackmedia/M500001zMQr71F1Qo8.mp3?bitrate$128&from=vip",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000001fbipy4azgKM_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E4%BA%94%E6%9C%88%E5%A4%A9-%E5%B9%B2%E6%9D%AF.lrc",
            theme: "#0f1e32"
        },
        {
            name: "明明就",
            artist: "周杰伦",
            url: "https://er-sycdn.kuwo.cn/fde441a74dd7295fb395480062765cf3/6774bca4/resource/30106/trackmedia/M500000oW8J53xPhZA.mp3?bitrate$128&from=vip",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000006MmDz4Hl2Ud_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E4%BA%94%E6%9C%88%E5%A4%A9-%E5%80%94%E5%BC%BA.lrc",
            theme: "#b3dae1"
        },
        {
            name: "知足",
            artist: "五月天",
            url: "https://drive.imsyy.top/api/raw/?path=/音乐/文件引用/五月天-知足.mp3",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M0000020I7sO0ayXhN_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E4%BA%94%E6%9C%88%E5%A4%A9-%E7%9F%A5%E8%B6%B3.lrc",
            theme: "#0a0708"
        },
        {
            name: "如烟",
            artist: "五月天",
            url: "https://drive.imsyy.top/api/raw/?path=/音乐/文件引用/五月天-如烟.mp3",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M0000020I7sO0ayXhN_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E4%BA%94%E6%9C%88%E5%A4%A9-%E5%A6%82%E7%83%9F.lrc",
            theme: "#0a0708"
        },
        {
            name: "反方向的钟",
            artist: "周杰伦",
            url: "https://sx-sycdn.kuwo.cn/d3ca1a5033f2c75b26aa371e8fdbf5fe/6774b304/resource/n3/94/6/3068695554.mp3?bitrate$128&from=vip",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000002CJON012PxwU_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E8%AE%B8%E5%B5%A9-%E5%8F%B9%E6%9C%8D.lrc",
            theme: "#def3fc"
        },
        {
            name: "简单爱",
            artist: "周杰伦",
            url: "https://sy-sycdn.kuwo.cn/c920683f7c4b53916a5299c3445446cc/6774a95f/resource/n1/88/79/2579353851.mp3?bitrate$128&from=vip",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000004RbL3b0BDIe2_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E8%AE%B8%E5%B5%A9-%E5%B9%BB%E5%90%AC.lrc",
            theme: "#bf1c21"
        },
        {
            name: "素颜",
            artist: "许嵩",
            url: "https://lv-sycdn.kuwo.cn/1c356cd9aacf2cf8eb07d82f76f2e415/6774b48c/resource/30106/trackmedia/M500001GEzDh16cMnG.mp3?bitrate$128&from=vip",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000002CJON012PxwU_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E8%AE%B8%E5%B5%A9-%E5%BA%90%E5%B7%9E%E6%9C%88.lrc",
            theme: "#def3fc"
        },
        {
            name: "暗号",
            artist: "周杰伦",
            url: "https://sy-sycdn.kuwo.cn/d9329fd9dde90a4f94dd1ad52714b680/6774a697/resource/n1/65/10/566385765.mp3?bitrate$128&from=vip",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000001jmC6x1RMfh0_2.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E8%AE%B8%E5%B5%A9-%E6%96%AD%E6%A1%A5%E6%AE%8B%E9%9B%AA.lrc",
            theme: "#1a1b14"
        },
        {
            name: "有何不可",
            artist: "许嵩 / 刘美麟",
            url: "https://ci-sycdn.kuwo.cn/01a409581a0e15492923446a85bc0f21/6774aa58/resource/n3/64/88/986676456.mp3?bitrate$128&from=vip",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000002KSDg90IaScI_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E8%AE%B8%E5%B5%A9%20-%20%E6%9C%89%E4%BD%95%E4%B8%8D%E5%8F%AF%20-%20%E7%8B%AC%E7%99%BD%E7%89%88.lrc",
            theme: "#edbe76"
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