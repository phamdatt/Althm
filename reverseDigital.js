function reverseDigital(x) {
    let result = 0;
    let digital = 0;
    while (x) {
        digital = x % 10
        result = (result * 10) + digital
        x = x / 10 | 0
    }
    return result
}
reverseDigital(1534236469)