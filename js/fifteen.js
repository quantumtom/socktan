if (typeof SKTN == "undefined") {

	var SKTN = {};

}
		
SKTN.init = function() {

	var sPath;
	
	var arrayOfTiles = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

	var cachedTiles = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

	SKTN.fifteen.init(arrayOfTiles,cachedTiles);

};

SKTN.fifteen = {

	init : function(arrayOfTiles,cachedTiles) {
	
		// A handle to narrow the scope of the DOM searches.
	
		var tileBoard = document.getElementById("theBoard");
		
		// A nodeList for all the list item elements ("tiles").
		
		var tileDOMElements = tileBoard.getElementsByClassName("tile");
		
		// Foxtrot is the distinguishing class name for the final tile.
		
		var lastTileList = tileBoard.getElementsByClassName("foxtrot");
		
		// The method returns a nodeList, but since there's just the one node...
		
		var lastTile = lastTileList[0];
		
		// Wire up click events for each of the tiles.
		
		
	
		for (var i = 0; i < tileDOMElements.length; i++) {
		
			// Get the className, e.g. "tile bravo"
			
			var tileName = tileDOMElements[i].className;
			
			// Inspect the children (values should be numeric text).
			
			var tileNumber = tileDOMElements[i].innerHTML;
		
			// Make sure the blank tile is not clickable
			
			if ((tileName != "tile foxtrot") && (tileNumber != 15)) {
			
				console.log("tileName is: ", tileName);
		
				tileDOMElements[i].addEventListener("click", function(event) {
				
					SKTN.fifteen.move(this);
					
				}, false);
				
			}
			
		}
	
		var scrambleButton = document.getElementById("scrambleButton");
		
		scrambleButton.addEventListener("click", function() {

			if (SKTN.fifteen.scramble(arrayOfTiles,cachedTiles) == false) {
			
				alert("Scramble failed");
			
			}

		}, false);

		}, 
	
	move : function(clickedTile) {

		var allTiles = document.getElementsByClassName("tile");
		
		// Find the "last" tile (tile #16)
		
		var lastTileList = document.getElementsByClassName("foxtrot");
		
		var lastTile = lastTileList[0];
		
		var clickedTileName;
		
		var clickedTileNumber = clickedTile.innerHTML;
		
		lastTile.innerHTML = clickedTileNumber;
		
		clickedTile.innerHTML = "15";
		
		for (var i = 0; i < clickedTile.classList.length; i++) {
		
			if (clickedTile.classList[i] != "tile") {
			
				clickedTileName = clickedTile.classList[i];
				
			}
			
		}
		
		lastTile.classList.add(clickedTileName);
		
		lastTile.classList.remove("foxtrot");
		
		clickedTile.classList.add("foxtrot");
		
		clickedTile.classList.remove(clickedTileName);
		
	},
	
	/*

	* Value assignment is being handled by the 

	* default constructor initialization.

	*/

	//	tiles : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 

	/*

	* Scrambles the set of tiles so that a user may restart the game

	* @param data An array containing a set of numbers defining the board state.

	* @return boolean Returns true if the board was successfully scrambled. If

	* input data was given the function should insure the validity of the data

	* and return false if unsuccessfully scrambled.

	* 

	* Your array data will look like this:

	* var data = [4, 8, 1, 14, 7, 2, 3, 0, 12, 5, 6, 11, 13, 9, 15];

	* Where array index 0 defines the position of tile number 0, counting left to right and top

	* to bottom. Thus tile 0 is in position 4 (the 5th spot or left most on the second row from

	* top), tile 2 is in position 8 (9th spot or left most on third row), etc.

	*/

	scramble : function(data,cachedData) {
		
		SKTN.fifteen.shuffle(data,cachedData);
			
		if (data != cachedData) {
		
			var myBox = document.getElementById("theBox");
			
			var myBoard = document.getElementById("theBoard");
			
			var myTiles = document.getElementsByTagName("li");
			
//			console.dir(myTiles);
			
			for (var i = 0; i < myTiles.length; i++) {
			
//				console.log(data[i]);
				
				myBoard.insertBefore(myTiles[data[i]],myTiles[i]);
			
			}
			
			return true;
		
		} else {
			
			return false;
			
		}
	
	}, 

	/*
	
	* Get the eligible (clickable) neighbors for the open spot.
	
	* @param position The numeric value that corresponds to the 
	
	* position on the board currently occupied by an empty spot.
	
	* Returns an array of the corresponding eligible (clickable) neighbors.
	
	*/
	
	getNeighbors : function(position) {
	
		
	
	},
	
	/*

	* Solves the sliding puzzle based on the current configuration in the game

	* board. This function will visibly slide the pieces to solve the game. This

	* means the gameboard should not instantly update to be solved but actually

	* have the computer solve it for them using legal moves.

	* @return int Number of moves taken to solve the game.

	*/

	solve : function() {
	
		
	
	}, 
	
	/*
	
	* These are class names used in the markup. 
	
	* We should avoid use of numeric characters in 
	
	* JavaScript variable names and as CSS selectors.
	
	* The class names are the English spelling of the 
	
	* first ten elements, then the NATO phonetic for the 
	
	* six remaining spots in the hexadecimal array of 
	
	* symbolic tile positions.
	
	* TODO: Write a getTileNumber method for reverse 
	
	* decoding.
	
	*/
	
	getTileName : function(tileNumber) {
		
		switch (tileNumber) {
			
			case 0: 
			
				return "zero";
			
				break;
	
			case 1:
			
				return "one";
				
				break;
				
			case 2:
			
				return "two";
				
				break;
				
			case 3:
			
				return "three";
				
				break;
				
			case 4:
			
				return "four";
				
				break;
				
			case 5:
			
				return "five";
				
				break;
				
			case 6:
			
				return "six";
				
				break;
				
			case 7:
			
				return "seven";
				
				break;
				
			case 8:
			
				return "eight";
				
				break;
				
			case 9:
			
				return "nine";
				
				break;
				
			case 10:
			
				return "alpha";
				
				break;
				
			case 11:
				
				return "bravo";
				
				break;
			
			case 12:
			
				return "charlie";
				
				break;
				
			case 13:
			
				return "delta";
				
				break;
				
			case 14:
			
				return "echo";
				
				break;
				
			case 15:
			
				return "foxtrot";
				
				break;
				
			default:
			
				return null;
				
		}
			
	}, 
	
	/*

	* JSFromHell.com @ http://jsfromhell.com

	* --------------------------------------

	* 

	* Name: Shuffler

	* URL: http://jsfromhell.com/array/shuffle

	* Author: Jonas Raoni Soares Silva

	* Created: 2005.11.03

	* Modified: 2005.11.03

	* Description:

	* Scrambles the elements of an array.

	*/
	
	shuffle : function(v) {

		for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);

		return v;

	}
	

}

SKTN.init();