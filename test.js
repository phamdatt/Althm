// function gcd(a, b) {
//     if (b == 0) {
//         return a;
//     }
//     else {
//         return gcd(b, a % b);
//     }
// }
// console.log(gcd(18, 6))
let arr = ['a', 'b']
function test() {
    let map = new Map()
    for (value of arr) {
        map.set(value, value)
    }
    console.log(map)
}
test()
arr = ['b', 'a']
test()

let map = new Map();
map.set('a', 'a');

// Lấy keys từ Map và chuyển thành mảng
let keysArray = Array.from(map.keys());

// Chuyển mảng keys thành chuỗi
let keysString = keysArray.join(', ');

console.log(keysString);