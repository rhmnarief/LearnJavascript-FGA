// var isPalindrome = function(x) {
//     let paramsToString = x.toString();
//     let paramsToArray = paramsToString.split('')
//     // ['-', '1' ,'2' , '1']
//     var reverseText = ""
//     for(let i = paramsToArray.length ; i  > 0 ; i--){
//         reverseText += paramsToArray[i-1]
//     }
//     if(reverseText === paramsToString){
//         return true
//     }else{
//         return false
//     }
// }
// isPalindrome(-121);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// [1,1,2,3,3,4,4]
// let countFor = 0
// var mergeTwoLists = function(list1, list2) {
//     let mergeList = list1.concat(list2)
//     let rersultList = mergeList.sort(function(a, b){return a - b});
//     console.log(rersultList) 
// };

// mergeTwoLists([1,2,4],[1,3,4]);

// var mergeTwoList = (list1, list2) => {
//     mergeList = list1.concat(list2).sort();
//     console.log(mergeList)
//   }
  
//   mergeTwoList([1, 2, 4], [1, 3, 4]);
  
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
  // Input: nums = [5,4,-1,7,8]
// Output: 23

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let resultValue = []
    let tempValue = 0
    for (let i = 0 ; i < nums.length; i++) {
      let currentValue = nums[i]
      let compareValue = tempValue + currentValue
      if (tempValue > compareValue){
        console.log(resultValue, tempValue, compareValue)
        resultValue.shift()
      }
        resultValue.push(currentValue)
        tempValue = resultValue.reduce((a,b)=> a+b,0)
      
    }
    console.log('akhir',resultValue)
    console.log('akhir',tempValue)
    return tempValue
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);