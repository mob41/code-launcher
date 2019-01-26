var __ss;
var __ht;
if (window.location.hash) {
	var s = document.createElement("script");
	s.src = "https://unpkg.com/ajax-hook/dist/ajaxhook.min.js";
	s.onload = function () {
		hookAjax({
			onreadystatechange: function (xhr) {
				console.log("onreadystatechange called: %O", xhr)
			},
			onload: function (xhr) {
				console.log("onload called: %O", xhr)
			},
			open: function (arg, xhr) {
				console.log("open called: method:%s,url:%s,async:%s", arg[0], arg[1], arg[2])
				var x = window.location.hash.substring(1);
				var k = "raw.githubusercontent.com/" + x;
				arg[1].replace(window.location.hostname, k);
			}
		});

		var p = window.location.hash.substring(1);
		var req = new XMLHttpRequest();
		req.addEventListener("load", function () {
			var split = this.responseText.split("##########");
			var json = JSON.parse(split[0]);
			__ht = split[1];
			__ss = json.scripts;
			__ns();
		});
		req.open("GET", "https://raw.githubusercontent.com/" + p + "/_codelauncher");
		req.send();
	};
	document.head.append(s);
} else {
	document.getElementsByTagName("html")[0].innerHTML = "";
}

function __ns() {
	var st = __ss.shift();
	if (st) {
		var s = document.createElement("script");
		s.src = st;
		s.onload = function () {
			__ns();
		};
		document.head.append(s);
	} else {
		document.getElementsByTagName("html")[0].innerHTML = __ht;
	}
}