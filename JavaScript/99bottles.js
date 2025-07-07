function beerSong () {
    var count = 99;
    while (count >= 1) {
        var bottleWord = "bottles";
        if (count === 1) {
            bottleWord = "bottle";
        }

        var remainingBottles = count - 1;
        var nextBottleWord = "bottles";
        if (remainingBottles === 1) {
            nextBottleWord = "bottle";
        }

        console.log(count + " " + bottleWord + " of beer on the wall, " + count + " " + bottleWord + " of beer.");

        if (remainingBottles === 0) {
            console.log("Take one down and pass it around, no more bottles of beer on the wall.\n");
        } else {
            console.log("Take one down and pass it around, " + remainingBottles + " " + nextBottleWord + " of beer on the wall.\n");
        }

        count--;
    }

    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}

beerSong();
