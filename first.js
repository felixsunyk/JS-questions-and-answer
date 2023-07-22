// “usestrict”

//no.11
//task the user to enter a number over 100 and then enter a number under 10 and tell them how many times the smaller number goes into the larger number in a user-friendly format.
// let largerNumber = +prompt("enter a number over 100");
// let smallerNumber = +prompt("enter a number under 10");
// alert(" the smallerNumber goes into the largerNumber: " + largerNumber/smallerNumber + " times")

//no.26
// pig latin takes the first consonant of a word, moved
// it to the end of the word and adds on an "ay". if a
//  word begins with a vowel you just add a "way" to the
//  end. for example, pig becomes igpay, banana becomes
// ananabay, and aadvark becomes aadvarkway. create a
//  program that will ask the user to enter a word and
// change it into pig latin. make sure the new word is
// display in lower case.
// let piglatin;
// volwels=['a', 'e', 'i', 'o', 'u',]
// word =prompt(`Enter a word:`);
// if (word [0] in word){
//     console.log(word +'ay')
// }else{
//     last = word[0] + 'way';
//     console.log(word[1] + last)
// }
// piglatin();

//lf-statement leason
// let age = +prompt(`enter your age:`);
// if (age >=16){
//     alert(` you can enrol in a driving school`);
// }
// //range
// if (age >== 18 && age <== 30){
//     alert(`you can join the army`)
// }

// non-strict equality
// alert(2>1);
// alert(2==1);
// alert(2!=1);
// alert(`2`>1);
// alert(0==false);
// alert("" ===false);
// alert(null== undefined)
// alert(null===undefined)
// alert(null==`\n0\n`);

//if-else statement
// let president = prompt(`who is nigeria president`);
// if ( president===`buhari`){
//     alert(correct)
// }else{
//     alert("not correct")
// }

//conditional oparator (?)
// let accessallowed;
// if(age >==18){
//     accessallowed =true;
// }else{
//     (accessallowed=false)
// }

// switch-statement
// let year = +prompt(`how many year have you spent here`)
// if (year === 1){
// alert(`first year student`);
// } else if(year ===  2){
//     alert(`2rd year student`);
// }else if (year === 3){
//     alert(`third year student`);
// }else if(year === 4){
//     alert(`final year student`);
// }else
// alert(`you are not a student`);

// let year =+prompt(`how many year have you spent here`);
// switch(year){
//     case 1:
//         alert(`first year`)
//         brack;
//     case 2:
//         alert(`2nd year`)
//         brack;
//     case 3:
//         alert(`3rd year`)
//         brack;
//     case 4:
//         alert(`final year student`)
//         brack;
//     default:
//         alert(`you are not a student`)
// }

// loops
// while loops
// while(CSSConditionRule)
// let myName = prompt(`your name`);
// let i=1
// while(i<=20){
//     console.log(myName +i)
//     i++;
// }
// for loops
// let name = (`felix`)
// for(let i=0; i<5; i++){
//     console.log(`${name}`)
// }

//  while loops

// [1,2]. foreach(alert)
// alert(`there will be an error`)

// functions
//functions are lines of code that allow you to reuse codes you have writen befor.
// function greet(name){
//     console.log((`hello ${name}`))
// }
// greet("felix");

// function printMessage(messageString){
//     console.log(messageString)
// }
// printMessage(`welcome`)
// function printMessage(){
//    let message = `welcome to frontend development`
//    console.log(message)
// }

// global variable: this are variable that are declared outside a function
// local variable: this are variable that are ddeclared inside the function.
// let message = `hello`;
// function showMessage(){
//     message="hi";
//     console.log(message);
// }
// showMessage();
// console.log(message);
// function that cal avarage of a number

//function decleration
// function average(10){
//     let i=0;
//     for( let i=1; i<=10; i++){
//         sun =sun+1;
//     }
//     const result = sum/10;
//     return result;
// }
// let age = prompt('How old are you?', 100);
// alert(`You are ${age} years old!`); // You are 100 years old!
// let test = prompt("Test", ''); // <-- for IE
// let test = prompt("Test");
// let isBoss = confirm("Are you the boss?");
// alert( isBoss );
//  arrow function
// const average(n)=>{
//     let i=0;
//     for( let i=1; i<=10; i++){
//         sun =sun+1;
//     }
//     const result = sum/10;
//     return result;
// }
// const age =(birthyear)=>2023-birthyear

