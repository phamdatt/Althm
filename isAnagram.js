var isAnagram = function (s, t) {
  let result = ''
  if (s.length != t.length) return false
  for (let i = 0; i < s.length; i++) {
    let index = t.search(s[i])
    if (index == -1) {
      return false
    } else {
      t = t.slice(0, index) + t.slice(index + 1);
      result += (s[i])
    }
  }
  return result === s
};
isAnagram('rat', 'car')


// two case
// console.log("anagram".split("").sort())

var isAnagram = (s, t) => {
  s = s.split("").sort()
  t = t.split("").sort()
  if (s.length != t.length) {
    return false
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] != t[i]) {
      return false
    }
  }
  return true
}