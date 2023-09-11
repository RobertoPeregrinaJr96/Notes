/**

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

*/


/**
 * there are 2 arguments
 * combine both arguments together
 * the order will be argument 1 then argument 2 back and forth till both are combined together
 * if one argument is longer then the other then add the left over letters to the end of the combined word
 * return the merged string
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
*/

// Brute Force
// current solution = Runtime: 159 ms ,Memory: 50.41 md
var mergeAlternately = function (word1, word2) {
    let returningValue = ''

    let arr1 = word1.split('')
    let arr2 = word2.split('')

    while (arr1.length > 0 || arr2.length > 0) {
        let letter1 = arr1[0] !== undefined ? arr1.shift() : ''
        let letter2 = arr2[0] !== undefined ? arr2.shift() : ''
        returningValue += letter1
        returningValue += letter2
    }
    return returningValue
};

// Efficient solution
/**
 * With this iteration it is always consent with its length as Math.Max would establish a hard endpoint and not a nth endpoint
 */
// current solution = Runtime: 55 ms ,Memory: 42.06 md
var mergeAlternately = function (word1, word2) {
    let maxLength = Math.max(word1.length, word2.length);
    let returningValue = "";
    for (let i = 0; i < maxLength; i++) {
        returningValue += (word1[i] || '') + (word2[i] || '');
    }
    return returningValue;
};

// mergeAlternately('ab', 'dgkd')
/*

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q
merged: a p b q c   d


Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
*/