// let age = prompt('age?', 18);
// let message = (age < 3) ? 'Hi, baby!' :
// (age < 18) ? 'Hello!' :
// (age < 100) ? 'Greetings!' :
// 'What an unusual age!';
// alert( !message );

// alert( !!"" );
// alert( !!"non-empty string" );

// if ("0") {
//     alert( 'Hello' );
//     }

// alert(!!( 1 || 0 )); // 1 (1 is truthy)
// alert( alert(1) || 2 || alert(3));
// alert( alert(1) && alert(2) );
// alert( null || 2 && 3 || 4 );
// if (-1 || 0) alert( 'first' );

// let i = 1;
// while (i<11) { // when i becomes 0, the condition becomes falsy, and the loop stops
// alert( i );
// i++;
// }

// let database =[
//     {
//         surname: `sunday`,
//         password: `felixk`
//     }
// ]
// let newsFeed =[
//     {
//     name:`eric`,
//     timeline : `so tired from all that learing! `
// },
// {
//     firstName: `felix`,
//     timeline: `javascript is soooo cool`
// },
// ]
// let userN=prompt(`enter your username`);
// let userp=prompt(`enter you password`);
// function signIn(user, pass){
//     if( userN===database[0].userName && userP === database[0].password){
//         console.log(newsFeed);
//     }else{
//         alert(`sorry, wrong username and password`);
//     }
// }
// let i = 0;
// do {
// alert( i );
// i++;
// } while (i < 3);
// let sum = 0;
// while (true) {
// let value = +prompt("Enter a number", '');
// if (!value) break; // (*)
// sum += value;
// }
// alert( 'Sum: ' + sum );

// for (let i=0; i<=20; i++){
//     if(i % 2 === 0) continue
//     console.log(i)
// }
// for (let i=0; i<=20; i++){
//     if(i % 2)
//     console.log(i)
// }
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, '');
//     // what if I want to exit from here to Done (below)?
//     }
//     }
//     alert('Done!');
// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, '');
//     // if an empty string or canceled, then break out of both loops
//     if (!input) break outer; // (*)
//     // do something with the value...
//     }
//     }
//     alert('Done!');
// for (let i = 0; i < 5; ++i) alert( i );
// for (let i = 0; i < 5; i++) alert( i );
// let i=0;
// while(i<=10){
//     if(i % 2 === 0) continue;
//     alert(i)
//     i++
// }

// / const age =(birthyear)=>2023-birthyear

// let age = prompt('age?', 18);
// let message = (age < 3) ? 'Hi, baby!' :
// (age < 18) ? 'Hello!' :
// (age < 100) ? 'Greetings!' :
// 'What an unusual age!';
// alert( !message );

// objects
// an objects is a collection of one are more key value pains of data enclosed in curly .
// with object we can define our own type of data(data type).
// enpty Object
// let user = new Object(); or
// let user = {}

// let userinfo = {name:`felix`, location:`hp`, gender:`male`}
// console.log(userinfo.name);
// (userinfo.location);
// (userinfo.gender);

// const car ={'brand name': toyotal, model:"corolla sport", your:2017}

// let user={};
// user[`likes fruet`] = true;
// console.log(user);
// user[`name`]= `felix`;
// console.log(user);
// user[`age`] =19;
// user.location=`lagos`;
// console.log(user);

// let user ={ name:`felix`, age:30}
// let key=prompt(`what did you want to know about the user?`);
// alert(user[key]);
// console.log(user[name]);
// alert(user[age]);
// let location=prompt(`your city`);
// user[`city`]=location;
// console.log(user[location])
// function createUser(name, age, gender,location){
//         return{name:name, age:age, gender:gender, location:location}
// }

// function Hotel(name, location) {
//         this.name = name;
//         this.location = location;
// }
// let hotel = new Hotel(`Novatel`, `lagos`);
// // let hotel= new Hotel(`humg` `ph`);
// console.log(hotel);

// question
// let myCar = {"brand name":'toyotal', moder:'camry', year:2017, condition: 'New'}
// for (let k in myCar){
//         console.log(k + ': ' + myCar[k]);
// }
// console.log(`${k} : ${myCar[k]}`)

