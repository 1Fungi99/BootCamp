var fs = require("fs"); // "fs"=file system


fs.readFile("best_things_ever.txt", "utf8", function (error, data) {
    if (error) {
        console.log(error);
    }
    else {
        // console.log(data);

        var dataArray=data.split(",");
        
        // console.log(dataArray);

        for (var i=0;i<dataArray.length;i++){
            console.log(dataArray[i]);
        }
    }
});