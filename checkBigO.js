function findX(nums,number){
    let spot = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i] === number){
            spot = i
        }
    }
    return spot
}

function checkBigONonation(callback,n){
    let count = callback
    if(count === n-1){
        return 'O(n)'
    }
    if(n/2 === spot){
        return 'O(logn)'
    }
}
let arr = [1,2,3,4,5,6,7,8]
console.log(checkBigONonation(findX(arr,8),arr.length))