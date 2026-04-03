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
    quickSort(pairs) {
        const sort = (array, left = 0, right = array.length - 1) => {
            if (left < right) {
                let splitIndex = this.pivot(array, left, right)
                sort(array, left, splitIndex - 1)
                sort(array, splitIndex + 1, right)
            }
            return array
        }

        return sort(pairs)
    }

    pivot(array, startIndex = 0, endIndex = array.length - 1) {
        let pivotValue = array[endIndex].key
        let swapIndex = startIndex
        for (let i = startIndex; i < endIndex; i++) {
            if (array[i].key < pivotValue) {
                this.swap(array, swapIndex, i)
                swapIndex++
            }
        }
        this.swap(array, swapIndex, endIndex)

        return swapIndex
    }

    swap(array, i, j) {
        if (i != j) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array
    }
}
 