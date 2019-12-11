var fs = require("fs");
var transaction = process.argv[2];
var amount = process.argv[3];

if (transaction == "total") {
    balance();
}

if (transaction == 'deposit') {
    amount = " , " + amount;
    fs.appendFile("bank.txt", amount, function (err) {
        console.log("Your amount has been deposited!")
    });
    balance();
}
if (transaction == "withdraw") {
    amount = " , -" + amount;
    fs.appendFile("bank.txt", amount, function (err) {
        console.log("Your amount has been withdrawn!")
    });
    balance();
}
if (transaction == "lotto") {
    amount = " , -100";
    fs.appendFile("bank.txt", amount, function (err) { });
    var lotto = parseFloat(Math.random() * 200);
    var winning = " , " + lotto;
    fs.appendFile("bank.txt", winning, function (err) { });

    if (lotto < 100) {
        var loss = 100 - lotto
        console.log("You lose $" + loss.toFixed(2) + ".");
    }
    if (lotto > 100) {
        var win = lotto - 100
        console.log("You won $" + win.toFixed(2) + ".");
    }

    balance();
}










function balance() {
    fs.readFile("bank.txt", "utf8", function (err, data) {
        var bankArray = data.split(",");
        var balance = 0;
        for (var i = 0; i < bankArray.length; i++) {
            var num = parseFloat(bankArray[i]);
            balance += num;
        }
        console.log("Your Balance is: $" + balance.toFixed(2));
    });
}