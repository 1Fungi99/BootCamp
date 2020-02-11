var cheerio = require("cheerio");
var axios = require("axios");

// First, tell the console what server3.js is doing
console.log("\n******************************************\n" +
            "Look at the image of every award winner in \n" +
            "one of the pages of `awwwards.com`. Then,\n" +
            "grab the image's source URL." +
            "\n******************************************\n");

// Make request via axios to grab the HTML from `awwards's` clean website section
axios.get("http://www.awwwards.com/websites/clean/").then(function(response) {

  // Load the HTML into cheerio
  var $ = cheerio.load(response.data);

  // Make an empty array for saving our scraped info
  var results = [];

  // With cheerio, look at each award-winning site, enclosed in "figure" tags with the class name "site"
  $("figure.rollover").each(function(i, element) {

    /* Cheerio's find method will "find" the first matching child element in a parent.
     *    We start at the current element, then "find" its first child a-tag.
     *    Then, we "find" the lone child img-tag in that a-tag.
     *    Then, .attr grabs the imgs srcset value.
     *    The srcset value is used instead of src in this case because of how they're displaying the images
     *    Visit the website and inspect the DOM if there's any confusion
    */
    var imgLink = $(element).find("a").find("img").attr("data-srcset").split(",")[0].split(" ")[0];

    // Push the image's URL (saved to the imgLink var) into the results array
    results.push({ link: imgLink });
  });

  // After looping through each element found, log the results to the console
  console.log(results);
});
