$(document).on('ready', function() {

  $('#add-button').on('click', function(event){
    event.preventDefault();
    //gets value of enteretd title
    var title = $('#title').val();
    //gets value of selected genre
    var genre = $('#genre').val();
    //empty array of all entered games to start
    // var gameArr = [];
    //create new game
    game = new Game (title, genre);
    // console.log(game);
    //push new game into game array
    // gameArr.push(game);
    //create new game library
    gamelibrary = new GameLibrary (genre, gameArr);
    // console.log(gamelibrary);
    //add game to game library?
    gamelibrary.addGame(game);
    //render game library
    $('#results')
      .append (gamelibrary.render())
    //render game
      .append (game.render());
  });

});

//game render
//what column
//append

//gl render
//create column


