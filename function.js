"use strict"
// No.1 done
// We’ll give you two variables with a boolean value - x and y. Create a function called logicalColors that takes two values x and y with the following logic:
// If x istrue,return the string ‘Red
// If y isfalse, return the string ‘Yellow’
// If x istrue and y isfalse, return the string ‘Blue’
// Otherwise, return the string ‘Purple’
// let x =prompt(`Enter true or false `)
// let y =prompt(`Enter true or false`)
// function logicalColors (x, y){
//     if (x === true){
//         console.log(`Red`);
//     }else if ( y === false){
//         console.log(`yellow`);
//     }else if(x===true && y===false){
//         console.log(`blue`);
//     }else{
//         console.log(`purple`);
//     }
// }
// logicalColors(x, y);


// No.2 done
// max. Write a function called max, which accepts an array of numbers and return the highest value. Do not use the built-in Math.max

// let array=+prompt("Enter a number" );
// function max(){
//     let  i=0;
//     while(true){
//         console.log(math.max(array));
//         i=i+1;
//     }
// } 

//    let val=array[0];




//    for(let i=1; i<array.length; i++){
//     if (selector==="max"){
//         if(array[i]>val){
//             val=array[i];
//         }
//     }
//    }
//    return val;
// console.log(max[42,34,8,13,-9])
// max();


// 3. 
// removeNumbers. In this problem, you’ll be given a string that is a
// combination of letters and numbers. Return a new String that has all of the
// numbers removed, and only contains letters and spaces
// For instance, if you have the string: ‘I W4nt 2 Br3ak Fr33’ return ‘I Wnt Brak Fr’.
// let input = prompt("what is your name");
// function removeNumbers(str){
//     for (let i=0; i<str.length; i++){
//         if(isNaN(str[i])){
//             newstr =input + str[i];
//         }
//         console.log(newstr);
//     }
// }
// removeNumbers()



// 4. 
// onlyEvens. In this problem, you’ll be given an array of integers. Return a new
// array that contains only the even numbers in the original array.
// For instance, if you are given the array [1,2,3, 4, 5, 6], return a new array with the
// values[2,4, 6]
function onlyEvens(array){
    let array=[]
    while(true){
    if( array/2===0){
           let newArray = array;
           console.log(newArray);
        }
    }
}
onlyEvens(1,2,3,4,5,6,7,8,9)