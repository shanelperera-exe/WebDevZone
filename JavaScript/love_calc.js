function getRandomNum(max) {
    return Math.floor(Math.random() * max) + 1;
}

var maxPercentage = 100;

var name1 = prompt("Enter name 1 ");
var name2 = prompt("Enter name 2 ");

var yourLoveScore = getRandomNum(maxPercentage);

if (yourLoveScore > 75) {
    alert(name1.slice(0, 1).toUpperCase() + name1.slice(1, name1.length).toLowerCase() + "❤️" + 
    name2.slice(0, 1).toUpperCase() + name2.slice(1, name2.length).toLowerCase() + " : " + yourLoveScore + 
     "%. You love each other like Kanye loves Kanye.");
}

if (yourLoveScore > 30 && yourLoveScore <= 70) {
    alert(name1.slice(0, 1).toUpperCase() + name1.slice(1, name1.length).toLowerCase() + "❤️" + 
    name2.slice(0, 1).toUpperCase() + name2.slice(1, name2.length).toLowerCase() + " : " + yourLoveScore + 
     "%.");
}


if (yourLoveScore <= 30){
    alert(name1.slice(0, 1).toUpperCase() + name1.slice(1, name1.length).toLowerCase() + "❤️" + 
    name2.slice(0, 1).toUpperCase() + name2.slice(1, name2.length).toLowerCase() + " : " + yourLoveScore + 
     "%. You go together like oil and water.");
}


