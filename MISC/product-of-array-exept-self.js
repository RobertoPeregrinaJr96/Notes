/**
 * @param {number[]} nums
 * @return {number[]}
 */


/*
Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

we are given a array of unknown length but there is at least 1
return the value in the array that equals to the rest of the array combined

Example:
Input: [1,2,3,4]
Output: [24,12,8,6]

2*3*4 = 24
1*3*4 = 12
1*2*4 = 8
1*2*3 = 6

*/

const productExceptSelf = function (nums) {
    // Your code here

    const output = []
    // for (let i = 0; i < nums.length; i++) {
    //     let temp = nums.splice(0, 1)
    //     let sum = nums.reduce((a, b) => a * b)
    //     nums.push(...temp)
    //     output.push(sum)
    // }

    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        let sumOfProduct = 1

        for (let j = nums.length - 1; j > 0; j--) {
            let nextNumber = nums[j]
            console.log("nextNumber: ", nextNumber)
            if (nextNumber !== currentNumber) {
                sumOfProduct = sumOfProduct * nextNumber
                console.log("SUM Of PRODUCT: ", sumOfProduct)
            }
        }
        if (sumOfProduct !== 1) {
            output.push(sumOfProduct)
        }
    }

    console.log(output)
    return output

};

let arr = [1, 2, 3, 4]

productExceptSelf(arr)

module.exports = productExceptSelf;
