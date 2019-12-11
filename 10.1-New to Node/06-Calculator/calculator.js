var calc = process.argv[2];
var num1 = parseFloat(process.argv[3]);
var num2 = parseFloat(process.argv[4]);

if (process.argv[2] == "add") {
    console.log(num1 + num2);
}
if (process.argv[2] == "subtract") {
    console.log(num1 - num2);

}
if (process.argv[2] == "multiply") {
    console.log(num1 * num2);

}
if (process.argv[2] == "divide") {
    console.log(num1 / num2);

}
if (process.argv[2] == "remainder") {
    console.log(num1 % num2);

}
if (process.argv[2] == "exp") {
    console.log(Math.pow(num1, num2));

}

