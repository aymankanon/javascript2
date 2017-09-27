
// Number 1

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
let myArray = []
for (let i = startIndex; i<= stopIndex; i++){
myArray.push(i);
}
  console.log(myArray);

for (let n = 0; n<= myArray.length; n++){
     myArray[n]%3 == 0 ? threeCallback(): true;
        myArray[n]%5 == 0 ? fiveCallback(): true;  
    }
}

function sayThree(){
      console.log("sayThree")
}
function sayFive(){
      console.log("sayFive")
}



threeFive(10, 15, sayThree, sayFive);

//for loop

function repeatStringNumTimes(str, num) {
  
  let myStr = "";
  for(let i = 0; i<num; i++){
    myStr += str;
  }
  return myStr;
}

console.log(repeatStringNumTimes("for loop, ", 3));

//while loop

function repeatStringNumTimes(str, num) {
  
  let myStr = "";
  
 let i = 0; 
 while(i<num){ myStr += str; i++ }
  return myStr;
}

console.log(repeatStringNumTimes("while loop, ", 3));

// do loop


function repeatStringNumTimes(str, num) {
  
 let myStr = "";
 let i = 0;
 do{  
   num > 0 ? myStr += str : false;
   i++;
 } 
 while(i<num)
 return myStr;
}

console.log(repeatStringNumTimes("do loop, ", 3));

// 6

var MotorBike = function() {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 1;
};


// 7

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var i=0; i<arr.length; i++){
for(var j=0; j<arr[i].length; j++){
product *= arr[i][j];
}
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);



