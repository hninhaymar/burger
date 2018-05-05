$(function() {
    $("#form").on("submit", function(event) {
        console.log("form submit clicked");
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var burger_name =  $("#burger").val().trim();
    
        // Send the POST request.
        $.ajax("/api/burger", {
          type: "POST",
          data: burger_name
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});