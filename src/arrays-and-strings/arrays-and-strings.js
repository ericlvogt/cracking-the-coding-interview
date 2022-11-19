'use-strict';

/** Chapter 1 Arrays and Strings */
export class ArraysAndStrings {
  /**
   * 1.1
   * Implement an algorithm to determine if a string has all unique
   * characters. What if you cannot use additional data structures?
   *
   * First attempt use a unique character array to keep track of values
   * already checked
   *
   * O(n) since we go through the list once assuming O(1) runtime
   * for includes, charAt, and push
   * @method
   * @param {string} value
   * @returns
   */
  allUniqueCharacters(value) {
    const uniqueCharacters = [];
    for (let i = 0; i < value.length; i++) {
      const character = value.charAt(i);
      if (uniqueCharacters.includes(character)) {
        return false;
      } else {
        uniqueCharacters.push(character);
      }
    }
    return true;
  };

  /**
   * 1.1
   * Implement an algorithm to determine if a string has all unique
   * characters. What if you cannot use additional data structures?
   *
   * Second attempt don't use an additional data structure
   *
   * O(n^2) looping through the value for every character in string
   * @method
   * @param {string} value
   * @returns
   */
  allUniqueCharactersNoDataStructures(value) {
    // don't need to run for the last index
    for (let i = 0; i < value.length - 1; i++) {
      // don't need to run for values already compared
      for (let j = i + 1; j < value.length; j++) {
        if (value.charAt(j) === value.charAt(i)) {
          return false;
        }
      }
    }
    return true;
  };
}
