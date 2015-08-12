$(document).on('ready', function() {
  // $('body')
    // .append(catan.render())
    // .append(cardGames.render());
  $('#add-button').on('click', function(){
    var title = $('#title').val();
    var genre = $('#genre').val();
    game = new Game (title, genre);



  });

});

//game render
//what column
//append

//gl render
//create column
//
