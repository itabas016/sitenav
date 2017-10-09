/* Get image from bing wallpaper */

function BingWallpaper(idx=0){
    var req = new XMLHttpRequest();
    var url = "https://itabas.com/proxy/HPImageArchive.aspx?format=js&idx=" + idx + "&n=1&mkt=zh-CN";
    req.open('POST', url, true);
    req.setRequestHeader('Access-Control-Allow-Origin', '*');
    req.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    req.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var resp = JSON.parse(this.responseText);
        var suffix = resp.images[0].url;
        var title = resp.images[0].copyright;
        document.getElementsByTagName("header")[0].style.backgroundImage = 'url("' + 'https://cn.bing.com' + suffix + '")';
        document.getElementsByClassName("info")[0].title = title;
    }};
    req.send('');
};

window.load = BingWallpaper();

function RandomHeader() {
    $("#random").click(function(){
        //random 1-31
        var r = Math.floor((Math.random() * 31) + 1);
        window.load = BingWallpaper(r);
    });
};

