// Greedy algorithms

function maxSum(stackOne, stackTwo, stackThree, n1, n2, n3) {
    let sum1 = 0; let sum2 = 0; let sum3 = 0
    // Finding the initial sum of stackOne.
    for (let i = 0; i < n1; i++)
        sum1 += stackOne[i];

    // Finding the initial sum of stackTwo.
    for (let i = 0; i < n2; i++)
        sum2 += stackTwo[i];

    // Finding the initial sum of stackThree.
    for (let i = 0; i < n3; i++)
        sum3 += stackThree[i];

    let top1 = 0, top2 = 0, top3 = 0;
    while (true) {
        // If any stack is empty
        if (top1 == n1 || top2 == n2 ||
            top3 == n3)
            return 0;
        // If sum of all three stack are equal.
        if (sum1 == sum2 && sum2 == sum3)
            return sum1;
        // Finding the stack with maximum sum and 
        // removing its top element.
        if (sum1 >= sum2 && sum1 >= sum3) {
            sum1 -= stackOne[top1]
            top1++
        }
        else if (sum2 >= sum1 && sum2 >= sum3) {
            sum2 -= stackTwo[top2]
            top2++
        }
        else if (sum3 >= sum2 && sum3 >= sum1) {
            sum3 -= stackThree[top3];
            top3++
        }
    }
}

let stackOne = [3, 2, 1, 1, 1]
let stackTwo = [4, 3, 2]
let stackThree = [1, 1, 4, 1]

let n1 = stackOne.length;
let n2 = stackTwo.length;
let n3 = stackThree.length;

console.log(maxSum(stackOne, stackTwo, stackThree, n1, n2, n3))