/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
}
var mergeTwoLists = function (list1, list2) {
    let arrOne = []
    let arrTwo = []
    while (list1) {
        arrOne.push(list1.val)
        list1 = list1.next
    }
    while (list2) {
        arrTwo.push(list2.val)
        list2 = list2.next
    }
    arrOne = arrOne.concat(arrTwo).sort((a, b) => a - b)
    let head = new ListNode(null);
    let current = head;
    for (let value of arrOne) {
        current.next = new ListNode(value);
        current = current.next;
    }
    return head.next;
};

console.log(mergeTwoLists())