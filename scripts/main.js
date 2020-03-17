let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myHeading.textContent = 'Hello World!';

let myVariable = 'Bob';

myVariable = 'Steve';

console.log('hi ' + myVariable);

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

multiply(4, 7);

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/dog.jpg') {
        myImage.setAttribute('src', 'images/dog2.jpg');
    } else {
        myImage.setAttribute('src', 'images/dog.jpg');
    }
}



function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName == null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Dog is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Dog is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}