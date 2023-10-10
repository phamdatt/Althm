
/**
 *  You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

    Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.
 */
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let maxSalary = Math.max(...salary)
    let minSalary = Math.min(...salary)
    let result = salary.filter((item) => item == maxSalary || item == minSalary ? false : true)
    return result.reduce((acc, curr) => (acc + curr), 0) / result.length
};
console.log(average([4000, 3000, 1000, 2000]))
// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// console.log("abcd".slice(0,3))