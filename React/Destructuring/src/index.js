// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";

import animals, { useAnimals } from "./data";

// console.log(animals);
// const [cat, dog] = animals;
// console.log(cat);

// const { name, sound } = cat;
// const { name: catName, sound: catSound } = cat;
// console.log(catSound);

// const { name = "Boo", sound = "Moo" } = cat;
// console.log(sound);

// const {
//   name,
//   sound,
//   feedingRequirements: { food, water },
// } = cat;

// console.log(feedingRequirements);
// console.log(food);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// console.log(makeSound());

import cars from "./practice";

// const [honda, tesla] = cars;

// const {
//   speedStats: { topSpeed: hondaTopSpeed },
// } = honda;

// const {
//   speedStats: { topSpeed: teslaTopSpeed },
// } = tesla;

// const {
//   coloursByPopularity: [hondaTopColour],
// } = honda;

// const {
//   coloursByPopularity: [teslaTopColour],
// } = tesla;

const [honda, tesla] = cars;
const [
  {
    speedStats: { topSpeed: hondaTopSpeed },
    coloursByPopularity: [hondaTopColour],
  },
  {
    speedStats: { topSpeed: teslaTopSpeed },
    coloursByPopularity: [teslaTopColour],
  },
] = [honda, tesla];

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
