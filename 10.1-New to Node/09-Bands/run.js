const bands = require("./bands.js");
var arg = process.argv[2];

// console.log(bands);
// console.log("Ask 'punk', 'rap', or 'classic' next time!");

switch (arg) {
    case "punk":
        console.log(bands.bands.punk);
        break;
    case "rap":
        console.log(bands.bands.rap);
        break;
    case "classic":
        console.log(bands.bands.classic);
        break;
    default:
        for (var key in bands.bands)
        console.log("A "+key+" band is "+ bands.bands[key]);
        break;
}