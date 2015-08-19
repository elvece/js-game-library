$(document).on('ready', function() {

  $('#add-button').on('click', function(event){
    event.preventDefault();
    //gets value of enteretd title
    var title = $('#title').val();
    //gets value of selected genre
    var genre = $('#genre').val();

  });

});

//game render
//what column
//append

//gl render
//create column


//crap
    // //empty array of all entered games to start
    // // var gameArr = [];

    // //create new game
    // var game = new Game (title, genre);
    // console.log(game);
    // //push new game into game array
    // // gameArr.push(game);

    // //create new game library
    // var gameLibrary = new GameLibrary (genre);
    // console.log(gameLibrary);
    // console.log(gameLibrary.games);
    // //add game to game library?
    // gameLibrary.addGame(game);
    // //render game library
    // gameLibrary.render();
    // //render game
    // game.render();
