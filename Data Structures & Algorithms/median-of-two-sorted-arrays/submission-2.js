class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1.length <= nums2.length ? nums1 : nums2
        let B = nums1.length > nums2.length ? nums1 : nums2

        let totalLength = A.length + B.length
        let half = Math.floor(totalLength / 2)

        let l = 0
        let r = A.length - 1

        while (true) {
            let a = Math.floor((l + r) / 2)
            let b = half - a - 2

            let AMaxLeft = a >= 0 ? A[a] : -Infinity
            let AMinRight = a + 1 < A.length ? A[a + 1] : Infinity
            let BMaxLeft = b >= 0 ? B[b] : -Infinity
            let BMinRight = b + 1 < B.length ? B[b + 1] : Infinity

            if (AMaxLeft <= BMinRight && BMaxLeft <= AMinRight) {
                let median = 0
                if (totalLength % 2 == 1) {
                    median = Math.min(AMinRight, BMinRight)
                } else if (totalLength % 2 == 0) {
                    median = (Math.max(AMaxLeft, BMaxLeft) + Math.min(AMinRight, BMinRight)) / 2
                }
                return median
            } else if (BMaxLeft > AMinRight) {
                l = a + 1
            } else {
                r = a - 1
            }
        }
    }
}
