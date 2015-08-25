$(document).on('ready', function() {
  // $('#all-library-games').hide();
  $('#new-library-form').hide();
  $('#add-game-form').hide();
  $('#add-game-btn').hide();


  $('#all-libraries-dropdown').on('click', 'a', function(){
    lucyLibrary.render();
  });









  $('#add-button').on('click', function(event){
    event.preventDefault();
    //gets value of enteretd title
    var title = $('#title').val();//instance function
    //gets value of selected genre
    var genre = $('#genre').val();//instance function
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
