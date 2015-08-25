
//Game class constructor
function Game (title, genre){
  this.title = title;
  this.genre = genre;
}

//Game library class constructor
function GameLibrary (title){
  this.title = title;
  this.games = [];
}

//Game render method
Game.prototype.render = function() {
  // Creates a list of game with genre
  var gameList = $('<ul>')
    .append('<li><strong>Title:</strong> ' + this.title + '</li>')
    .append('<li><strong>Genre:</strong> ' + this.genre + '</li>');
  // Creates div for gameList
  this.$element = $('<div class="game">')
    .append(gameList);
  return this.$element;
};

// GameLibrary render method
GameLibrary.prototype.render = function() {
  // Create elements for all games
  var renderedGames = this.games.map(function(item){
    return item.render();
  });
  // Render game library element
  this.$element = $('#all-library-games')
    .append('<div class="game-library">')
    .append('<h3 class="text-center">' + this.title + '</h3>')
    .append($('<div class="games">').append(renderedGames));
  return this.$element;
};

//testing instances
var game1 = new Game('Catan', 'Board Game');
var game2 = new Game('Rummy', 'Card Game');
var game3 = new Game('Poker', 'Card Game');
var game4 = new Game('Gin', 'Card Game');


var funLibrary = new GameLibrary('Fun Library');
funLibrary.games.push(game1, game2, game3, game4);

console.log(game1);
console.log(funLibrary);

funLibrary.render();
//for loop, i = children of current div




