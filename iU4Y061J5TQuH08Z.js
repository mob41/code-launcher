if (window.location.hash) {
	var s = document.createElement("script");
	s.src = "//unpkg.com/xhook@latest/dist/xhook.min.js";
	s.onload = function () {
		xhook.before(function (request) {
			var x = window.location.hash.substring(1);
			var k = "raw.githubusercontent.com/" + x;
			console.log(request.url);
			console.log(window.location.hostname);
			request.url.replace(window.location.hostname, k);
		});

		var p = window.location.hash.substring(1);
		var req = new XMLHttpRequest();
		req.addEventListener("load", function () {
			document.getElementsByTagName("html")[0].innerHTML = this.responseText;
		});
		req.open("GET", "https://raw.githubusercontent.com/" + p + "/index.html");
		req.send();
	};
	document.head.append(s);
} else {
	document.getElementsByTagName("html")[0].innerHTML = "";
}