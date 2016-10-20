$(document).ready(function() {
$('.box').on('click', function() {
  $(this).toggleClass(color);
});
$('#reset').on('click',function() {
  $('.box').removeClass(colors);
});
var color = 'white';
var colors = 'white green red blue yellow';
$('#red').on('click', function() {
  color = 'red';
});

$('#blue').on('click', function() {
  color = 'blue';
});

$('#green').on('click', function() {
  color = 'green';
});

$('#yellow').on('click', function() {
  color = 'yellow';
});

$('#white').on('click', function() {
  color = 'white';
});


});
