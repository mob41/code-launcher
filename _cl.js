var __ss;
var __ht;
var __xm;
if (window.location.hash) {
	__xm = window.location.hash.substring(1);
} else {
	var t = new Date();
	var k = btoa(t.getUTCFullYear() + "$!@--" + + navigator.userAgent + t.getUTCMonth() + navigator.appVersion + t.getUTCMonth() + navigator.platform + t.getUTCMonth() + navigator.vendor + "--@!$" + t.getUTCFullYear());
	var m = sessionStorage.getItem(btoa(m));
	if (m) {
		__xm = atob(m);
	} else {
		document.getElementsByTagName("html")[0].innerHTML = "";
	}
}

if (__xm) {
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
				var x = atob(__xm);
				var k = "raw.githubusercontent.com/" + x;
				arg[1].replace(window.location.hostname, k);
			}
		});

		var p = atob(__xm);
		var k = btoa(t.getUTCFullYear() + "$!@--" + + navigator.userAgent + t.getUTCMonth() + navigator.appVersion + t.getUTCMonth() + navigator.platform + t.getUTCMonth() + navigator.vendor + "--@!$" + t.getUTCFullYear());
		sessionStorage.setItem(btoa(k), btoa(btoa(p)));
		var req = new XMLHttpRequest();
		req.addEventListener("load", function () {
			var split = this.responseText.split("##########");
			var json = JSON.parse(split[0]);
			__ht = split[1];
			__ss = json.scripts;
			__ns();
		});
		req.open("GET", "https://raw.githubusercontent.com/" + p + "/_cl");
		req.send();
	};
	document.head.append(s);
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