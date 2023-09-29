console.log("connexted");


// do while loop

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);
function generatePassword(len){
    let password ="";
    let charSet = "qwertyuioplkjhgfdsazxcvbnmAZXCVBNMLKJDGHFQWERTYUIO!@#$%^~&*";
    for (let i = 0; i<charSet.length; i++) {
        let set = charSet[Math.floor(Math.random()*charSet.length)];// pixk random characters from charset  
        let ranIndex = Math.floor(Math.random() * set.length);
        password += 
    }
}