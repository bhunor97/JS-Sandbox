/*// random number rounded down
randomNumber = Math.floor(Math.random() * 10);
document.write(randomNumber);

//easier way
document.write(Math.random().toFixed(2));
*/

/*
// random number generator
var num1 = Math.floor(Math.random() * 100);
var num2 = Math.floor(Math.random() * 100);
var num3 = Math.floor(Math.random() * 100);

// biggest random number out of the three
function theBiggest (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
};

document.write(theBiggest(num1,num2,num3));


// button
var button = document.querySelector('button');

button.onclick = function (){
    alert(theBiggest(num1,num2,num3));
}
*/

/* // indexOf
let myString = "Hello My Name is John";
document.write(myString.indexOf("asd") === -1);

if(browserType.indexOf('mozilla') === -1) {
  // do stuff with the string if the 'mozilla'
  // substring is NOT contained within it
}

if(browserType.indexOf('mozilla') !== -1) {
  // do stuff with the string if the 'mozilla'
  // substring IS contained within it
}

*/

/* // toUpperCase() / toLowerCase() / .slice()
let myString = "Hello My Name is John";
document.write(myString.toUpperCase().slice(9, 13))
*/

/* //.replace("", "")
let myString = "Lorem Ipsum xyz ASD";
document.write(myString.replace("Ipsum", "muspI").toUpperCase());
*/

/* // Arrays
let shoppingList = [1,2,3,4,5,6,7,8];
shoppingList[8] = "asd";
document.write(shoppingList);
*/

/* // toString()
let shoppingList = [1,2,3,4,5,6,7,8];
shoppingList[8] = "asd";
document.write(shoppingList.toString());
*/

/* // .push()
 let shoppingList = [1,2,3,4,5,6,7,8];
 shoppingList[8] = "asd";
 shoppingList.push("another item pushed to the end")
 document.write(shoppingList);
*/

/* // .join() and toString();
let myArray = ['asd', 'sdf', 'xcv'];
myArray[3] = 123;
myArray.toString();
document.write(myArray.join('-'));
*/

/* // .split()
let string = "asdasd,asd,asdasd";
string.split(','); // = ["asdasd", "asd", "asdasd"]
*/

/*
const height = Number;
const age = Number;
const myName = String;

const btn = document.querySelector("button");

const welcome = (
  myName = "Anonymous",
  age = "'unknown'",
  height = "'unknown'"
) =>
  "Hi " +
  myName +
  "! You are " +
  age +
  " years-old  and " +
  height +
  "-cm tall!";

document.write(welcome());
*/
