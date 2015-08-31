//logic helper functions

//add game library titles to dropdown menu
function addToDropdown(){
  var $dropdown =  $('#all-libraries-dropdown');
  $dropdown.empty();
  for (var i = 0; i < allGameLibraries.length; i++) {
      $dropdown.append('<li><a href="#" id="' +allGameLibraries[i].uuid+ '">' +allGameLibraries[i].title+ '</a></li>');
  }
}

//generates random unique ID
function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
}

//gets library info from array based on attribute (id, title) and renders that library
function getLibraryInfo (attr, arr, arrAttr){
  for (var i = 0; i < arr.length; i++) {
    if (attr === arr[i].arrAttr) {
      arr[i].render();
    }
  }
}

//rendering library from dropdown selection
// for (var i = 0; i < allGameLibraries.length; i++) {
//   if ($(this).attr('id') === allGameLibraries[i].title) {
//     allGameLibraries[i].render();
//   }
// }

//new game library
// for (var i = 0; i < allGameLibraries.length; i++) {
//   if (newLibrary.title === allGameLibraries[i].title) {
//     allGameLibraries[i].render();
//   }
// }


