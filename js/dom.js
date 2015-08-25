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
    //current library
    // var currentLibrary =

  });

});






