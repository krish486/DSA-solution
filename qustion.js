/**
 * You are given an integer array prices where prices[i] is the price of the ith item in a shop.

There is a special discount for items in the shop. If you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Otherwise, you will not receive any discount at all.

Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop, considering the special discount.



Example 1:

Input: prices = [8,4,6,2,3]
Output: [4,2,4,2,3]
Explanation:
For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
For items 3 and 4 you will not receive any discount at all.
Example 2:

Input: prices = [1,2,3,4,5]
Output: [1,2,3,4,5]
Explanation: In this case, for all items, you will not receive any discount at all.
Example 3:

Input: prices = [10,1,1,6]
Output: [9,0,1,6]
 >

Constraints:

1 <= prices.length <= 500
1 <= prices[i] <= 1000
 */

// let stack = []
// const prices = [8, 4, 6, 2, 3]
// let answer = [...prices]
// for (let i = 0; i < prices.length; i++) {
//     if (stack.length === 0) {
//         stack.push(i)
//         continue
//     }
//     while (prices[stack[stack.length - 1]] >= prices[i]) {
//         let top = stack.pop()
//         answer[top] -= prices[i]
//     }
//     stack.push(i)
// }
// console.log("ans-", answer)




///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
 

Constraints:
1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
 */
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
let ans = []
let stack = []
let i = temperatures.length - 1;
while (i >= 0) {
    if (stack.length === 0) {
        stack.push(i)
        ans[i] = 0
    }
    else {
        if (temperatures[i] <= temperatures[stack[stack.length - 1]]) {
            stack.push(i);
            ans[i] = stack[stack.length - 1] - i;
        }
        else {
            let temp = stack.pop();
            
        }

    }

    i--;
}