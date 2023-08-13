/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
    // let result = []
    // for(let i=0;i<nums.length;i++){
    //     let j = 0;
    //     let childArr = nums[i].toString().split("")
    //     while(j<childArr.length){
    //         result.push(Number(childArr[j]))
    //         j++
    //     }
    // }
    // return result
    const arr = nums.map((el) => {
        let arr = [];
        while (el !== 0) {
            arr.push(el % 10);
            el = Math.trunc(el / 10)
        }
        return arr.reverse()
    });
    return [].concat(...arr)
};
separateDigits([10921])