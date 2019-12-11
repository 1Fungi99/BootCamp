var array= [];
for (var i=0; i<101; i++){
array.push(i);
}
for (var i=0;i<=100;i+=3) {
    array.splice(i,1,"Fizz");
}
for (var i=0;i<=100;i+=5) {
    array.splice(i,1,"Buzz");
}
for (var i=0;i<=100;i+=15) {
    array.splice(i,1,"FizzBuzz");
}
array.splice(0,1);
console.log("3 for loop = " + array);     