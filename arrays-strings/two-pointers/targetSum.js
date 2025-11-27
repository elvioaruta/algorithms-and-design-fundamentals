// Opposite Direction

// Problem Statement
// Find Target Sum
// Given a sorted array of integers, find the indices of 
// two numbers that add up to a specific target number.
// Assume there is exactly one solution.

// Example:
// Input: numbers = [2, 7, 11, 15], 
// target = 9
// Output: [0, 1] (Since $2 + 7 = 9$)

const findTargetSum = (nums, target) => {
    if (nums.length === 0) return;
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
        const sum = nums[i] + nums[j];
        if (sum == target ) return [i, j];
        if (sum < target ) i++;
        if (sum > target ) j--;
    }
    return [0,0] // No solution
}

console.log(`findTargetSum([2, 7, 11, 15], 9)
    -> ${findTargetSum([2, 7, 11, 15], 9)}`); // 0, 1
    