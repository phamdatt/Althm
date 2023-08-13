var removeElement = function (nums, val) {
    let k = 0;  // initialize the index of the next valid element
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {  // if the current element is not equal to val
            nums[k] = nums[i];  // copy the current element to the next valid position
            k++;  // increment the index of the next valid position
        }
    }
    console.log(k)
    return k;
};

removeElement([3, 2, 2, 3], 3)