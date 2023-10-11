console.log("connexted");


// do while loop

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);



// adding event listeners to the list
let homeNode = document.getElementById('home');
let aboutNode = document.getElementById('about');
let contactNode = document.getElementById('contact');
let desc = document.getElementsByClassName('desc');

homeNode.addEventListener('click', () => {
    console.log('home clicked');
    let h = document.createElement('h1');
    h.innerHTML = 'this is home';
    // now we append in to the desc element
    desc[0].appendChild(h);


    

});
aboutNode.addEventListener('click', () => {
    let a = document.createElement('p');
    a.textContent = 'this is about loremdsjfashkfjsdkfjsdkfjadlkjflkj';
    aboutNode.appendChild(a);
    console.log( "about clicked");
})

contactNode.addEventListener('click', () => {
    let c = document.createElement('p');
    c.textContent = 'this is contact';
    contactNode.appendChild(c);
    console.log( "contact clicked");
})