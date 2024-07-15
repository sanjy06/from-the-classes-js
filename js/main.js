/* /* /* /*  
//strings
let a = "mathematics";

//string methods char at
console.log(a.charAt(2));

//string method (indexof)
console.log(a.indexOf("he"));
//(3)start from first letter(h)

//string method (lastindexof)
console.log(a.lastIndexOf("at"));
//starts from last letter(6(t))

//string method (slice)
console.log(a.slice(5, 7));
//cut and show only the letter btw 5th and 7th letter in a word and show only from first letter

//string method (uppercase)
console.log(a.toUpperCase());
//open and close bracket always should be used, and helps to give with uppercase letters

//same with lowercase

//string method(include)
console.log(a.includes("the"));
// this method gives output as a boolean datatype, if there is doubt check on console. for exapmple if the letter are not present in the  variable stored name it will show false

//string method (split)
console.log("sanjay i try".split(""));
//this split the two strings and gives a array type of output. example['math', 'matics']

//numbers

const mynumber = "5.69778kuhkukhu098"; //string
const myvariable = 42;

console.log(Number(mynumber) + 45);
console.log(Number(true + 2));

//here if the variable name is string, if we use number method we can change it to number and shows the output in the console as number

//NUMBER METHODS

//number method (isinteger)
console.log(Number.isInteger(mynumber));

//if the the given data inside the barcket is int it says true if its not it gives output as flase

//number method (parsefloat)
console.log(Number, parseFloat(mynumber));
//even if there is extra string it take out only float decimal value and show it as output

//number method (parseint)
console.log(Number.parseInt(mynumber));
//here it cuts the decimal number as well as letter and give the exact number which is infront of the decimal point

//tostring method
console.log(myvariable.toString());
//it changes to string even if the variable name contains int as a data

//MATH PROPERTIES

console.log(Math.PI);
console.log(Math.round(9.8));
// here it gives the round ah evlo varuthu value example:10

console.log(Math.trunc(Math.PI));
//trunc=surukrathu making small, for exapmle if the value is 3.144349589 nit gives only 3

console.log(Math.ceil(Math.PI));
//here it goes for next number itself if the number is 4.1 it gives 5, if its 2.8 its gives 3 . it goes for next number

console.log(Math.floor(Math.PI));
//its opposite of ceil ceiling, floor is giving lowest of its number for example if its 4.3 it gives 4, if its 4.8 it also gives 4 as output

console.log(Math.pow(4, 3));
//in this concept it says its the power of for example(4 to the power of 3, it means 4x4x4 its 64)
//pow is power of

console.log(Math.min(83, 87, 78, 5));
//here min refers minimum it gives min value as output

console.log(Math.max(74.98));
//same as min

console.log(Math.ceil(Math.random() * 10) + 1);
//it gives random number while saving every single time starts from 0.
*/

/*let a = "sanjay";
console.log(a);

console.log(a.charAt(Math.ceil(Math.random() * a.length)));
 */

/*let average = 60;
/*let arrears = true;

if (average >= 90) {
  console.log("grade a");
} else if (average >= 89) {
  console.log("grade b");
} else if (average >= 79) {
  console.log("grade c");
} else {
  if (arrears > 80) {
    console.log("ca");
  } else {
    console.log("sorry");
  }
} */
/* 
let a = 2;

switch (a) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(1);
    break;
  case 3:
    console.log;
  default:
    console.log("no such statement");
    break;
} */

//ternary operator
/*
 condition ? expression1 : expression 2 

if the condition is true, expression 1 will be executed.
if the condition is false , expression 2 will be executed.

 */

/*let customer = 18;

let reply = customer >= 20 ? " beer give" : "dont give";
console.log(reply);
 */
/* 
let score = 88;
let rankings =
  score > 90
    ? "rankings 1-10"
    : score >= 80
    ? "10-20"
    : score > 70
    ? "30-40 rankings"
    : "c";

console.log(rankings);
 */

