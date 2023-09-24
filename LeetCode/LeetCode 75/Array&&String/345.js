/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.



*/

/**
 * @param {string} s
 * @return {string}

    we have a String as a parameter
    the expected outcome is the string with the vowels in reverse order

 */
var reverseVowels = function (s) {
   let start = 0;
   let end = s.length - 1;
   const VOWELS = new Set(["a", "i", "u", "e", "o","A", "I", "U", "E", "O"])
   const ans = [...s];
   while(start < end){
     if(!VOWELS.has(ans[start]))
       start++;
     if(!VOWELS.has(ans[end]))
       end--;
     if(VOWELS.has(ans[start]) && VOWELS.has(ans[end])){
       const temp = ans[start];
       ans[start] = ans[end];
       ans[end] = temp;
       start++
       end--;
     }
   }
   return ans.join("");
};

/*

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"


Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
Accepte
*/
