"use strict"
//for loops

// no.35 done
// ask the user to enter their name  and display their name  three times.
// let Name =prompt(`enter your name here`);
// let i = 1;
// while (i<=3){
// console.log(Name);
//  i = i+1;
// }

//no.36 done
//After program 035 so that it will ask the user to enter
//  their name and a number and then display
//their name that number of time.
// let Name = prompt(`enter your name here`);
// let number =+prompt(`enter a number here`);
// let i = 1;
// while (i<=number){
//     console.log(Name);
//     i = i+1
// }

//no.37 done
// ask the user to enter their name and display the
//  letter of their name one by one.
// let letter;
// const name = prompt(`Enter your name`);
// for (i=0; i<name.length; i++){
//     letters = name[i];
//     console.log(letters);
// }

//no.38
//change program 037 to also ask for a number. display
// their name (one letter at a time each line) and repeat
// this for the number of times they entered.
// let letter;
// const name = prompt(`Enter your name`);
// const num =prompt(`Enter a number`)
// for (i=0; i<name.length * num; i++){
//     letters = ($[i] * $[num]);
//     console.log(letters);
// }

//no.39 done
//ask the user to enter a number between 1 and 12
//  and then display the time table for that number.
// const number = parseInt(prompt(`Enter an interger: `));
// for (let i=1; i<=12; i++){
//     const result = i *number;
//     console.log(`${number} * ${i} = ${result}`);
// }

//no.40 done
//ask for a number below 50 and then count down from
//  50 to that number, making sure you show the number
//  they enter in the output.
// let num =+prompt(`Enter a number below 50`);
// let i = 50;
// while(i >= num){
//     console.log(i);
//     i--;
// }

//no.41 done
//ask the user to enter their name and a number. if the
// number is less then 10, then display their name that
// number of time; otherwise display the message "too high"
// three times.
// let Name = prompt(`enter your name`);
// let input =+prompt(`enter a number`);
// if (input<10){
//     let i=1;
// while (i<=input){
//      console.log(Name);
//     i = i++;
// }
// }else{
//     let message=(`too high`);
//     let i=1;
//     while(i<=3){
//         console.log(message);
//         i=i++;
//     }
// }

//no.42 done
//set variable called total to 0. ask the user to enter
// five number and after  each input ask him if they want
//  that number included. if they do. then add the number
//  to the total. if they do not want it included dont add to the
// total. after they have entered all five number ,display the total.

// let total =0;
// for( let i=0; i<5; i++){
//     let number =+prompt(`enter number`);
//     let question=prompt(`did you want that number included?`);
//     if(question === "yes"){
//         total=total + number;
//     } else{
//     } 
// }console.log(total)

//no.43
//ask which direction the user wants to count (up or down),
//if they select up, then ask them for the top number then count from 1 to that number, if they select down
//ask them to enter a number below 20 then count down from 20 to that number, if they enter something
// other than up and down display the message " i don't understand".
// let direction =prompt(`which direction did you want to count up or down`);
// if (up){
//     let number =+prompt(`enter the top number`);
//     for (let i=1; i<=number; i++){
//         continue
//     }
// }else if (down){
//     let secnumber = +prompt(`enter a number below 20`);
//     for (let i=20; i<=secnumber; i--){
//         continue
//     }
// }else {
//     console.log(`i don't understand`)
// }

//no.44 done
// ask how many people the user want to invite to a party. if they enter a number
//  below 10, ask for the names and after each name display "[name} has been invited".
//  if they enter a number which is 10 or higher, display the message "too many people".
// let number = +prompt(`how many peolpe did you want to invite for the party`);
// let i = 1;
// while(i<=number){
//    if (number<10){ 
//     let Name =prompt(`what are their names`);
//     console.log(Name + " " +`has been invited.`);
//      i++;
// } else{ 
//      console.log(`Too many people`); 
// }
// } 

//  for loops

