
var form = $('#submit-form');
form.on('submit', function(event) {
  event.preventDefault();
  // @dev update message, button etc.
  var button = $('button');
  button.prop('disabled', true);
  button.text('Loading...');
  $('#message').text('Processing step one...');
  $('#progress').val(5);
  $('#progress').show();

  var inputNumber = $('#input-number').val();
  $.ajax({
    type: "POST",
    url: "/step-one",
    contentType: "application/json",
    data: JSON.stringify({ input: parseInt(inputNumber, 10) }),
    success: function(data, status) {
      stepTwo(data['answer']);
    },
    dataType: 'json'
  });
});

function stepTwo(answer) {
  // update the message
  $('#message').html('Answer step one: <strong>' + answer + '</strong>. Processing step two...');
  $('#progress').val(33);
  $.ajax({
    type: "POST",
    url: "/step-two",
    contentType: "application/json",
    data: JSON.stringify({ input: parseInt(answer, 10) }),
    success: function(data, status) {
      stepThree(data['answer']);
    },
    dataType: 'json'
  });
}

function stepThree(answer) {
  $('#message').html('Answer step two: <strong>' + answer + '</strong>. Processing step three...');
  $('#progress').val(66);
  $.ajax({
    type: "POST",
    url: "/step-three",
    contentType: "application/json",
    data: JSON.stringify({ input: parseInt(answer, 10) }),
    success: function(data, status) {
      done(data['answer']);
    },
    dataType: 'json'
  });

}

// @dev: Etc, etc, just keep adding steps until you're done and call done

function done(answer) {
  // @dev: give user final answer
  $('#message').html('Final answer: <strong>' + answer + '</strong>');
  $('#progress').val(100);
  // @dev: reset button state
  var button = $('button');
  button.prop('disabled', false);
  button.text('Try again');
}
