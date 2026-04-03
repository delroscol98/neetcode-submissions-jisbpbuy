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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) {
            return list2
        }

        if (!list2) {
            return list1
        }

        let temp = new ListNode()
        let red = list1
        let blue = list2

        if (red.val <= blue.val) {
            temp.next = red
            red = red.next
        } else {
            temp.next = blue
            blue = blue.next
        }

        let curr = temp.next
        while (red != null && blue != null) {
            if (red.val <= blue.val) {
                curr.next = red
                red = red.next
            } else {
                curr.next = blue
                blue = blue.next
            }
            curr = curr.next
        }

        while (red != null) {
            curr.next = red
            red = red.next
            curr = curr.next
        }

        while (blue != null) {
            curr.next = blue
            blue = blue.next
            curr = curr.next
        }

        let head = temp.next
        temp.next = null

        return head

    }
}