//no.1 done
//write a prograthem that ask the user to enter a length in centimeter.if the user enter a negative length, the program should tell the user that the entry is invalid. otherwise, the program should convert the length to inches and print out the result. There are 2.54 centimeter in an inch.
// let  length=prompt(`enter a length in centimeter`);
// if (length<0){
//     console.log(`the entry is invalid.`);
// } else{
// let result=length*2.54;
// console.log(result);
// }

//no.2
// ask the user to enter a temperature. Then ask them what units, cesius or fahrenheit, the temperature is in. your program should convert the  temperature to the other unit. the conversions are F=95C + 32, C=59(F-32).
// let f = fahrenheit;
// let c = cesius
// let temperature =+prompt(`Enter a temperature`);
// let question =prompt(`what unit f or c`);
// if (question===f){
//     console.log([95(C+32)]*temperature);
// }else if(question===c){
//     console.log([59(f-32)]*temperature)
// }else{
//     console.log(`incorrect`)
// }

//no.3 done
// Ask the user to enter a temperature in Celsius. The program should print a message based on
// the temperature:
// • If the temperature is less than -273.15, print that the temperature is invalid because it is
// below absolute zero.
// • If it is exactly -273.15, print that the temperature is absolute 0.
// • If the temperature is between -273.15 and 0, print that the temperature is below freezing. •
// If it is 0, print that the temperature is at the freezing point.
// • If it is between 0 and 100, print that the temperature is in the normal range.
// • If it is 100, print that the temperature is at the boiling point.
// • If it is above 100, print that the temperature is above the boiling point.
// let temperature =+prompt(`Enter a temperature in celsius`);
// if (temperature<-273.15){
//     console.log(`temperature is absolute 0`)
// }else if(temperature===273.15 && temperature<0){
//         console.log(`temperature is below freezing`);
// }else if(temperature===0){
//     console.log(`temperature is at the freezing point`);
// }else if (temperature>=0 && temperature<100){
//     console.log(`temperature is in the normal range`);
// }else if(temperature===100){
//     console.log(`temperature is at the boiling point`);
// }else if (temperature>100){
//     console.log(`temperature is above the boiling point`)
// }
//no.4 done
//Write a program that asks the user how many credits they have taken. If they have taken 23 or less, print that the student is a freshman. If they have taken between 24 and 53, print that they are a sophomore. The range for juniors is 54 to 83, and for seniors it is 84 and over. 
// let credit =+prompt(`how many credit have you taken`);
// if(credit<=23){
//     console.log(`the student is a freshman`);
// }else if(credit>=24 && credit<54){
//     console.log(`the student are sophomore.`);
// }else if(credit>=54 && credit<=84){
//     console.log(`the student is a junior`);
// }else if (credit>83){
//     console.log(`this is a senior student`);
// }

//no.5 done
// (Optional) Generate a random number between 1 and 10. Ask the user to guess the number and print a message based on whether they get it right or not.
// for (let i=1; i<=10; i++){
//     let random= Math.floor(Math.random()*10);
//     let number = +prompt(`Guess a number, `);
//     if(number===random){
//         console.log(`question${i}:the answer is ${random} correct answer `);
//     }else
//     console.log(`question${i}: the answer is ${random} incorrect answer `);
// }

//no.6 done
// A store charges $12 per item if you buy less than 10 items. If you buy between 10 and 99 items, the cost is $10 per item. If you buy 100 or more items, the cost is $7 per item. Write a program that asks the user how many items they are buying and prints the total cost.
// let item = +prompt(`how many item are you buying`);
// if (item<10){
//     let price1 =item *12
//     console.log(`total price of item = $${price1}`);
// }else if(item >=10 && item<101){
//     let price2=item*10;
//     console.log(`total price of item = $${price2}`);
// }else if(item>100){
//     let price3= item*7;
//     console.log(`total price of item = $${price3}`)
// }

