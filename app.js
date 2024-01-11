$(function() {
  // Update countdown every second
  setInterval(function() {
    $.getJSON('/countdown', function(data) {
      $('#countdown').text(data);
    });
  }, 1000);

  // Handle alarm setting
  $('#set-alarm').click(function() {
    $.get('/set_alarm', { alarm_time: $('#alarm-time').val() });
  });
});

