// var numberOfEmployeesWhoMetTarget = function (hours, target) {
//     let k =0
//     for(let i=0;i<hours.length;i++) {
//         if(hours[i]>=target){
//             k++
//         }
//     }
//     return k
// };

var numberOfEmployeesWhoMetTarget = function (hours, target) {
    //Sort hours
    let sortedHours = hours.sort((a, b) => a - b);
    //Check if any items are in array that are >= target
    let num = sortedHours.find(item => item >= target);

    let numIndex = sortedHours.indexOf(num);

    let res = sortedHours.slice(numIndex, hours.length)
    if (numIndex !== -1) return res.length

    return 0;
}

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2))