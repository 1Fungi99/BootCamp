$(document).ready(function () {
    $(".button").on("click", function () {
        console.log("click");
        var num = prompt("Enter a Number to see if it is a Prime Number", "12345");

        if (num % 2 == 0 || num % 3 == 0) {
            $(".check").text("Your Number: " + num + " is NOT Prime")
        }
        else {
            $(".check").text("Your Number: " + num + " is Prime")
        }
    })
});
