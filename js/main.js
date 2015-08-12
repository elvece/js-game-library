
//Game constructor
function Game (title, genre){
  this.title = title;
  this.genre = genre;
}

//adds game to the DOM
Game.prototype.render = function() {
  this.$element = $('<div>')
    .append('<strong>Game</strong>: ' + this.title)
    .append('<br>')
    .append('<strong>Genre</strong>: ' + this.genre)
    .addClass('col-md-6');
  return this.$element;
};

//game library constructor
function GameLibrary (title, games) {
  this.title = title;
  this.games = [];
}

//add games to the game library
//not working?
GameLibrary.prototype.addGames = function(instance){
  return this.games.push(instance);
};

//adds game libraries to the dom
//not right?
GameLibrary.prototype.render = function() {
  this.$element = $('<div>')
    .append('<h3>' + this.title + '</h3>')
    .append('<br>')
    .append(this.games)
    .addClass('col-md-6');
    return this.$element;
};

//game instances


//game libraries
var cardGames = new GameLibrary ("Card Games");

//add games
cardGames.addGames(cards);
















