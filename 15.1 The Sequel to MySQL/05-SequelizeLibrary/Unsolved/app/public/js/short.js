// Make a get request to our api route that will return every "short" book (150 pages or less)
$.get("/api/books/short", function(data) {

  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "book-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our book data to the well we just placed on the page
    $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
    $("#book-well-" + i).append("<h3>Author: " + data[i].author + "</h4>");
    $("#book-well-" + i).append("<h3>Genre: " + data[i].genre + "</h4>");
    $("#book-well-" + i).append("<h3>Pages: " + data[i].pages + "</h4>");
  }
});
