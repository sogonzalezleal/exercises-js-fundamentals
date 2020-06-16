/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function findLongestWord(str) {
  var words = str.split(' ');
  var len = 0;

 words.forEach(function(word){
   if(word.length > len) {
     len = word.length;
   }
 });

  return len;
}

if (require.main) {
  console.log('Running sanity checks for longestWord:');

}

module.exports = longestWord;