/* let player = "scissor";
let player2 = "stone";
let result =
  player === player2
    ? "tie"
    : player === "scissors" && player2 === "stone"
    ? "player  wins"
    : player === "scissor" && player2 === "paper"
    ? "player 2 wins"
    : player === "paper" && player2 === "scissor"
    ? "player 2 wins"
    : " player wins";
console.log(result); */

/* let page18 = prompt("wanna enter");
console.log(page18); */

/*let cus = prompt(" enter something");
if (cus) {
  console.log(cus ?? ("enter something"));
} else {
  console.log("u didnt enter anything");
}
 */

//for loop

/*for (let i = 0; i <= 20; i++) {
  console.log(i);
}
*/
//while loop
/* let v = 1;
while (v <= 22) {
  console.log(v);
  v++;
}
 */
/* //dowhile
let v = 2;
do {
  console.log(v);
  v++;
} while (v <= 22);
 */

//////////////////////function
/* function add(sum1, sum2) {
  return sum1 + sum2;
}
console.log(add(12, 45));

 */

////////////////////////arrayy
/* const myarray = [];
myarray[0] = "sangi";
myarray[1] = "jumba";
myarray[2] = 1;
myarray[3] = true;

console.log(myarray);

//length property
console.log(myarray.length);
console.log(myarray[myarray.length - 1]); // to see last element

myarray.push("hiii");
console.log(myarray); //to add an element, will be added automatically last

myarray.pop();
console.log(myarray); //to delete the last element

myarray.shift();
console.log(myarray); //remove 1st element out

myarray.unshift("sanjay");
console.log(myarray); //add 1st element

let a = myarray.push("blow");
console.log(a);
/*  */
/* let newarray = myarray.slice(1, 3);
console.log(newarray);  */ // for slicing the elements leave only 1

/* let newarray = myarray.splice(1, 3);
console.log(myarray); //vut down elements from 1 itself , from 1 to 3 
 */

/* let newarray = myarray.reverse();
console.log(myarray); */

/* let newarray = myarray.join();
c(sungi);onsole.log(myarray);

const sungi = myarray.concat(newarray);
console.log */

/////////////////////////////MAIN ARRAY EXAMPLE////////////////////
/* 
const loversa = ["vic", "anu", "jk"];
const loversb = ["pavi", "moni", "sneha"];
const friendsa = ["su", "vin", "shin"];
const friendsb = ["chri", "goms", "res"];

const sanjay = [loversa, loversb, friendsa, friendsb];
console.log(sanjay);
const lovers = [loversa, loversb];
const friends = [friendsa, friendsb];
console.log(lovers[0][1]);

const pim = [lovers, friends];
console.log(pim[0][1][2]);
 */

/////////////////////////objects////////////////////////////
/* 
const pav = {
  Boolean: false,
  Number: 300,

  things: {
    pavi: "lover",
    moni: "exx",
  },
  array: ["time", "agaleya", "unaku"],

  action: function () {
/*     //here in object we cant use let, const etc..
    return ` i love my ${this.things.pavi}`;
  },
};
console.log(pav.action());
 */
/* 
const vandi = {
  car: "porche",
  sound: function () {
    return "vroooooom bro";
  },
};
console.log(vandi.sound());

const vaa = Object.create(vandi); //inheritance is the name
console.log(vaa.sound());
vaa.sound = function () {
  return " bloeeee";
};
console.log(vaa.sound());

const sambo = Object.create(vaa);
console.log(sambo.sound());
sambo.sound = function () {
  return "jumbaa";
};
console.log(sambo.sound()); */

const movie = {
  actor: " vj",
  dir: "arm",
  moviename: "kathi",
  music: "arr",
};
/* movie.actress = "trisha";

console.log(Object.values(movie));

//for in loop
for (let sam in movie) {
  console.log(movie[sam]); //for (var key in object) {
  // Code to be executed for each property its the syntax where always square bracket should be used in console.log
}
 */


//destructuring
const { actor, dir, moviename, music } = movie;
console.log(dir); // directly we assign a variable name , here we are making the keys as a variable name and getting output


