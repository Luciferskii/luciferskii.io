/*
document.querySelector('html').onclick = function() {
	var num1 = Math.floor(Math.random() * 10)
	var num2 = Math.floor(Math.random() * 10)
	var result = num1 * num2
	var result2 = num1 + "*" + num2 + "=" + result
	alert(result2)
}
*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test.png') {
      myImage.setAttribute ('src','images/test2.jpeg');
    } else {
      myImage.setAttribute ('src','images/test.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
