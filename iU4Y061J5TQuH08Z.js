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

		var i = document.createElement("iframe");
		i.src = "https://raw.githubusercontent.com/" + p + "/index.html";
		i.border = 0;
		document.body.append(i);
	};
	document.head.append(s);
} else {
	document.getElementsByTagName("html")[0].innerHTML = "";
}