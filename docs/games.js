"use strict";

var game_frame;
var instructions;

function load_game(url, instruction_text) {
	game_frame[0].contentWindow.location.replace(url);
	game_frame.attr("hidden", false);

	instructions.html(instruction_text);
	instructions.attr("hidden", true);
}

function process_hash() {
	var hash = window.location.hash;

	var valid_game = true;
	if (hash == "#disentangle") {
		load_game
			( "https://jonathansharman.github.io/disentangle/"
			, "Drag the dots to avoid intersections."
			);
	} else if (hash == "#hex-snake") {
		load_game
			( "https://jonathansharman.github.io/hex-snake/"
			, ""
			);
	} else if (hash == "#soroban") {
		load_game
			( "https://jonathansharman.github.io/soroban/"
			, "Click on the beads to move them, or use the arrow keys. Hold Q/W/E/R with up/down to move more beads at a time. <a href='https://en.wikipedia.org/wiki/Soroban'>Info on the soroban</a>."
			);
	} else {
		valid_game = false;
		instructions.attr("hidden", true);
	}

	$("#game_list > li").removeClass("active");
	if (valid_game) {
		$(hash).addClass("active");
	}
}

$(document).ready(function() {
	game_frame = $("#game_frame");
	instructions = $("#instructions");

	game_frame[0].onload = function() {
		game_frame[0].contentWindow.focus();
		instructions.attr("hidden", false);
	}
	
	window.onhashchange = process_hash;
	process_hash();
});
