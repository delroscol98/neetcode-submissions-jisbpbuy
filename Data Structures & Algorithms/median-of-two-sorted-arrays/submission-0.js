class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A
        let B

        if (nums1.length < nums2.length) {
            A = nums1
            B = nums2
        } else {
            A = nums2
            B = nums1
        }

        let total = nums1.length + nums2.length
        let half = Math.floor(total / 2)

        let l = 0
        let r = A.length - 1

        while (true) {
            let a = Math.floor((l + r) / 2)
            let b = half - a - 2

            let ALeftMax = a >= 0 ? A[a] : -Infinity
            let ARightMin = a + 1 < A.length ? A[a + 1] : Infinity
            let BLeftMax = b >= 0 ? B[b] : -Infinity
            let BRightMin = b + 1 < B.length ? B[b + 1] : Infinity

            if (ALeftMax <= BRightMin && ARightMin >= BLeftMax) {
                let median = 0
                if (total % 2 == 1) {
                    median = Math.min(ARightMin, BRightMin)
                } else {
                    median = (Math.max(ALeftMax, BLeftMax) + Math.min(ARightMin, BRightMin)) / 2
                }
                return median
            } else if (BLeftMax > ARightMin) {
                l = a + 1
            } else {
                r = a - 1
            }
        }
    }
}