// function car(brandName, model, year, condition){
// this.brandName = brandName;
// this.model=model;
// this.year = year;
// this.condition =condition;
// }
// let first = newCar(`bmw`, `x7m`, 2023, `new`,);
// let second = newCar(`honda`, `civic`, 2020, `used`);

// cuntrys code
// let codes ={
//     "+49":" germany",
//     "+41": "switzerland",
//     "+44": "great britain",
//     "+1": "usa",
//     "+234": "Nigeria",
// };
// for (let code in codes){
//     alert(code);
// }
// let width =`100px`;
// let newWidth=(`${parseInt(width) + parseInt(`15px`)}px`);

// let str = "hello";
// str.text = 5;
// alert(str.text);

// let sum = 0.1 + 0.2;
// alert(sum.toFixed(1))

// array method

//  group A: 70 upward
// let distintion = score.filter(function(item)){
//     return (item) >==70
// }
// let gradde A

// let score = [80,51, 49, 64, 71];
// let distintion = score.filter((elem, i) => i !==0 && elem >= 70)

// Map:
// map: map help you to add, multilpy, divide and subtract numbers
// let score = [80,51, 49, 64, 71];
// let newscore = score.map( item =>item*2);
// console.log(newscore);

// let numbers1 = [45, 4, 9, 16, 25];
// let numbers2 = numbers1.map(item=>item/2);
// alert(numbers2);

// const cities = ["londom", "Miami", "linz", "vienie", "bacelonia", "paris"]
// const citieswithL = cities.filter(city => city[0]==="L"){
//     console.log(citiewithL)
// }

// sort: sort arrange the numbers from lowers to highers
// const value =[ 14,3,5,1,21,22]
// value.sort(function(a,b){
//     if (a >b) return 1
//     if (a<b) return -1
//     if (a===b) return 0
// })

// best way

//     const value =[ 14,3,5,1,21,22]
// value.sort((a,b)=>a-b)
// console.log(value)

// Array
// let arr = ["jazz", "blues"];
// arr.push("rock-n-roll");
// arr[1] ="classics";
// let x=arr.shift();
// arr.unshift("rap", "reggae");
// alert(arr);

// let arr =["a", "b"];
// arr.push(function(){
//     alert(this);
// })
// arr[2]();

// const array =[
//     {
//         username: "John",
//         team: "red",
//         score: 5,
//         items:["ball", "block", "pen"]

//     }
// ]
// let newarray= array+!
// console.log(newarray[0])

// questions
// how do will use map to whrite the squrel of a number

// let users =[
//     {name:"mike", location:"ph", gender:"male"}
//     {name:"felix", location:"ph", gender:"male"}
//     {name:"tobi", location:"ph", gender:"male"}
// ];
// users.forEach(item =>{connsole.log(item.name + "!")})

// let number =[2,4.6,8,9,5,4];
// let squar =number.map(item => item**2);
// console.log(squal)

// let value=[20,40,21,70,41,68];
// let A = value.filter(item =>{return (item >==70))}

// let value=[20,40,21,70,41,68];
// let A = value.filter(item =>{
//     return (item >=70))
// };

// let arr = [5,3,8,1]
// const fitterRanger = (array,a,b)=>{
//     array= array.filter(num=>num>a && num<=b)
// }

// let arr = [5,3,8,1]
// const fitterRanger = (array,a,b)=>{
//     let filterArray= array.filter(num=>num>a && num<=b
//         return filterArray);
// }

// take home
// we have an array of string arr. we do like to have  sorted copy of it, but keep the original array unmodified.
// let array = ["HTML", "JAVASCRIPT", "CSS"];
// const sortedCopy = (arr) => {
//     let copy = arr.slice(0);
//     copy.sort();
//     console.log('The array is now sorted',copy)
// };
// sortedCopy(array)

// spread operator & rest operator

// arrow function
let numarray =[1,2,3,4,5,6,7,8,9,10]
const evenArray=(array)=>{
let newArray = []
for(even in array){
    if (even % 2===0){
        newArray.push(+even)
    }
}  return newArray
}
evenArray(numarray)

// arrow function
// let numArray =[1,2,3,4,5,6,7,8,9,10]
// const evenArray=(array)=>{
//     let evenArray = array.filter(num => num % 2 ===0);
//     return evenArray;
// }
// evenArray(numArray)