class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       let closeToOpen = {
        ")" : "(",
        "}" : "{",
        "]" : "["
       } 
       let stack = []

       for (const char of s) {
        if (char == '{' || char == '[' || char == '(') {
            stack.push(char)
        }else{
            if( stack.length == 0 || stack.pop() != closeToOpen[char]) {
                return false
            }
        }
       }
       return stack.length == 0
    }
}
