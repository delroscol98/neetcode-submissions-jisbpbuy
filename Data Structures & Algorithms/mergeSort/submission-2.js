/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        if (pairs.length <= 1) {
            return pairs
        }

        let mid = Math.floor(pairs.length / 2)
        let left = this.mergeSort(pairs.slice(0, mid))
        let right = this.mergeSort(pairs.slice(mid))

        return this.merge(left, right)
    }

    merge(arr1, arr2) {
        let combined = []
        let i = 0
        let j = 0

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i].key <= arr2[j].key) {
                combined.push(arr1[i])
                i++
            } else {
                combined.push(arr2[j])
                j++
            }
        }

        while (i < arr1.length) {
            combined.push(arr1[i])
            i++
        }

        while (j < arr2.length) {
            combined.push(arr2[j])
            j++
        }

        return combined
    }
}
