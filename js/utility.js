//logic helper functions

//add game library titles to dropdown menu
function addToDropdown(){
  var $dropdown =  $('#all-libraries-dropdown');
  $dropdown.empty();
  for (var i = 0; i < allGameLibraries.length; i++) {
      $gameLibraryDropDown.append('<li><a href="#" id="'+allGameLibraries[i].title+'">'+allGameLibraries[i].title+'</a></li>');
  }
}
