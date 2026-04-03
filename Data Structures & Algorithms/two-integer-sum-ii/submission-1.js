class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let arr = []

        let i = 0
        let j = numbers.length - 1

        while (true) {
            const sum = numbers[i] + numbers[j]
            if (sum > target) {
                j--
            } else if (sum < target) {
                i++
            } else {
                arr[0] = i + 1
                arr[1] = j + 1
                return arr
            }
        }
        
    }
}
