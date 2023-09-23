
/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring
*/

const longestNonRepeatingSubstring = function (string) {
    // Your code here
    const container = new Set();
    let max = 0
    let j = string.length
    let i = 0
    while (i < j) {
      if (container.has(string[i])) {
        if (max < container.size) {
          max = container.size
        }
        container.clear();
      }
      container.add(string[i])
      console.log(container)
      i++
    }
    return max
  };

  longestNonRepeatingSubstring('pwke')


  module.exports = longestNonRepeatingSubstring;
