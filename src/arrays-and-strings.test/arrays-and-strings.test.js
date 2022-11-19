'use-strict';

import StringHelper from '../arrays-and-strings/all-unique-characters.js';
import assert from 'node:assert';

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
      const result = StringHelper.allUniqueCharacters('');
      assert.strictEqual(result, true);
    });
    it('should return true for a unique string', function() {
      const result = StringHelper.allUniqueCharacters(allCharacters);
      assert.strictEqual(result, true);
    });
    it('should return false for duplicate characters', function() {
      let test = allCharacters;
      test += 'a';
      const result = StringHelper.allUniqueCharacters(test);
      assert.strictEqual(result, false);
    });
  });
  describe('#allUniqueCharactersNoAdditionalDataStructures', function() {
    it('should return true for an empty string', function() {
      const result = StringHelper.allUniqueCharactersNoDataStructures('');
      assert.strictEqual(result, true);
    });
    it('should return true for a unique string', function() {
      const result = StringHelper.allUniqueCharactersNoDataStructures(
          allCharacters);
      assert.strictEqual(result, true);
    });
    it('should return false for duplicate characters', function() {
      let test = allCharacters;
      test += 'a';
      const result = StringHelper.allUniqueCharactersNoDataStructures(test);
      assert.strictEqual(result, false);
    });
  });
});

