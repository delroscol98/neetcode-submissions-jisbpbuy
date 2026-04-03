class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        let a = []
        let b = []

        for (const char of s) {
            a.push(char)
        }

        for (const char of t) {
            b.push(char)
        }

        a = mergeSort(a)
        b = mergeSort(b)

        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                return false
            }
        }

        return true
    }
}

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr
    }

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(a, b) {
    let combined = []

    let i = 0
    let j = 0

    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) {
            combined.push(a[i])
            i++
        } else {
            combined.push(b[j])
            j++
        }
    }

    while (i < a.length) {
        combined.push(a[i])
        i++
    }

    while (j < b.length) {
        combined.push(b[j])
        j++
    }

    return combined
}
