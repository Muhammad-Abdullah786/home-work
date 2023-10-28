console.log("connexted");


// do while loop

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);



// // adding event listeners to the list
// let homeNode = document.getElementById('home');
// let aboutNode = document.getElementById('about');
// let contactNode = document.getElementById('contact');
// let desc = document.getElementsByClassName('desc');

// homeNode.addEventListener('click', () => {
//     console.log('home clicked');
//     let h = document.createElement('h1');
//     h.innerHTML = 'this is home';
//     // now we append in to the desc element
//     desc[0].appendChild(h);


    

// });
// aboutNode.addEventListener('click', () => {
//     let a = document.createElement('p');
//     a.textContent = 'this is about loremdsjfashkfjsdkfjsdkfjadlkjflkj';
//     aboutNode.appendChild(a);
//     console.log( "about clicked");
// })

// contactNode.addEventListener('click', () => {
//     let c = document.createElement('p');
//     c.textContent = 'this is contact';
//     contactNode.appendChild(c);
//     console.log( "contact clicked");
// })

// recursion

// var count = 0
// function recursion(){
//     count ++
//     if (count === 30) {
//         return // if the c
//     }

//     console.log(count * 2); // what you want to do? here i amd multiplying 
//     recursion() // recursive call 
// }
// recursion() // calling the function normally




// function hello() {
//   let a ='eawwass' 
//   console.log(a)
// }
// console.log(hello());

function expandLoris() {
   var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
  document.getElementById("slowLoris").innerHTML = expandedParagraph;
}



// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.
// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

function uniqueChars(str) {
  var chars = str.split("");
    var uniqueChars = true;
    for (var i = 0; i < chars.length; i++) {
        for (var j = i + 1; j < chars.length; j++) {
            if (chars[i] === chars[j]) {
                uniqueChars = false;
            }
        }
    } 
    return uniqueChars;
  }
  console.log(uniqueChars("abcdef"));








