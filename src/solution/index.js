export class Solution {
  /**
   * @see The numbers in the list are shuffled into random indexes of the array in-place following the algorithm: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
   * @example randomListGenerator(10)
   * returns [3, 10, 6, 5, 2, 4, 9, 1, 8, 7]
   * @param {number} size
   * @returns Returns a list of unique numbers from 1 to the provided size inclusive.
   *
   */
  randomListGenerator(size) {
    // Enforce check on parameter
    if (isNaN(size) || Array.isArray(size)) {
      return NaN;
    }

    // Create list of numbers between 1 and size inclusive.
    let array = [...Array.from(Array(size), (_, x) => x + 1)];

    for (let i = array.length - 1; i > 0; i--) {
      // Get random index value between 0 and length of array.
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const lastIndexValue = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = lastIndexValue;
    }
    return array;
  }
}
