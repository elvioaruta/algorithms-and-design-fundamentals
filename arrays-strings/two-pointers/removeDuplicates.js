// Same Direction (fast/slow pattern)

// Problem statement:
// Removing Duplicates
// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.

// Since it's an in-place operation, the result of the function must be 
// the number of unique elements, and the first k elements of the array 
// should contain the unique elements.

// Example:
// Input: nums = [1, 1, 2]
// Output: k = 2, with the first two elements of nums being [1, 2].

const removeDuplicates = (nums) => {
    let i = 0;
    let j = 1;
    if (!nums.length) return 0;
    for (j; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
}

const duplicatesNum1 = [1, 1, 2]
const duplicatesNum2 = [1, 2, 3, 3, 4, 4, 5]

console.log(`removeDuplicates(${duplicatesNum1}) 
    -> k=${removeDuplicates(duplicatesNum1)} , ${duplicatesNum1}`
); // k = 2, 1,2,2
console.log(`removeDuplicates(${duplicatesNum2}) 
    -> k=${removeDuplicates(duplicatesNum2)} , ${duplicatesNum2}`
); // k = 5, 1,2,3,4,5,4,5
