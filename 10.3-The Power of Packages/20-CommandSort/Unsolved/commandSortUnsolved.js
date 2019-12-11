// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
num1=parseFloat(process.argv[2]);
num2=parseFloat(process.argv[3]);
num3=parseFloat(process.argv[4]);
num4=parseFloat(process.argv[5]);
bubbleSort();




function bubbleSort(){
const arr = [num1,num2,num3,num4];

    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    console.log(arr);
    return arr;
 }