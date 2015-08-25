$(document).on('ready', function() {

  //on page load
  // $('#all-library-games').hide();
  $('#new-library-form').hide();
  $('#add-game-form').hide();
  $('#add-game-btn').hide();
  addToDropdown();

  //display games in selected game library
  $('#all-libraries-dropdown').on('click', 'a', function(){
    for (var i = 0; i < allGameLibraries.length; i++) {
      if ($(this).attr('id') === allGameLibraries[i].title) {
        allGameLibraries[i].render();
      }
    }
    //show add game button
    $('#add-game-btn').show();
  });

  //show game form on add game button click
  $('#add-game-btn').on('click', function(event){
    event.preventDefault();
    $('#add-game-form').show();
  });

  //submits data from game form to game library
  $('#add-game-submit').on('click', function(event){
    event.preventDefault();
    //gets value of enteretd title
    var title = $('#title').val();//instance function
    //gets value of selected genre
    var genre = $('#genre').val();//instance function
    //creates new Game instance
    var newGame = new Game(title, genre);
    //get current library
    var currentLibrary = $('.game-library').attr('id');
    for (var i = 0; i < allGameLibraries.length; i++) {
      if (currentLibrary === allGameLibraries[i].uuid){
        allGameLibraries[i].addGame(newGame);
        allGameLibraries[i].render();
      }
    }

    //add new game into current library
    // currentLibrary.addGame(newGame);
    //re-render current game library?
    //for loop through all game libraries, if currentLibrary, which should be the id of library we want, matches the uuid of whatever index in all game libraries, render that library
  });

});






