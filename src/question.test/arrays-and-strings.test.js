'use-strict';

import {ArraysAndStrings} from '../question/arrays-and-strings.js';
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
    it('should return true for empty string', function() {
      const result = arraysAndStrings.allUniqueCharacters('');
      assert.strictEqual(result, true);
    });
    it('should return true for unique string', function() {
      const result = arraysAndStrings.allUniqueCharacters(allCharacters);
      assert.strictEqual(result, true);
    });
    it('should return false for duplicate char', function() {
      let test = allCharacters;
      test += 'a';
      const result = arraysAndStrings.allUniqueCharacters(test);
      assert.strictEqual(result, false);
    });
  });
  describe('#allUniqueCharactersNoAdditionalDataStructures', function() {
    it('should return true for empty string', function() {
      const result = arraysAndStrings.allUniqueCharactersNoAdditionalDataStructures('');
      assert.strictEqual(result, true);
    });
    it('should return true for unique string', function() {
      const result = arraysAndStrings.allUniqueCharactersNoAdditionalDataStructures(allCharacters);
      assert.strictEqual(result, true);
    });
    it('should return false for duplicate char', function() {
      let test = allCharacters;
      test += 'a';
      const result = arraysAndStrings.allUniqueCharactersNoAdditionalDataStructures(test);
      assert.strictEqual(result, false);
    });
  });
});

