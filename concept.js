function breakOutOfForEach() {
    let arr = [-1, -2, -3, 0, 1, 2, 3]
    arr.forEach((item) => {
        if (item >= 0) {
            console.log(item)
            return;
        }
    })
}

breakOutOfForEach()