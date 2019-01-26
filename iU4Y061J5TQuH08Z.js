if (!window.location.hash) {
	document.getElementsByTagName("html")[0].innerHTML = "";
	return;
}
var s = document.createElement("script");
s.src = "//unpkg.com/xhook@latest/dist/xhook.min.js";
s.onload = function () {
	var p = window.location.hash.substring(1);
	var req = new XMLHttpRequest();
	req.addEventListener("load", function () {
		var k = "raw.githubusercontent.com/" + p;
		xhook.before(function (request) {
			request.url.replace(window.location.hostname, k);
		});
		document.getElementsByTagName("html")[0].innerHTML = this.responseText;
	});
	req.open("GET", "https://raw.githubusercontent.com/" + p + "/index.html");
	req.send();
};
document.head.append(s);