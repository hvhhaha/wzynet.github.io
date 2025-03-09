// 背景图片 Cookies 
function setBgImg(bg_img) {
    if (bg_img) {
        Cookies.set('bg_img', bg_img, {
            expires: 36500
        });
        return true;
    }
    return false;
}

// 获取背景图片 Cookies
function getBgImg() {
    var bg_img_local = Cookies.get('bg_img');
    if (bg_img_local && bg_img_local !== "{}") {
        return JSON.parse(bg_img_local);
    } else {
        setBgImg(bg_img_preinstall);
        return bg_img_preinstall;
    }
}

var bg_img_preinstall = {
    "type": "1", // 1:默认背景 2:每日一图 3:随机风景 4:随机动漫
    "path": "", //自定义图片
};


// 更改背景图片
function setBgImgInit() {
    var bg_img = getBgImg();
    $("input[name='wallpaper-type'][value=" + bg_img["type"] + "]").click();

    switch (bg_img["type"]) {
        case "1":
            var pictures = new Array();
            pictures[0] = './img/background1.webp';
            pictures[1] = './img/background2.webp';
            pictures[2] = './img/background3.webp';
            pictures[3] = './img/background4.webp';
            pictures[4] = './img/background5.webp';
            pictures[5] = './img/background6.webp';
            pictures[6] = './img/background7.webp';
            pictures[7] = './img/background8.webp';
            pictures[8] = './img/background9.webp';
            pictures[9] = './img/background10.webp';
            var rd = Math.floor(Math.random() * 10);
            $('#bg').attr('src', pictures[rd]) //随机默认壁纸
            break;
        case "2":
            $('#bg').attr('src', 'http://api.mmp.cc/api/bing?size=1920x1080&type=jpg'); //必应每日
            break;
        case "3":
            $('#bg').attr('src', 'https://moe.jitsu.top/img/?sort=pc&size=1080p');//动漫综合
            break;
        case "4":
             // 使用 AJAX 请求获取 JSON 数据
             $.ajax({
                url: 'https://api.lolicon.app/setu/v2',
                method: 'GET',
                data: { r18: 1 },
                dataType: 'json',
                success: function(response) {
                    // 检查返回的数据是否有效
                    if (response && response.data && response.data.length > 0 && response.data[0].urls && response.data[0].urls.original) {
                        $('#bg').attr('src', response.data[0].urls.original); // 设置背景图片
                    } else {
                        console.error('Invalid JSON data:', response);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error('Failed to fetch image URL:', textStatus, errorThrown);
                }
            });
            break;
    }
}

$(document).ready(function () {
    // 壁纸数据加载
    setBgImgInit();
    // 设置背景图片
    $("#wallpaper").on("click", ".set-wallpaper", function () {
        var type = $(this).val();
        var bg_img = getBgImg();
        bg_img["type"] = type;

        if (type === "1") {
            setBgImg(bg_img);
            var pictures = new Array();
            pictures[0] = './img/background1.webp';
            pictures[1] = './img/background2.webp';
            pictures[2] = './img/background3.webp';
            pictures[3] = './img/background4.webp';
            pictures[4] = './img/background5.webp';
            pictures[5] = './img/background6.webp';
            pictures[6] = './img/background7.webp';
            pictures[7] = './img/background8.webp';
            pictures[8] = './img/background9.webp';
            pictures[9] = './img/background10.webp';
            var rd = Math.floor(Math.random() * 10);
            $('#bg').attr('src', pictures[rd]) //随机默认壁纸
            iziToast.show({
                message: '壁纸设置成功',
            });
        }

        if (type === "2") {
            setBgImg(bg_img);
            $('#bg').attr('src', 'http://api.mmp.cc/api/bing?size=1920x1080&type=jpg'); //必应每日
            iziToast.show({
                message: '壁纸设置成功',
            });
        }

        if (type === "3") {
            setBgImg(bg_img);
            $('#bg').attr('src', 'https://moe.jitsu.top/img/?sort=pc&size=1080p'); //动漫综合
            iziToast.show({
                message: '壁纸设置成功',
            });
        }

        if (type === "4") {
            setBgImg(bg_img);
             // 使用 AJAX 请求获取 JSON 数据
             $.ajax({
                url: 'https://api.lolicon.app/setu/v2',
                method: 'GET',
                data: { r18: 1},
                dataType: 'json',
                success: function(response) {
                    // 检查返回的数据是否有效
                    if (response && response.data && response.data.length > 0 && response.data[0].urls && response.data[0].urls.original) {
                        $('#bg').attr('src', response.data[0].urls.original); // 设置背景图片
                    } else {
                        console.error('Invalid JSON data:', response);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error('Failed to fetch image URL:', textStatus, errorThrown);
                }
            });
            iziToast.show({
                message: '壁纸设置成功',
            });
        }
    });
});