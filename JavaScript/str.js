// String concatination
var message = "Hello";
var yourName = "John";
alert(message + " " + yourName)


// String Length
var name = "Max Verstappen";
name.length;

// Exercise 1
var text = prompt("Enter text: ");
var currentChars = text.length;
var remainingChars = 140 - currentChars;
alert("You have written " + currentChars + " characters." + remainingChars + " characters remaining.")


// String Slicing
var str = "Scuderia Ferrari"
str.slice(0, 8);

// Exercise 1 cont.
var text = prompt("Enter text: ").slice(0, 140);
alert(text);


// Change String Casing
var word = "tree";
word.toUpperCase();
word.toLowerCase();

// Exercise 2
var name = prompt("What is your name? ");
alert("Hello, " + name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase());