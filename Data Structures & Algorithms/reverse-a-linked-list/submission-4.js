/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) {
            return null
        }

        let prev = null
        let curr = head
        let next = head.next

        while (curr.next != null) {
            curr.next = prev
            prev = curr
            curr = next
            next = next.next
        }

        curr.next = prev

        return curr
    }
}
