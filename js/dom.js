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
  $('#add-game-submit').on('click', function(event){//change to on submit if add button within form (this will allow for submit on enter too)
    event.preventDefault();
    //gets value of enteretd title
    var $title = $('#title').val();//instance function
    //gets value of selected genre
    var $genre = $('#genre').val();//instance function
    //creates new Game instance
    var newGame = new Game($title, $genre);
    //get current library
    var currentLibrary = $('.game-library').attr('id');
    for (var i = 0; i < allGameLibraries.length; i++) {
      if (currentLibrary === allGameLibraries[i].uuid){
        allGameLibraries[i].addGame(newGame);
        allGameLibraries[i].render();
      }
    }
    //clears form
    $('#title').val('');
    $('#genre').val('');

  });

  //displays new library from on add new game library button click
  $('#add-library-btn').on('click', function(event){
    event.preventDefault();
    $('#new-library-form').show();
  });

  //submits data from add new library form, adds to drop down and displays add game form
  $('#add-game-library-submit').on('click', function(event){
    event.preventDefault();
    //gets new library name
    var $newLibraryName = $('#new-game-library-name').val();
    //creates new Library instance
    var newLibrary = new GameLibrary($newLibraryName);
    //pushes to all game libraries array
    allGameLibraries.push(newLibrary);
    //adds to dropdown
    addToDropdown();
    //hide add new library form
    $('#new-library-form').hide();
    //display new game library as if selected from dropdown
    for (var i = 0; i < allGameLibraries.length; i++) {
      if (newLibrary.title === allGameLibraries[i].title) {
        allGameLibraries[i].render();
      }
    }
    //display add game button
    $('#add-game-btn').show();

  });

});

function getLibraryInfo (attr, arr){
  for (var i = 0; i < arr.length; i++) {
    if (attr === arr[i].title) {
      arr[i].render();
    }
  }
}




