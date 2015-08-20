
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
    .append('<li><strong>' + this.title + '</strong></li>')
    .append('<li>' + this.genre + '</li>')
    .css('list-style-type', 'none');
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
  this.$element = $('#results')
    .append('<div>')
    .addClass('game-library')
    .append('<h3>' + this.title + '</h3>')
    .append($('<div class="games">').append(renderedGames));
  return this.$element;
};



//for loop, i = children of current div




