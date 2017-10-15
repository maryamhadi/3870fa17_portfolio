$(document).ready(function () {
  console.log('ready');

  function getTime () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    // Convert military time to civilian time
    if (hours > 12) {
      hours -= 12;
    }

    // Pad 0 if minutes less than 10
    if (minutes < 10) {
      minutes = '0' + String(minutes);
    }

    return String(hours) + ':' + String(minutes);
  }

  function getGreeting () {
    var date = new Date();
    var hours = date.getHours();

    // Generate greeting based on military time intervals
    if (hours >= 4 && hours <= 11) {
      return 'Good morning future client!';
    } else if (hours > 11 && hours <= 18) {
      return 'Good afternoon future client!';
    } else {
      return 'Good evening future client!';
    }
  }

  $('.landing-greeting').text(getGreeting());

  setInterval(function () {
    // $('.landing-time').text(getTime());
    $('.landing-greeting').text(getGreeting());
  }, 1000 * 60 * 60);
});
