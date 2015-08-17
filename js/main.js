//testing
// var testArr = [];
// var test = new Game("catan", "board game");
// testArr.push(test);
// console.log(testArr);
// var board = new GameLibrary("board games", testArr);
// console.log(board);


//Game constructor
function Game (title, genre){
  this.title = title;
  this.genre = genre;
}

//game organize prototype
// Game.prototype.organize= function(){
//   var gameLibraryArr = [];
// };

//adds game to the DOM
Game.prototype.render = function() {
  this.$element = $('.library')
    .append('<div class="game"><strong>Game</strong>: ' + this.title + '</div>')
    .append('<br>')
    .append('<strong>Genre</strong>: ' + this.genre)
    .addClass('col-md-6');
  return this.$element;
};

//game library constructor
function GameLibrary (title, gameArr) {
  this.title = title;
  this.gameArr = [];
}

//adds game libraries to the dom
GameLibrary.prototype.render = function() {
  this.$element = $('<div class="library">')
    .append('<h3>' + this.title + '</h3>')
    .append('<br>')
    .append(this.gameArr[0])
    .addClass('col-md-6');
    return this.$element;
};



GameLibrary.prototype.addGame = function(gameInstance) {
  this.gameArr.push(gameInstance);
};






