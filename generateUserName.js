

let arrUserName = [
    'Tai', 'Nguyen', 'Dat', 'Hoa', 'Minh', 'Anh', 'Tien', 'Thai'
]
function generateUserName(n) {
    let map = new Map()
    if (n <= arrUserName.length) {
        return arrUserName
    }
    for (let i = 0; i < n; i++) {
        if (i < arrUserName.length) {
            map.set(arrUserName[i], i)
        } else {
            const username = arrUserName[i % arrUserName.length] + (Math.floor((i - arrUserName.length) / arrUserName.length) + 1);
            map.set(username, i)
        }
    }
    return [...map].map((item) => item[0])
}

console.log(generateUserName(32))

console.log((Math.floor((i - arrUserName.length) / arrUserName.length) + 1))