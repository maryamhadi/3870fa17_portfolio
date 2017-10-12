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

    if (hours >= 0 && hours <= 11) {
      return 'Good morning!';
    } else if (hours > 11 && hours <= 15) {
      return 'Good afternoon!';
    } else {
      return 'Good evening!';
    }
  }

  setInterval(function () {
    console.log('yo = ', getTime());
    $('.landing-time').text(getTime());
    $('.landing-greeting').text(getGreeting());
  }, 1000);
});
