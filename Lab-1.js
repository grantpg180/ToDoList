/*Show an unordered list of todo's
•Show an input to enter a new todo
•Show a button to add a todo. When the button is clicked:
•The text from the input box is used to add a list item to the bottom of the list
•The text from the input box is cleared out.
•When the user clicks on a list item, it is removed
•Extra Credit:-When a list item is clicked, cross it out, then remove it after 1 second. */


var button = $('.button');
var list = $('list');
//let clear = $('.trash');

function button () {
  $('.list').append('<li>' +$(' .words ').val()+ '<span><button ="submit" onclick="closeItem()" class="trash" type="button">X</span></button>');
  return false;


}

function closeItem() {
var close = $(".trash");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}
