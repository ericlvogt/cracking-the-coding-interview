'use-strict';

import {ArraysAndStrings} from '../arrays-and-strings/arrays-and-strings.js';
import assert from 'node:assert';

const arraysAndStrings = new ArraysAndStrings();

const getAllCharacters = () => {
  let result = '';
  for ( let i = 32; i <= 126; i++ ) {
    result += String.fromCharCode( i );
  }
  return result;
};

const allCharacters = getAllCharacters();

describe('ArraysAndStrings', function() {
  describe('#allUniqueCharacters', function() {
    it('should return true for an empty string', function() {
      const result = arraysAndStrings.allUniqueCharacters('');
      assert.strictEqual(result, true);
    });
    it('should return true for a unique string', function() {
      const result = arraysAndStrings.allUniqueCharacters(allCharacters);
      assert.strictEqual(result, true);
    });
    it('should return false for duplicate characters', function() {
      let test = allCharacters;
      test += 'a';
      const result = arraysAndStrings.allUniqueCharacters(test);
      assert.strictEqual(result, false);
    });
  });
  describe('#allUniqueCharactersNoAdditionalDataStructures', function() {
    it('should return true for an empty string', function() {
      const result = arraysAndStrings.allUniqueCharactersNoDataStructures('');
      assert.strictEqual(result, true);
    });
    it('should return true for a unique string', function() {
      const result = arraysAndStrings.allUniqueCharactersNoDataStructures(
          allCharacters);
      assert.strictEqual(result, true);
    });
    it('should return false for duplicate characters', function() {
      let test = allCharacters;
      test += 'a';
      const result = arraysAndStrings.allUniqueCharactersNoDataStructures(test);
      assert.strictEqual(result, false);
    });
  });
});

