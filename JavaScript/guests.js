var guestList = ["Lando", "Oscar", "Niko", "Lewis", "Max", "Charles", "George", "Alex", "Yuki"];

var guestName = prompt("What's your name?");

if (guestList.includes(guestName)) {
    alert("Welcome");
}
else {
    alert("Soory, Maybe next time.");
}