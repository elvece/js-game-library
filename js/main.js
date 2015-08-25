//all game libraries
var allGameLibraries = [];

//Game class constructor
function Game (title, genre){
  this.title = title;
  this.genre = genre;
}

//Game library class constructor
function GameLibrary (title){
  this.title = title;
  this.games = [];
  this.uuid = generateUUID();
}

//Game render method
Game.prototype.render = function() {
  // Creates a list of game with genre
  var gameList = $('<ul>')
    .append('<li><strong>Title:</strong> ' +this.title+ '</li>')
    .append('<li><strong>Genre:</strong> ' +this.genre+ '</li>')
    .css('list-style-type', 'none');
  // Creates div for gameList
  this.$element = $('<div class="game">')
    .append(gameList);
  return this.$element;
};

// GameLibrary render method
GameLibrary.prototype.render = function() {
  $('#all-library-games').empty();
  // Create elements for all games
  var renderedGames = this.games.map(function(item){
    return item.render();
  });
  // Render game library element
  this.$element = $('#all-library-games')
    .append('<div class="game-library id="'+this.title+'">')
    .append('<h3 class="text-center">' +this.title+ '</h3>')
    .append($('<div class="games">').append(renderedGames));
  return this.$element;
};

GameLibrary.prototype.addGame = function(game) {
  this.games.push(game);
};

//testing instances
var game1 = new Game('Catan', 'Board Game');
var game2 = new Game('Rummy', 'Card Game');
var game3 = new Game('WoW', 'Computer Game');
var game4 = new Game('Zelda', 'Video Game');

var lucyLibrary = new GameLibrary('Lucy\'s Library');
lucyLibrary.addGame(game1);
lucyLibrary.addGame(game2);
lucyLibrary.addGame(game3);
lucyLibrary.addGame(game4);
allGameLibraries.push(lucyLibrary);
// lucyLibrary.render();



//for loop, i = children of current div




