$(document).ready(function() {
  const form = $('#myForm');
  // Add form submit event listener
  form.on('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    var email = $("#input").val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
      $("#input").css({
        "border": "1px solid red",
        "color": "red",
        "background-color": "pink"
      });
      $("#label").text("Input a valid email");
    } else {
      $("#input").css({
        "border": "1px solid gray",
        "color": "black",
        "background-color": "white"
      });
      $("#emailPlaceholder").text(email);
      $('#popup').fadeIn();
    }
  });

  // Dismiss the popup when the "Dismiss message" button is clicked
  $('#dismiss').on('click', function() {
    $('#popup').fadeOut();
  });
});
