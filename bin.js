// function bin(n) {
//     let i;
//     let str = ""
//     for (i = 1 << 30; i > 0; i = Math.floor(i / 2)) {
//         if ((n & i) != 0) {
//             str += '1'
//         }
//         else {
//             str += '0'
//         }
//     }
// }

// bin(7)

// console.log(5 >> 1)
// console.log(5 << 1)
// 0101
// 0010
// 0101
// 1010


// 5/2 = 2/1
// 2/2 = 1/0
// 1/2 = 0/1


//101

// 1*2^2 + 0*2^1 + 1*2^0 = 4+0+1 =5
//12
// const arr = ["a", "b", "c"];

// // Mô phỏng việc kết nối:
// for (let i = 0; i < 9; i++) {
//     if (i < arr.length) {
//         const username = arr[i];
//         console.log("User connected with username: " + username);
//     } else {
//         const username = arr[i % arr.length] + (Math.floor((i - arr.length) / arr.length) + 1);
//         console.log("User connected with username: " + username);
//     }
// }

let course = ['php', 'js', 'java']
for (let i = 0; i < 9; i++) {
    console.log(i % course.length)
}
