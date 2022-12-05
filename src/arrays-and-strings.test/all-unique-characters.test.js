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

describe('ArraysAndStrings', () => {
  describe('#allUniqueCharacters', () => {
    it('should return true for an empty string', () => {
      const result = StringHelper.allUniqueCharacters('');
      assert.strictEqual(result, true);
    });
    it('should return true for a unique string', () => {
      const result = StringHelper.allUniqueCharacters(allCharacters);
      assert.strictEqual(result, true);
    });
    it('should return false for duplicate characters', () => {
      let test = allCharacters;
      test += 'a';
      const result = StringHelper.allUniqueCharacters(test);
      assert.strictEqual(result, false);
    });
  });
  describe('#allUniqueCharactersNoAdditionalDataStructures', () => {
    it('should return true for an empty string', () => {
      const result = StringHelper.allUniqueCharactersNoDataStructures('');
      assert.strictEqual(result, true);
    });
    it('should return true for a unique string', () => {
      const result = StringHelper.allUniqueCharactersNoDataStructures(
          allCharacters);
      assert.strictEqual(result, true);
    });
    it('should return false for duplicate characters', () => {
      let test = allCharacters;
      test += 'a';
      const result = StringHelper.allUniqueCharactersNoDataStructures(test);
      assert.strictEqual(result, false);
    });
  });
});

