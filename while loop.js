"use strict"
//while loop
//NO.45 done
//set the total to be 0 to start with, while the total is 50 or less,
// ask the user to input a number add that number to the total
//  and print the message the total is ...total, stop the loop
//  when the total is over 50.
// total = 0;
// while (total <=50){
//     number=+prompt(`Enter a number`);
//     total += number
// }
// console.log(`the total is: ` + [total])

//no.46 done
//ask the user to enter a number. keep asking until they enter a value over 5 and then display the message
//  "the last number you enter was  [numbre]" and stop the program.
// while(true){
//     let inputNumber =prompt(`Enter a number over 5`);
//         if (inputNumber>5){
//             let lastNumber = inputNumber;
//             console.log(`the last number was: ${lastNumber}`);
//             break
//     }
// }

//no.47 done
//ask the user to enter a number and then enter another number
//add this two number together and then ask if they want to add another number. if they answr "y" ask then to add another number utill they do not answer "y".once the loops has stop display the total.
// let num1 =+prompt(`Enter a number`);
// let num2 =+prompt(`Enter second number`);
// let total = num1 + num2;
// // console.log(total1)
// let question = prompt(`did you want to add another number`);
// while (question==="yes"){
//         let anotherNum =+prompt(`Enter another number`);
//         let question = prompt(`did you want to add another number`);
//         total += anotherNum;
//         if(question=== "");
//         //  break;
//     }
//          console.log(total);

//no.48 done
//ask for the name of somebody the user want to invite for a party, after this display the message "name" has now been invite and add 1 to the count, then ask if they want to invite somebody else, keep repeating utill they no want to invite anyone to the party again and then display how many people that are coming for the party.
// let total = 0;
// let members =prompt(`who are you inviting to your party`);
// console.log(members, "has been invited.");
// members += 1;
// while(true){
//     let question =prompt("do you want to invite another person");
//     if (question==="yes"){
//         let members =prompt(`who are you inviting to your party`);
//         console.log(members, "has been invited.");
//         members += 1;
//     } else if ( question==="no") break
// } console.log(`${members} persons were invited to your party.`)


//no. 49 done
//create a variable called compnum and set the value to 50.ask the user to enter a number. while their guess is not the same as the compunm value, tell  them if their guess is too low or too high and ask them to enter another guess. if they enter the same value as compunm displey the message " well done, took [count] attempts".
// const compNum =70;
// let numberGuess=0;
// while (true){
//     let guess = +prompt("guess a number");
//     numberGuess +=1;
//     if (guess === compNum){
//         console.log(`well done, you took ${numberGuess} attempts`); break;
//     }else if (guess>compNum){
//         console.log("tpp high");
//     }else if (guess<compNum){
//         console.log("too low");
//     }
// }

//no.50 done
//ask the user to enter a number between 10 and 20, if they enter a value under 10 display
// the value "too low" and ask them to try again. if they enter a value above 20, display the value "too high"
// and ask them to try again. keep repeating this until they enter a number between 10 and 20
//  and then display the message " thank you".
// while(ture){
//     let num =+prompt("Enter a number b/w 10 and 20");
//     if (num >10 && num <20){
//         console.log("thank you"); break;
//     }else if (num >20){
//         console.log("Too high");
//         let num =+prompt("Enter a number b/w 10 and 20");
//     }else if (num<10){
//         console.log("Too low");
//         let num =+prompt("Enter a number b/w 10 and 20");
        
//     }
// }

//no.51
//using the song "10 green bottles", display the lines "there are[num]green bottles
//hanging on the wall, [num] green bottle hanging on the wall, and if 1 green bottle should accidentally
//fall", then ask this question "how many green bottle will be hanging on the wall?" if the user answers
// correctly, display the message "there will be [num] of green bottle hanging on the wall", if they answer
// incorrectly, display the message "No try again" until they get the right. when the number of green bottle gets
// down to 0, display the message "there are no more green bottle hanging on the wall".

