class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if(s.length != t.length) return false
       
        let sMap = {}
        let tMap = {}

        for(let i = 0; i < s.length;i++){
            let curr = s[i]

            if(sMap[curr] == undefined){
                sMap[curr] = 1
            }else{
                sMap[curr]++
            }
        }

        for(let j = 0; j < t.length;j++){
            let curr = t[j]

            if(tMap[curr] == undefined){
                tMap[curr] = 1
            }else{
                tMap[curr]++
            }
        }
    
        let entries = Object.entries(sMap)
        for(let i = 0; i < entries.length; i++){
                let char = entries[i][0]
                let count = entries[i][1]

                if(count != tMap[char]){
                    return false
                }
        }
        

        return true
    }

    

    
}
