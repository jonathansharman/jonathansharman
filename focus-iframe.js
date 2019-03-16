"use strict";

$(document).ready(function() {
    var iframe = $("iframe")[0];
	iframe.onload = function() {
		iframe.contentWindow.focus();
	}
});
