// Code Challenge 1: Write a JavaScript function that takes a city name as input and returns the normalized version of the name with an initial capital letter. Use the provided technique to achieve this.

// let userInput = prompt('Please enter a city name: ');
// function city(word) {
//     let firstChar = word.slice(0,1)
//     firstChar= firstChar.toUpperCase() 
//     otherChar = word.slice(1)
//     otherChar = otherChar.toLowerCase()
//     return firstChar + otherChar

// }

// console.log(city(userInput));


// Code Challenge 2: Modify the code from the first challenge to handle city names consisting of multiple words, such as "New Orleans" or "Sault Ste. Marie." Ensure that each word in the city name has its initial letter capitalized.



// Code Challenge 3: Write a function that checks if a given string has any double spaces in it. If double spaces are found, display an alert with the message "Double spaces found!" Use the provided technique for iterating through the string.

function checkDoubleSpaces(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " " && string[i + 1] === " ") {
            alert("Double spaces found!")
        }
    }
}
// console.log(checkDoubleSpaces("hello world! how are you doing  i am good"));


// Code Challenge 4: Create a function that takes a month name as input and abbreviates it to the first three characters if the month name exceeds three characters in length. For example, "November" should be abbreviated to "Nov."

function abbreviateMonth(month) {
    for (var i = 0; i < month.length; i++) {
        console.log(month[i]);
        if (month[i].length > 3) {
            return month[i].slice(0, 3) + "."
        } else {
            return month
        }
    }
}

// console.log(abbreviateMonth(("january")));

// Code Challenge 5: Enhance the code from Challenge 3 to count and display the number of double spaces found in the input string.

function checkDoubleSpaces(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " " && string[i + 1] === " ") {
            alert("Double spaces found!", string[i + 1])
        }
    }
}
// console.log(checkDoubleSpaces("hello world! how are you doing  i am good"));


// Code Challenge 6: Write a function that takes a string as input and returns the number of characters in the string. Use this function to count and display the number of characters in a user-entered string.

function countCharacters(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        count += 1;
    }
    return count;
}
// console.log(countCharacters("hello"));


// Code Challenge 7: Build a program that repeatedly asks the user to enter a city name and then normalizes it with an initial capital letter using the technique described. Allow the user to continue entering city names until they decide to stop.
// function city(word) {
//     let firstChar = word.slice(0,1)
//     firstChar= firstChar.toUpperCase() 
//     otherChar = word.slice(1)
//     otherChar = otherChar.toLowerCase()
//     return firstChar + otherChar

// }
// let userInput;
// do {
//     userInput = prompt('Please enter a city name: ');
//     if (userInput !== null) {
//         console.log(city(userInput));
//     }
// } while (userInput !== null);
 ///   ********************************************************************************************************************************************************


// Challenge 1: Find and Replace the Banned Phrase:
// Write a function that takes a paragraph of text as input and searches for the banned phrase "World War II." If found, replace it with the preferred phrase "the Second World War." Use the indexOf method to find and replace the first instance of the phrase.

// use the indexOf method to find and replace the first instance of the phrase
let text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, World War II with the weird World War II applicability available only to poetry and myth, the essential notion that World War II the good gray wizard can understand  the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his World War II."


// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
                                 // ignore this  works as replace method
// }

// console.log(text);
let newText ;
let firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
    newText =text.replace( /World War II/g ,"The Second World War II")  ;
}

// console.log(newText);



// Challenge 3: Handle Variations in Capitalization:
// Modify the code from Challenge 2 to handle variations in capitalization, such as "world war ii," "World War Ii," or "WORLD WAR II." Ensure that regardless of capitalization, the code replaces all instances with the preferred phrase "the Second World War."

lowerCaseText = text.toLowerCase();
let bannedWord = lowerCaseText.indexOf("world war ii");

if (bannedWord!== -1) {
    newText =text.replace( /World War II/g,"The Second World War II")  ;
}

// console.log(newText);


// Challenge 4: Find and Replace the Last Instance:
// Write a function that takes a sentence as input and finds the index of the last instance of the word "be." Use the lastIndexOf method to find the index of the last occurrence of "be" in the sentence.

// console.log(text.lastIndexOf("be"));


// Challenge 5: Normalize a Sentence:
// Build a program that prompts the user to enter a sentence and then normalizes it by replacing all instances of the word "be" with "is." Use the indexOf and lastIndexOf methods to find and replace all occurrences of "be" with "is."

// let userAns = prompt('Enter your text here:');

// let sentence= userAns.indexOf('be');

// if (sentence!== -1) {
//     sentence = sentence.replace('be', 'is');
// }

// console.log(sentence);



//     NEXT CHAPTER CHALLENGE 88888888888888888888888888888888888888888888888888888888888888888****************************************************************


// Challenge 1: Dice Game Simulation:
// Write a program that simulates a dice game for two players. Players take turns throwing a six-sided die, and the player with the highest total score after a certain number of rounds wins. Implement the game logic, track scores, and declare the winner.

// console.log("Let's Play Dice Game!");

// let players = {
//     player1: { name: "sarfaraz", score: 0 },
//     player2: { name: "fatah", score: 0 },
// }

