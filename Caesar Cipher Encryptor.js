/* Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a.

Sample Input:
string = "xyz" key = 2
Sample Output:
"zab" 
*/

// Solution 1
// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join('');
}

function getNewLetter(letter, key) {
  const newLetterCode = letter.charCodeAt() + key;
  return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));
}

exports.caesarCipherEncryptor = caesarCipherEncryptor;


// Solution 2
// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey, alphabet));
  }
  return newLetters.join('');
}

function getNewLetter(letter, key, alphabet) {
  const newLetterCode = alphabet.indexOf(letter) + key;
  return alphabet[newLetterCode % 26];
}

exports.caesarCipherEncryptor = caesarCipherEncryptor;