// var generateName = require('sillyname');

import generateName from 'sillyname';
import {randomSuperhero} from 'superheroes';

const sillyName = generateName();
console.log(`My name is ${sillyName}.`);

console.log(`I am ${randomSuperhero()}!`);