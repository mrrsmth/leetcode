// Programming Skills

// 2620. Counter
// https://leetcode.com/problems/counter/description/

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Example 1:

// Input:
// n = 10
// ["call","call","call"]
// Output: [10,11,12]
// Explanation:
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input:
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

/**
 * @param {number} n
 * @return {Function} counter
 */

const createCounter = (n) => {
    let i = -1;
        return () => {
            i++;
            return i + n;
        };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// 43. Multiply Strings
// https://leetcode.com/problems/multiply-strings/description/?envType=study-plan-v2&envId=programming-skills
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
    const num1Big = BigInt(num1);
    const num2Big = BigInt(num2);
    return (num1Big * num2Big).toString();
};

//  1768. Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

const mergeAlternately = (word1, word2) => {
    const word1Arr = word1.split('');
    const word2Arr = word2.split('');
    const outputArr = [];

    let i = 0;
    let j = 0;

    while (i < word1Arr.length || j < word2Arr.length) {
        if (i < word1Arr.length) {
            outputArr.push(word1Arr[i]);
            i++;
        }
        if (j < word2Arr.length) {
            outputArr.push(word2Arr[j]);
            j++;
        }
    }

    return outputArr.join('');
};
