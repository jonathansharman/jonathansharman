"use strict";

var game_frame;
var instructions;

function load_game(url, instruction_text) {
	game_frame[0].contentWindow.location.replace("https://jonathansharman.github.io/" + url + "/");
	game_frame.attr("hidden", false);

	instructions.html(instruction_text);
	instructions.attr("hidden", true);
}

function process_hash() {
	var hash = window.location.hash;

	var valid_game = true;
	if (hash == "#disentangle") {
		let game = "disentangle";
		let instructions = "Drag the dots to avoid intersections.";
		load_game(game, instructions);
	} else if (hash == "#unnatural-selection") {
		let game = "unnatural-selection";
		let instructions = "Try to make every genome in the population match the target genome. Press the \"Breed\" button to create the next generation with parents chosen from the current one. Click and drag to toggle genomes - selected genomes have double chances to be chosen as a parent. Use the \"radiation\" slider to adjust the rate of mutation per nucleotide per generation.<br><br>Shortcuts:<ul><li>Space: breed</li><li>S: Change the default selection</li><li>G: Show/hide guide</li><li>Q/W/E/R: Min/less/more/max radiation</li></ul>";
		load_game(game, instructions);
	} else if (hash == "#hex-snake") {
		let game = "hex-snake";
		load_game(game, "");
	} else if (hash == "#soroban") {
		let game = "soroban";
		let instructions = "Click on the beads to move them, or use the arrow keys. Hold Q/W/E/R with up/down to move more beads at a time. <a href='https://en.wikipedia.org/wiki/Soroban'>Info on the soroban</a>.";
		load_game(game, instructions);
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
