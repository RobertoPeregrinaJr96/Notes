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
    // attempt 1
    const output = []
    // for (let i = 0; i < nums.length; i++) {
    //     let temp = nums.splice(0, 1)
    //     let sumOfProduct = nums.reduce((a, b) => a * b)
    //     nums.push(...temp)
    //     output.push(sumOfProduct)
    // }
    // =====================================================
    // attempt 2
    // for (let i = 0; i < nums.length; i++) {
    //     let sumOfProduct = 1
    //     for (let j = nums.length - 1; j > 0; j--) {
    //         let nextNumber = nums[j]
    //         if (i !== j) {
    //             sumOfProduct = sumOfProduct * nextNumber
    //         }
    //     }
    //     if (sumOfProduct !== 1) {
    //         output.push(sumOfProduct)
    //     }
    // }
    // =====================================================
    // attempt 3
    let sumOfProduct = 1
    let i = 0;
    let j = nums.length

    let stack = new Map()
    while (nums.length !== 0) {
        let temp = nums.pop()
        stack.set(temp, temp)
    };
    while (stack.size >= 0) {
        let temp = stack.get(nums[i])
        console.log(temp)
        stack.delete(temp)
        output.push(temp)
    }
    console.log(stack)



    console.log(output)
    return output
};

let arr = [1, 2, 3, 4]

productExceptSelf(arr)

module.exports = productExceptSelf;
