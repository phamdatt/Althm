/**
 *  Given an array A of N elements. Find the majority element in the array.
 *  A majority element in an array A of size N is an element that appears more than N/2 times in the array.
 */
/**
 * 
 * @param {number[]} a 
 * @param {number} size 
 */

function majorityElement(a, size) {
    // Approach
    // Time 0(N +log(N))
    //Space: 0(1)

    // let count = 1
    // a.sort((a, b) => a - b)
    // let pilot = a[0]
    // if(a.length === 1){
    //     return a[0]
    // }
    // for (let i = 1; i < size; i++) {
    //     if (pilot === a[i]) {
    //         count++
    //     } else {
    //         pilot = a[i]
    //         count = 1
    //     }
    // }
    // return count > (size / 2) ? count : -1

    //Approach two
    // Time 0(N)
    //Space: 0(1)

    let count = 1;
    let candidate = a[0];
    for (let i = 1; i < size; i++) {
        if (a[i] == candidate) {
            count++;
        }
        else {
            count--;
        }

        if (count == 0) {
            candidate = a[i];
            count = 1;
        }
    }

    count = 0;
    
    for (let j = 0; j < size; j++) {
        if (a[j] == candidate) {
            count++;
        }
        if (count > (size / 2)) {
            return candidate;
        }
    }


    return -1;
}

console.log(majorityElement([15], 1))
//Output: -1

//Input: [3,1,3,3,2]
//Output: 3