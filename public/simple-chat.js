var socket = io();

socket.on('welcome', function(data) {
  $('<li>').text(data.message).appendTo($('#message-log'));
});

socket.on('message', function(data) {
  var li = $('<li>').css('color', data.color).appendTo($('#message-log'));
  $('<strong>').text(data.user)
    .css('padding-right', '20px')
    .appendTo(li);
  $('<span>').text(data.text).appendTo(li);
});

$('#chat-send').on("click", function() {
  var text = $('#chat-text').text();
  socket.emit('message', {message: text});
  $('#chat-text').val('');
});

$('#color').on("change", function() {
  var color = $(this).val();
  socket.emit('color', color);
})
