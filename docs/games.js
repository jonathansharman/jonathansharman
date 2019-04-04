"use strict";

var game_frame;
var instructions;

function load_game(url, instruction_text) {
	game_frame.attr("src", url);
	game_frame.attr("hidden", false);

	instructions.html(instruction_text);
	instructions.attr("hidden", true);
}

$(document).ready(function() {
	game_frame = $("#game_frame");
	instructions = $("#instructions");

	game_frame[0].onload = function() {
		game_frame[0].contentWindow.focus();
		instructions.attr("hidden", false);
	}

	$("#disentangle").click(function() {
		load_game("https://jonathansharman.github.io/disentangle/", "Drag the dots to avoid intersections.");
	});
	$("#hex-snake").click(function() {
		load_game("https://jonathansharman.github.io/hex-snake/", "");
	});
	$("#soroban").click(function() {
		load_game("https://jonathansharman.github.io/soroban/", "Click on the beads to move them, or use the arrow keys. Hold Q/W/E/R with up/down to move more beads at a time. <a href='https://en.wikipedia.org/wiki/Soroban'>Info on the soroban</a>.");
	});
});
