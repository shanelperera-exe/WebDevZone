function HouseKeeper(name, yearsOfExperience, cleaningRepertoire) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress...")
    }
}

var houseKeeper1 = new HouseKeeper("Jane", 12, ["bathroom", "lobby", "bedroom"]);