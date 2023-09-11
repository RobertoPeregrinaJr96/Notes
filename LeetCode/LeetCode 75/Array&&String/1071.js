
/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {

    let arr = str1.split('')
    let arr2 = []
    console.log(str1.length % str2.length === 0)
    if (str1.length % str2.length === 0) {

        for (let i = 0; i < str2.length; i++) {
            arr2.push(arr.shift())
        }
        if (arr2.join('') === arr.join('')) {
            console.log(arr.join(''))
            return arr.join('')
        }
    }
    return this
};

gcdOfStrings('ABCABC', 'ABC')
gcdOfStrings('CBAABC', 'ABC')

/*
Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""


Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.

*/
