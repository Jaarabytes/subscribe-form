$(document).ready(function() {
    $("#subscribeForm").submit(function(event) {
        event.preventDefault();
    })
    $("#submit").click(function() {
      var email = $("#input").val();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (email === "" || !emailRegex.test(email)) {
        $("#input").css({
          "border": "1px solid red",
          "color": "red",
          "background-color":"pink"
        });
      } else {
        $("#input").css({
          "border": "none",
          "color": "black"
        });
      }      
    });
  });