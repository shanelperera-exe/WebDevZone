var nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    return names[Math.floor(Math.random() * names.length)];
}

console.log(whosPaying(nameList) + " is going to buy lunch today!");