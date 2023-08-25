function forOf(arr) {
    // for (var value of arr) {
    //     console.log(value)
    // }

    // for (var [index, value] of arr.entries()) {
    //     console.log(index, value);
    // }
    for (const { name } of arr) {
        console.log(name);
    }
}
let arr = ['Pham Tien Dat', 'Duong Thi Cam Nhung']
const persons = [
    { name: 'dmitripavlutin' },
    { name: 'anonystick' }
];

forOf(persons)