$(document).on('ready', function() {
  $('#add-button').on('click', function(event){
    event.preventDefault();
    //gets value of enteretd title
    var title = $('#title').val();
    //gets value of selected genre
    var genre = $('#genre').val();
    //creates new Game instance
    var newGame = new Game(title, genre);
    //new library instance
    var newLibrary = new GameLibrary("Lucy\'s Games");
    // Push the new game into the library
    newLibrary.games.push(newGame);
    //render new game library
  });
});
//create game function
