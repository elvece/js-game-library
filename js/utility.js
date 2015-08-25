//logic helper functions

//add game library titles to dropdown menu
function addToDropdown(){
  var $dropdown =  $('#all-libraries-dropdown');
  $dropdown.empty();
  for (var i = 0; i < allGameLibraries.length; i++) {
      $dropdown.append('<li><a href="#" id="'+allGameLibraries[i].title+'">'+allGameLibraries[i].title+'</a></li>');
  }
}

function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};