//(WHILE LOOPS)
//no.1 done
//the code below prints the nnumber from
// 1 to 50. Rewrite the code using a while
// loop to accomplish the same thing.
//
// for(let i = 1; i<51; i=i+1){
//     console.log(i)
// }
// answer
// let i=0;
// while(i<51){
//     console.log(i);
//     i++;
// }

//no.2 done
// (a) write a program that uses a while loop
// (not a for loop) to read through a string
//  and prite the characters of the string
// one by one on a separate line.
// (b) modify the program above to print out
// every second charater of the string.
// (a) done
// let letters;
// let name =prompt(`Enter your name`);
//     let i=0;
//     while(i<name.length){
//         letters=name[i];
//         console.log(letters);
//         i=i+1
//     }
// (b) done
//  modify the program above to print out  every second charater of the string.
// let letters;
// let name =prompt(`Enter your name`);
//     let i=0;
//     while(i<name.length){
//         letters=name[i];
//         console.log(letters);
//         i=i+2
//     }


//no.3 done
// A good program will make sure the data its users enter is valid. write a program that ask the user to enter a weight and converts it from kilograms to pounds. whenever the user enter a weight below 0, the program should tell them that there entry is invalid and then ask them again to enter a weight. use a while loops not if statement.

// while(true){
//     let kilo =+prompt(`Enter a weight`, '');
//     if (!kilo) break;
//     if (kilo<o){
//         console.log(`invalid`);
//         continue
//     }
//     const pound = kilo*2.504;
//     console.log(`${kilo} kg  is: ${ponud} ponud`);
// }

//no.4 done
//write a program that asks the user to enter a password if they enter the right password. the program should tell them they are logged in the system. otherwise, the program should tell them to reenter password again. the user should only get five tries to enter the pasword, after which the progrsm should tell them they are kicked off of the system.
// let password = 1234;
// let digit =+prompt(`Enter your four digit password`);
// if(digit===password){
//     console.log(`you are logged in`);  
// }else{
//     let i=0;
//     while(i<5){
//     let digit2 =+prompt(`Reenter your four digit password`);
//     if (digit2===password){
//         console.log(`you are logged in`); break;
//     }else if(digit2!==password && i===4){
//         console.log(`you are kicked off of the system`);
//     }
//    i++
// } 
// }
//no.05
// write a Program that allow the user to enter any number of text scores. the user indicates they are  done  by entering in a negative number. print how many of the scores are A's(90 or above). also print out the average. 
// let i=1  
// while(true){
//     let number = +prompt(`Enter a text score`);
//     if(number>=90){
//             let score=number;
//             // console.log(score);
//             // i++
//         }else if(number <= 0){
//             break
//         } else{

//         } console.log(score);
//         i=i+1
//  }

//no.6. 
// Modify the higher/lower program so that when there is only one guess left, it says 1 guess, not 1 guesses.

//no.7.
//  Recall that, given a string s, s.index('x') returns the index of the first x in s and an error if there is no x
/*
(a) Write a program that asks the user for a string and a letter. Using a while loop, the
program should print the index of the first occurrence of that letter and a message if the
string does not contain the letter.
(b) Write the above program using a for/break loop instead of a while loop.
*/

/*8. 
 The GCD (greatest common divisor) of two numbers is the largest number that both are
divisible by. For instance, gcd(18, 42) is 6 because the largest number that both 18 and 42
are
divisible by is 6. Write a program that asks the user for two numbers and computes their
gcd.
Shown below is a way to compute the GCD, called Euclid’s Algorithm.
• First compute the remainder of dividing the larger number by the smaller number
• Next, replace the larger number with the smaller number and the smaller number with
the remainder.
• Repeat this process until the smaller number is 0. The GCD is the last value of the larger
number*/
// let i = 0
// while(i<51){
//     console.log(i)
//     i=i+1
// }