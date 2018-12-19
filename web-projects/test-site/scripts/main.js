// var myHeading=document.querySelector('h1');
// myHeading.textContent='Hello world!';
// alert("Hello");
// /*
// Everything in between this is a comment
// */
// //this is a comment
// var icecream = 'chocolate';
// if (icecream === 'chocolate') {
//     alert('Yay! I love choco');
// }
// else {
//     alert("I hate choco");
// }
// alert(multiply(2,3));

// document.querySelector('html').onclick = function() {
//     alert('stop f**king around');
// }

// function multiply(num1,num2) {
//     return num1*num2;
// }


// var myImage = document.querySelector('img');
// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if (mySrc === 'images/prestige.jpg') {
//         myImage.setAttribute('src','images/venkat_eiffle.jpg');
//     }
//     else {
//         myImage.setAttribute('src','images/prestige.jpg');
//     }
// }
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Enter your username');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}