//no.7. done
// Write a program that asks the user for two numbers and prints Close if the numbers are within .001 of each other and Not close otherwise. 
// let number1 =+prompt(`Enter a number`);
// let number2 = +prompt(`Enter another number`);
// if (number1-number2===001){
//     console.log(`Close`)
// }else{

// }


//no.8 done
// A year is a leap year if it is divisible by 4, except that years divisible by 100 are not leap years unless they are also divisible by 400. Write a program that asks the user for a year and prints out whether it is a leap year or not.
// let year =prompt(`Enter a year`);
//         if( year %400 ===0){
//                 console.log(`leap year`)
//         }else if(year %4===0){
//                 console.log(`leap year`);
//         }else {
//                 console.log(`not a leap year`)
//         }
//no.9 done
// Write a program that asks the user to enter a number and prints out all the divisors of that number. [Hint: the % operator is used to tell if a number is divisible by something]
// let number =+prompt("Enter a number");
// for (let i=0; i<number; i++){
//     if (number% i === 0){
//         let divisor = i;
//         console.log(divisor, "is the divisor 0f", number)
//     }
// }

//no.10 done
// Write a multiplication game program for kids. The program should give the player ten randomly generated multiplication questions to do. After each, the program should tell them whether they got it right or wrong and what the correct answer is. Question 1: 3 x 4 = 12 Right! Question 2: 8 x 6 = 44 Wrong. The answer is 48. ... ... Question 10: 7 x 7 = 49 Right.
// for (let i=1; i<=12; i++){
// let random1 =Math.floor(Math.random()*12);
// let random2 =Math.floor(Math.random()*12);
// let answer = random1*random2;
// let question =+prompt(`question${i}: ${random1}*${random2}= `); 
// if (answer === question){
//     console.log(`question ${i}:${random1}*${random2} = ${answer} Right`);
// }else{
//     console.log(`question ${i}:${random1}*${random2}=${question} wrong,5 the right answer is ${answer}`);
// }
// }

//no.11 done
// Write a program that asks the user for an hour between 1 and 12, asks them to enter am or pm, and asks them how many hours into the future they want to go. Print out what the hour will be that many hours into the future, printing am or pm as appropriate. An example is shown below. Enter hour: 8 am (1) or pm (2)? 1 How many hours ahead? 5 New hour: 1 pm.
// let hour1 =+prompt(`enter an hour b/w 1 & 12`);
// let time = prompt(`it is am or pm`);
// let hour2 =+prompt(`how many hour into the future will you go`);
// let hour =hour1+hour2;
// if (hour>=12 && time===am){
//     console.log(hour + `pm`);
// }else if(hour<12 && time===am){
//     console.log(hour+`am`)
// }

// no.12. 
// A jar of Halloween candy contains an unknown amount of candy and if you can guess exactly how much candy is in the bowl, then you win all the candy. You ask the person in charge the following: If the candy is divided evenly among 5 people, how many pieces would be left over? The answer is 2 pieces. You then ask about dividing the candy evenly among 6 people, and the amount left over is 3 pieces. Finally, you ask about dividing the candy evenly among 7 people, and the amount left over is 2 pieces. By looking at the bowl, you can tell that there are less than 200 pieces. Write a program to determine how many pieces are in the bowl. 
// let candy;
// let question1 =prompt("how many candy are in the jar?");
// if (question1){
//     let question2 =prompt("if the candy is vidided among 5 persons  how many candy will be left");
//     // let answer==="2";
//     if( question2===2){
//         let question3 =prompt("if the candy is divided among 6 how many candy will be left");
//         if(question3===3){
//             let question4 =prompt("if candy is divided among 7 persons how many candy will be left");
//         }else{
//             console.log(candy)
//         }
//     }

// }





// no.13.
//  Write a program that lets the user play Rock-Paper-Scissors against the computer. There should be five rounds, and after those five rounds, your program should print out who won and lost or that there is a tie
