/*
 Subarray Sum Equals K

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
1. The length of the array is in range [1, 20,000].
2. The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
*/

function subarraySum (array, num){
  let count = 0
  for(let i = 0; i < array.length; i++){
    let sum = 0
    for(let j = i; j < array.length; j++){
      sum += array[j]
      if(sum === num){
        count++
      }
    }
  }
  console.log(count)
}

subarraySum([1,2,3], 3)
