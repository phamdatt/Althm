/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
        let len = needle.length;
    if(!needle || !len){
        return -1;
    }
    
    for(let i=0;i<haystack.length;i++){
        if(haystack.slice(i,i+len) === needle){
            return i;
        }
    }
    return -1;
};

console.log(greatestLetter("arRAzFif"))