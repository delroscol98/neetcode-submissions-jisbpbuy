class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sSet = this.createSet(s)
        let tSet = this.createSet(t)

        for (let i = 0; i < 26; i++) {
            if (sSet[i] != tSet[i]) return false
        }

        return true
    }

    createSet(str) {
        let set = new Array(26).fill(0)

        for (let i = 0; i < str.length; i++) {
            set[str.charCodeAt(i) - 'a'.charCodeAt(0)]++
        }

        return set
    }
}
