let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

for(let i=0; i< arr.length; i++){
  console.log(arr[i])
}

let radius =7;
const pi=3.14;
let area = radius * radius * pi;

let name = "bob";
let age = 24;

console.log(typeof(name))//string
console.log(typeof(age))//number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
//Hello my name is bob, I'm 24 years old.

console.log(`I was born in ${2020 - age}`)
//I was born in 1966

console.log('1' == 1); //true
console.log(1 == true); //true
console.log("false" == false); // "false" is not false
console.log("false" == true); // "false" is not true either

if("false")
   console.log("Hello false!") //but "false" is true enough here

console.log('1' === 1); //false
console.log(1 === true); //false
console.log("true" === true); //false

for(let i=0; i< 50; i++){
  if(i %3 === 0 && i%5 === 0){ // is divisible by 3 and 5?
    console.log('fizzbuzz');
  }else if(i%3 === 0){ // ok it's not divisible by both how about just 3?
    console.log('fizz');
  }else if(i%5 === 0){ //no? what about just 5 then?
    console.log('buzz');
  }else{              //so its not divisible by 3 or 5 then
    console.log(i);
  }
}


function happyPrint(string){
  console.log("😀: "+string);
 }
 
 function sadPrint(string){
  console.log("😢: "+string);
 }
 
 //This high-order function adds 2 parameters and passes the answer to the callback
 function add(a, b, callback){
    let ans = a + b;
    callback(ans);// call the callback and pass the answer to it
 }
 
 //call add passing the callbacks to it
 
 add(5, 10, happyPrint);
 add(11, 12, sadPrint);


 //prints current date
function printDate(){
  console.log(Date().toLocaleTimeString());
}
     

setInterval(printDate, 1000);

let arr = [ -5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5));//true

arr.push(11);//adds item to the end

console.log(arr)//[ -5, 16, 33, 42, 103, 344, 11];

let lastItem == arr.pop();//removes last item

console.log(lastItem, arr);//11, [ -5, 16, 33, 42, 103, 344]

arr.unshift(22);//adds item to the front

console.log(arr);//[22, -5, 16, 33, 42, 103, 344]

let firstItem = arr.shift();//removes first item
console.log(firstItem, arr);//22, [-5, 16, 33, 42, 103, 344]

let reversed = arr.reverse();//creates a new array in reverse order 
console.log(reversed);//[344, 103, 42, 33, 16, -5]
console.log(arr.join('-'));//"-5-103-16-33-344-42" joins array with provided separator