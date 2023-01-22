var ua = window.navigator.userAgent.toLowerCase();
let str = document.getElementById("str");

if (ua.indexOf("iphone") !== -1) {
    str.style.fontSize = '40px';
} else if (ua.indexOf("mac os x") !== -1) {
    str.style.fontSize = '100px';
} else if (ua.indexOf("ipad") !== -1) {
    str.style.fontSize = '40px';
}
