class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1.length <= nums2.length ? nums1 : nums2
        let B = nums1.length <= nums2.length ? nums2 : nums1

        let totalLength = nums1.length + nums2.length
        let half = Math.floor(totalLength / 2)
        
        let l = 0
        let r = A.length - 1

        while (true) {
            let a = Math.floor((l + r) / 2)
            let b = half - a - 2

            let w = a >= 0 ? A[a] : -Infinity
            let x = (a + 1) < A.length ? A[a + 1] : Infinity
            let y = b >= 0 ? B[b] : -Infinity
            let z = (b + 1) < B.length ? B[b + 1] : Infinity

            if (w > z) {
                r = a - 1
            } else if (y > x) {
                l = a + 1
            } else {
                let median = 0

                if (totalLength % 2 == 1) {
                    median = Math.min(x, z)
                } else {
                    median =  (Math.max(w, y) + Math.min(x, z)) / 2
                }

                return median
            }

        }
    }
}