// function rollDie() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// function playDice(numround) {
//     for (let i = 0; i < numround; i++) {
//         let player1Roll = rollDie();
//         let player2Roll = rollDie();

//         if (player1Roll > player2Roll) {
//             players.player1.score += 1;
//         } else if (player2Roll > player1Roll) {
//             players.player2.score += 1;
//         }
//     }

//     if (players.player1.score > players.player2.score) {
//         console.log(`${players.player1.name} is the winner with a score of ${players.player1.score}!`);
//     } else if (players.player2.score > players.player1.score) {
//         console.log(`${players.player2.name} is the winner with a score of ${players.player2.score}!`);
//     } else {
//         console.log("It's a tie!");
//     }
// }

// playDice(1);


// Challenge 2: Simulate Multiple Die Throws:
// Write a program that simulates multiple die throws (e.g., 10 throws) and displays the results. You can use the function from Challenge 1 to simulate each throw and store the results in an array.


// let players = {
//     player1: { name: "sarfaraz", score: 0 },
//     player2: { name: "fatah", score: 0 },
// }

// function rollDie() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// function playDice(numround) {
//     for (let i = 0; i < numround; i++) {
//         let player1Roll = rollDie();
//         let player2Roll = rollDie();
        

//         if (player1Roll > player2Roll) {
//             players.player1.score += 1;
//             console.log(players.player1.score);
//         } else if (player2Roll > player1Roll) {
//             players.player2.score += 1;
//             console.log(players.player2.score);
//         }
//     }

//     if (players.player1.score > players.player2.score) {
//         console.log(`${players.player1.name} is the winner with a score of ${players.player1.score}!`);
//     } else if (players.player2.score > players.player1.score) {
//         console.log(`${players.player2.name} is the winner with a score of ${players.player2.score}!`);
//     } else {
//         console.log("It's a tie!");
//     }
// }




// Challenge 4: Simulate a Custom Die:
// Modify the function from Challenge 1 to simulate the throw of a custom die with a user-defined number of sides (e.g., 4, 8, 10, or any other number). Allow the user to specify the number of sides and simulate the throw accordingly.

function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function playDiceGame(sides) {
    let player1Roll = rollDie(sides);
    let player2Roll = rollDie(sides);

    console.log(`Player 1 rolled: ${player1Roll}`);
    console.log(`Player 2 rolled: ${player2Roll}`);

    if (player1Roll > player2Roll) {
        console.log("Player 1 wins!");
    } else if (player2Roll > player1Roll) {
        console.log("Player 2 wins!");
    } else {
        console.log("It's a tie!");
    }
}

// playDiceGame(10); // Play with a 10-sided die


// Challenge 3: Calculate Die Throw Probability:
// Write a function that simulates a large number of die throws (e.g., 1,000 throws) and calculates the probability of each outcome (1 through 6) based on the simulation results. Display the probabilities as percentages.


// Challenge 5: Randomize Die Throws for a Game:
// Write a program for a simple dice-based game where two players take turns throwing a six-sided die. Simulate the throws for both players and determine the winner based on the highest roll. Implement the game logic and display the winner.


// function rollDie() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// function playDiceGame() {
//     let player1Roll = rollDie();
//     let player2Roll = rollDie();

//     console.log(`Player 1 rolled: ${player1Roll}`);
//     console.log(`Player 2 rolled: ${player2Roll}`);

//     if (player1Roll > player2Roll) {
//         console.log("Player 1 wins!");
//     } else if (player2Roll > player1Roll) {
//         console.log("Player 2 wins!");
//     } else {
//         console.log("It's a tie!");
//     }
// }

// playDiceGame();


// Problem  write a code which will tell you that how many words are there in the variable 
// Note that the variable will be in camelCase


const findWord = function(word) {

    count =0;
    for (var i =0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase())
        count++;
    }
    return count;
}


// console.log(findWord("oneTwoThreeFourFiveSix"));




/// Reverse a String:
// Write a function that takes a string as input and returns the string reversed.

function reverseStr(str){
    return str.split("").reverse().join("");
}

// console.log(reverseStr("hello"));

// Palindrome Checker:
// Create a function that checks if a given word or phrase is a palindrome (reads the same forwards and backwards).

function checkPalaindrome(str){
    if (str === str.split("").reverse().join("")) { 
        return "yes the string palaindrome !"
        
    }
    else{
        return "no "
    }
}
// console.log(checkPalaindrome("civic"));


// FizzBuzz:
// Write a program that prints the numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz." For numbers which are multiples of both 3 and 5, print "FizzBuzz."



/** 
    for (let i = 1; i <= 100; i++) {
        if (i % 3 ===0 && i % 5 ===0) {
            console.log("FizzBuzz"); 
        }
        else if ((i % 3) === 0 ) {
            console.log("Fizz");
        }
        else if ((i % 5)===0){
            console.log("Buzz");
        }
        else{
        console.log(i);
        }
        
    }

*/


// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).


function check(str, ending){
    return str.endsWith(ending)
}
// console.log(check("hello" , "ldado"))




