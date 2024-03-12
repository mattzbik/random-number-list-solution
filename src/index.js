import { Solution } from './solution/index.js';

const s = new Solution();
const list = s.randomListGenerator(10000);
// Prints first 100 items from list.
console.log(list);
// Will print all 10000 items from list.
console.dir(list, { maxArrayLength: null });
